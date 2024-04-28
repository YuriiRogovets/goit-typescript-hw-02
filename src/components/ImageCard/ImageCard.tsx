import css from "./ImageCard.module.css";

function ImageCard({ photo, onSelect }) {
  return (
    <div
      className={css.imageCard}
      onClick={() => {
        // console.log(photo);
        onSelect(true, photo);
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
}

export default ImageCard;
