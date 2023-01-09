const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
        <button 
          onClick={onClose}
          onKeyDown={e => {
            if (e.key === 'Enter') onClose();
          }}
        >Play Again</button>
      </div>
    </div>
  );
};

export default Modal;