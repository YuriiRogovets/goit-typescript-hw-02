import { FC } from "react";
import { Photo } from "../servises/types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  photo: Photo;
  onSelect: (photo: Photo) => void;
}

const ImageCard: FC<ImageCardProps> = ({ photo, onSelect }) => {
  return (
    <div
      className={css.imageCard}
      onClick={() => {
        // console.log(photo);
        onSelect(photo);
      }}
    >
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        id={photo.id}
        width="360"
      />
    </div>
  );
};

export default ImageCard;
