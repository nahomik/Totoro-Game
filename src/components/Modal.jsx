const Modal = ({ message, onClose, gameTime }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
        {gameTime !== undefined && (
          <p>Time spent: {gameTime}</p>
        )}
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