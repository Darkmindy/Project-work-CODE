// MemberCard.tsx
import React from "react";
import "./MemberCard.css"; // Importa il file CSS per gli stili della MemberCard

interface MemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  description,
  image,
}) => {
  return (
    <div className="member-card">
      <div className="member-image-container">
        <img src={image} alt={name} className="member-image" />
      </div>
      <div className="member-details">
        <h2>{name}</h2>
        <p className="role">{role}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default MemberCard;
