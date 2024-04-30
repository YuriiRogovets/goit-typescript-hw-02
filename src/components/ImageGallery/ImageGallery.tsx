import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../servises/types";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  photos: Photo[];
  onSelect: (photo: Photo) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ photos, onSelect }) => {
  return (
    <div className={css.galleryWrapp}>
      <ul className={css.galleryList}>
        {photos.map((item) => {
          return (
            <li className={css.galleryItem} key={item.id}>
              <ImageCard photo={item} onSelect={onSelect} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
