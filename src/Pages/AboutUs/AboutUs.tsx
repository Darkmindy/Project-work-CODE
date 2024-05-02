// AboutUs.tsx
import React from "react";
import MemberCard from "../../Components/MemberCard/MemberCard";

const AboutUs = () => {
  return (
    <div>
      <MemberCard
        name="Stefania"
        role="Front-end Developer and Designer UX/UI"
        description="Front-end Developer con un'esperienza nel design. Ha la passione per i giochi di carte collezionabili e un occhio per i dettagli e la creatività."
        esperienza={true}
        utente={true}
        coinvolgente={true}
        intuitiva={true}
      />
      <MemberCard
        name="Vincenzo"
        role="Front-end Developer"
        description="Sviluppatore web con una passione per la musica e i giochi di carte collezionabili."
        esperienza={true}
        utente={true}
        coinvolgente={true}
        intuitiva={true}
      />
      <MemberCard
        name="Valentina"
        role="Frontend Developer"
        description="Maga dietro le quinte, assicura che tutto funzioni senza intoppi."
        esperienza={true}
        utente={true}
        coinvolgente={true}
        intuitiva={true}
      />
    </div>
  );
};

export default AboutUs;
