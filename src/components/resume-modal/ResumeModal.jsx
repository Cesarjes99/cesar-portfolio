import "./resume-modal.css";

function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleViewCV = () => {
    // Abrir el PDF en una nueva pestaña
    window.open("/Resume.pdf", "_blank");
  };

  const handleDownloadCV = () => {
    // Crear un enlace temporal para descargar el PDF
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOverlayClick = (e) => {
    // Cerrar el modal al hacer clic en el overlay (fondo oscuro)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="resume-modal">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ✕
        </button>
        <h2 className="modal-title">RESUME</h2>
        <p className="modal-description">
          View and download my resume. Explore my professional qualifications
          and experience.
        </p>
        <div className="modal-buttons">
          <button className="modal-button view-button" onClick={handleViewCV}>
            VIEW CV
          </button>
          <button
            className="modal-button download-button"
            onClick={handleDownloadCV}
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
