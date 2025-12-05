import "./contact-modal.css";

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Cerrar el modal al hacer clic en el overlay (fondo oscuro)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:cesarjes1999@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+526471171505";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/cesardejesuslarrinaga/", "_blank");
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="contact-modal">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ✕
        </button>
        <h2 className="modal-title">Get in contact with me</h2>
        <p className="modal-description">
          Get in contact with me by using any of these methods
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">E-mail:</span>
            <a
              href="mailto:cesarjes1999@gmail.com"
              className="contact-link"
              onClick={handleEmailClick}
            >
              cesarjes1999@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone number:</span>
            <a
              href="tel:+526471171505"
              className="contact-link"
              onClick={handlePhoneClick}
            >
              +52 6471171505
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/cesardejesuslarrinaga/"
              className="contact-link"
              onClick={handleLinkedInClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/cesardejesuslarrinaga/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
