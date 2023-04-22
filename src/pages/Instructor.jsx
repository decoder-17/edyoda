import { GiSandsOfTime } from "react-icons/gi";
import "../assets/css/Instructor.css";

export default function Instructor() {
  return (
    <div className="instructors">
      <div className="title">Instructors will be joining shortly.</div>
      <div className="card">
        <GiSandsOfTime size={40} />
        <div className="certificate-details-heading">Please stay tuned.</div>
      </div>
    </div>
  );
}
