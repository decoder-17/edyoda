import { useState } from "react";
import "../assets/css/Header.css";
import avatar from "../assets/avatar.svg";

export default function Header() {
  const [programId, setProgramId] = useState("DS031221");
  const [programName, setProgramName] = useState("Data Scientist Program");
  return (
    <div className="head">
      <div className="header">
        <div className="brand">Edyoda</div>
        <div className="profile">
          <div className="greet">Hi Test Learner!</div>
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
      <div className="domain">
        <div className="programid">{programId}</div>
        <div className="programName">{programName}</div>
      </div>
    </div>
  );
}
