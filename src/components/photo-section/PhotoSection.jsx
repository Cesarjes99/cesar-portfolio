import { useState } from "react";
import "./photo-section.css";
import cesarFoto from "../../assets/cesar-foto.jpeg";
import ContactModal from "../contact-modal/ContactModal";

function PhotoSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <section className="photo-section">
      <div className="photo-section-left">
        <h1>I Build responsive, user-friendly web applications</h1>
        <button className="get-in-touch-button" onClick={openContactModal}>
          Get in touch
        </button>
      </div>
      <img className="cesar-photo" src={cesarFoto} alt="Cesar-photo" />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>
  );
}

export default PhotoSection;
