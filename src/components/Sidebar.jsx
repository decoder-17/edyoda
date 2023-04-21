import { Link, useNavigate, useLocation } from "react-router-dom";
import "../assets/css/Sidebar.css";
import { FaHome } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
export default function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="sidebar">
      <ul className="menu">
        <Link to="/">
          <li className={splitLocation[1] === "" ? "active route" : "route"}>
            <div className="icon">
              {" "}
              <FaHome size={40} />{" "}
            </div>
            <div className="routename">Home</div>
          </li>
        </Link>
        <Link to="/module">
          <li
            className={splitLocation[1] === "module" ? "active route" : "route"}
          >
            <div className="icon">
              <GoFileSubmodule size={40} />
            </div>
            <div className="routename">Module</div>
          </li>
        </Link>
        <Link to="/instructor">
          <li
            className={
              splitLocation[1] === "instructor" ? "active route" : "route"
            }
          >
            <div className="icon">
              <BiSupport size={40} />
            </div>
            <div className="routename">Instructors</div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
