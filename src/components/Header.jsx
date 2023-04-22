import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/Header.css";
import avatar from "../assets/avatar.svg";
import { AiFillCaretDown } from "react-icons/ai";

export default function Header() {
  const [programId, setProgramId] = useState("DS031221");
  const [programName, setProgramName] = useState("Data Scientist Program");

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="head">
      <div className="header">
        <div className="brand">Edyoda</div>
        <div className="profile">
          <div className="greet">Hi Test Learner!</div>
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
      {splitLocation[1] === "" ? (
        <div className="domain">
          <div className="programid">
            {programId}{" "}
            <AiFillCaretDown onClick={showDropdown} className="dropdown-icon" />
          </div>

          <div className="programName">{programName}</div>
        </div>
      ) : (
        <div className="domain">
          <div className="programid">{programId}</div>
          <div className="programName">{programName}</div>
        </div>
      )}
      {dropdown && (
        <div className="dropdown">
          <div className="dropdown-heading">Select program</div>
          <div className="programs">
            <div className="program-id">ECRD</div>
            <div className="program-id">fsr222222</div>
            <div className="program-id">ds261121</div>
            <div className="program-id">ds031221</div>
          </div>
        </div>
      )}
    </div>
  );
}
