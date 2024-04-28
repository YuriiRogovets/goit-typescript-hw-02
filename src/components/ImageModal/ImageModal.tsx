import Modal from "react-modal";
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

Modal.setAppElement("#root");

function ImageModal({ photo, isOpen = false, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeModal(false)}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
    >
      {photo.urls && (
        <img src={photo.urls.regular} alt={photo.alt_description} />
      )}
    </Modal>
  );
}

export default ImageModal;
