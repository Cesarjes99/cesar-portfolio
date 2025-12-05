import "./games-modal.css";

function GamesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleTenziesClick = () => {
    window.open("https://cesarjes99.github.io/Tenzies/", "_blank");
  };

  const handleHangManClick = () => {
    window.open("https://cesarjes99.github.io/CesarHangMan/", "_blank");
  };

  const handleOverlayClick = (e) => {
    // Cerrar el modal al hacer clic en el overlay (fondo oscuro)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="games-modal">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ✕
        </button>
        <h2 className="modal-title">Select a game</h2>
        <p className="modal-description">
          Now you get to choose between one of my two personal games-projects.
          They were both developed using JavaScript and React.
        </p>
        <div className="modal-buttons">
          <button
            className="modal-button tenzies-button"
            onClick={handleTenziesClick}
          >
            🎲 TENZIES
          </button>
          <button
            className="modal-button hangman-button"
            onClick={handleHangManClick}
          >
            🎯 HANG-MAN
          </button>
        </div>
      </div>
    </div>
  );
}

export default GamesModal;
