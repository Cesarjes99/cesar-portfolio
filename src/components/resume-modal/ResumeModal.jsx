import "./resume-modal.css";

function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleViewCV = () => {
    // Aquí puedes agregar la lógica para ver el CV
    // Por ejemplo, abrir un PDF o redirigir a una página
    console.log("Ver CV");
  };

  const handleDownloadCV = () => {
    // Aquí puedes agregar la lógica para descargar el CV
    // Por ejemplo, descargar un archivo PDF
    console.log("Descargar CV");
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
