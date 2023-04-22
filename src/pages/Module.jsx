import Submodule from "../components/Submodule";
import "../assets/css/Module.css";
import "../assets/css/Submodule.css";
import { useLocation } from "react-router-dom";

export default function Module() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="module">
      <Submodule />
      {splitLocation[2] === undefined && (
        <div className="heading">
          Please select the option you would like to access.
        </div>
      )}
    </div>
  );
}
