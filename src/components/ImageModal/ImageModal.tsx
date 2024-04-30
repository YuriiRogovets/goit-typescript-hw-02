import Modal from "react-modal";
import { Photo } from "../servises/types";
import { FC } from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
  },
};

interface ImageModalProps {
  photo: Photo | null;
  isOpen: boolean;
  closeModal: (state: boolean) => void;
}

Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({
  photo,
  isOpen = false,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeModal(false)}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
    >
      {photo && <img src={photo.urls.regular} alt={photo.alt_description} />}
    </Modal>
  );
};

export default ImageModal;
