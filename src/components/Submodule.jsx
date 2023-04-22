import activetopic from "../assets/activeTopic.svg";
import topic from "../assets/topic.svg";
import quiz from "../assets/moduleQuiz.svg";
import assignment from "../assets/assignment.svg";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Submodule.css";

export default function Submodule() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="submodule">
      <div className="submodule-option">
        <Link to="/module/topic">
          <div
            className={
              splitLocation[2] === "topic"
                ? "active submodule-menu"
                : "submodule-menu"
            }
          >
            <div className="submodule-icon">
              {" "}
              <img src={topic} alt="topic" />{" "}
            </div>
            <div className="menu-heading">Python Loops</div>
          </div>
        </Link>
        <Link to="/module/quiz">
          <div
            className={
              splitLocation[2] === "quiz"
                ? "active submodule-menu"
                : "submodule-menu"
            }
          >
            <div className="icon">
              <img src={quiz} alt="quiz" />
            </div>
            <div className="menu-heading">Quiz-1: Data Types</div>
          </div>
        </Link>
        <Link to="/module/assignment">
          <div
            className={
              splitLocation[2] === "assignment"
                ? "active submodule-menu"
                : "submodule-menu"
            }
          >
            <div className="icon">
              <img src={assignment} alt="assignment" />
            </div>
            <div className="menu-heading">Assignment-1: Operators | Loops</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
