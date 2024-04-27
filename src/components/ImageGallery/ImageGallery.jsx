import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onSelect }) => {
  return (
    <ul className={css.galleryList}>
      {photos.map((item) => {
        return (
          <li className={css.galleryItem} key={item.id}>
            <ImageCard photo={item} onSelect={onSelect} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
