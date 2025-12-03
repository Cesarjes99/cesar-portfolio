import "./photo-section.css";
import cesarFoto from "../../assets/cesar-foto.jpeg";

function PhotoSection() {
  return (
    <section className="photo-section">
      <div className="photo-section-left">
        <h1>I Build responsive, user-friendly web applications</h1>
        <button className="get-in-touch-button">Get in touch</button>
      </div>
      <img className="cesar-photo" src={cesarFoto} alt="Cesar-photo" />
    </section>
  );
}

export default PhotoSection;
