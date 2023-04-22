import activetopic from "../assets/activeTopic.svg";
import topic from "../assets/topic.svg";
import quiz from "../assets/moduleQuiz.svg";
import assignment from "../assets/assignment.svg";
import { Link, useLocation } from "react-router-dom";

export default function Submodule() {
  return (
    <div className="submodule">
      <div className="submodule-option">
        <Link to="/module/topic">
          <div className="submodule-menu">
            <div className="submodule-icon">
              {" "}
              <img src={topic} alt="topic" />{" "}
            </div>
            <div className="menu-heading">Python Loops</div>
          </div>
        </Link>
        <Link to="/module/quiz">
          <div className="submodule-menu">
            <div className="icon">
              <img src={quiz} alt="quiz" />
            </div>
            <div className="menu-heading">Quiz-1: Data Types</div>
          </div>
        </Link>
        <Link to="/module/assignment">
          <div className="submodule-menu">
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
