import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { getPhotosByQuery } from "../servises/api";
import ImageModal from "../ImageModal/ImageModal";
import "./App.module.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const onSetSearchQuery = (query: string) => {
    setSearchQuery(query);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function fetchDataByQuery() {
      setLoading(true);
      setIsError(false);

      try {
        const { data } = await getPhotosByQuery(searchQuery, page);

        setPhotos((prevPhoto) => {
          return [...prevPhoto, ...data.results];
        });

        setLoadMoreBtn(page < data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchDataByQuery();
  }, [searchQuery, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function openModal(state, photo) {
    setIsOpenModal(true);
    setSelectedPhoto(photo);
    console.log(photo);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  function onMessage() {
    toast.error("The search field cannot be empty!");
  }

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} onMessage={onMessage} />
      <ImageGallery photos={photos} onSelect={openModal} />
      <ImageModal
        isOpen={isOpenModal}
        photo={selectedPhoto}
        closeModal={closeModal}
      ></ImageModal>
      {loading && <Loader />}
      {isError && <ErrorMessage />}
      {loadMoreBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
