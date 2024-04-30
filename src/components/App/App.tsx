import { useEffect, useState, FormEvent } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { getPhotosByQuery } from "../servises/api";
import ImageModal from "../ImageModal/ImageModal";
import { Photo } from "../servises/types";
import "./App.module.css";

interface Data {
  results: Photo[];
  total: number;
  total_pages: number;
}

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]); //ok
  const [loading, setLoading] = useState<boolean>(false); //ok
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false); //ok
  const [isError, setIsError] = useState<boolean>(false); //ok
  const [searchQuery, setSearchQuery] = useState<string>(""); //ok
  const [page, setPage] = useState<number>(1); //ok
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false); //ok
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null); //ok

  const onSetSearchQuery = (query: string): void => {
    //ok
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
        const data: Data = await getPhotosByQuery(searchQuery, page);

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

  function openModal(photo: Photo): void {
    setIsOpenModal(true);
    setSelectedPhoto(photo);
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
