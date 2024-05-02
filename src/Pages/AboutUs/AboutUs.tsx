import React from "react";
import Navbar from "../../Components/Navbar/Navbar"; // Importa la navbar
import MemberCard from "../../Components/MemberCard/MemberCard";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar /> {/* Includi la navbar */}
      <div className="about-us-container">
        {/* Aggiungi uno spazio sopra l'elemento <h2> */}
        <h2 className="section-title" style={{ marginTop: "20px" }}>
          Our Team
        </h2>
        <div className="member-card-container">
          <MemberCard
            name="Stefania"
            role="Front-end Developer and Designer UX/UI"
            description="Front-end Developer con un'esperienza nel design. Ha la passione per i giochi di carte collezionabili e un occhio per i dettagli e la creatività."
            image={process.env.PUBLIC_URL + "/images/stefania.jpg"}
          />
          <MemberCard
            name="Vincenzo"
            role="Front-end Developer"
            description="Sviluppatore web con una passione per la musica e i giochi di carte collezionabili."
            image={process.env.PUBLIC_URL + "/images/vincenzo.jpg"}
          />
          <MemberCard
            name="Valentina"
            role="Front-end Developer"
            description="Maga dietro le quinte, assicura che tutto funzioni senza intoppi."
            image={process.env.PUBLIC_URL + "/images/valentina.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
