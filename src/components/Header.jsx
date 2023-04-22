import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/Header.css";
import avatar from "../assets/avatar.svg";
import { AiFillCaretDown } from "react-icons/ai";

export default function Header() {
  const [programId, setProgramId] = useState("Program ID");
  const [programName, setProgramName] = useState("Program Name");

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const updateProgram = (id, name) => {
    setProgramId(id);
    setProgramName(name);
  };

  return (
    <div className="head">
      <div className="header">
        <div className="brand">
          <a
            href="https://www.edyoda.com/"
            target="_blank"
            className="brand-name"
            rel="noreferrer"
          >
            Edyoda
          </a>
        </div>
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
            <div
              className={
                programId === "ECRD" ? "program-id selected" : "program-id"
              }
              onClick={() => {
                updateProgram("ECRD", "Elastic Container Registry Developer");
              }}
            >
              ecrd
            </div>
            <div
              className={
                programId === "FSR222222" ? "program-id selected" : "program-id"
              }
              onClick={() => {
                updateProgram("FSR222222", "Full Stack React Program");
              }}
            >
              fsr222222
            </div>
            <div
              className={
                programId === "DS261121" ? "program-id selected" : "program-id"
              }
              onClick={() => {
                updateProgram("DS261121", "Data Structures Program");
              }}
            >
              ds261121
            </div>
            <div
              className={
                programId === "DS031221" ? "program-id selected" : "program-id"
              }
              onClick={() => {
                updateProgram("DS031221", "Data Scientist Program");
              }}
            >
              ds031221
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
