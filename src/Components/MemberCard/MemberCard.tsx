// MemberCard.tsx
import React from "react";

interface MemberCardProps {
  name: string;
  role: string;
  description: string;
  esperienza: boolean;
  utente: boolean;
  coinvolgente: boolean;
  intuitiva: boolean;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  description,
  esperienza,
  utente,
  coinvolgente,
  intuitiva,
}) => {
  return (
    <div className="member-card">
      <h2>{name}</h2>
      <p>
        <strong>Role:</strong> {role}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Esperienza:</strong> {esperienza ? "Si" : "No"}
      </p>
      <p>
        <strong>Utente:</strong> {utente ? "Si" : "No"}
      </p>
      <p>
        <strong>Coinvolgente:</strong> {coinvolgente ? "Si" : "No"}
      </p>
      <p>
        <strong>Intuitiva:</strong> {intuitiva ? "Si" : "No"}
      </p>
    </div>
  );
};

export default MemberCard;
