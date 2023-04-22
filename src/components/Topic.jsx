import "../assets/css/Submodule.css";
import video from "../assets/videocam.svg";
import play from "../assets/play-circle.svg";
import info from "../assets/info.svg";
import reference from "../assets/document.svg";
export default function Topic() {
  return (
    <div className="submodule-topic">
      <div className="submodule-header">
        <div className="submodule-head">
          <div className="heading">Python Loops</div>
          <div className="date">15 December 2021, 07:30 PM</div>
        </div>
      </div>
      <div className="submodule-feedback">daily feedback</div>
      <div className="submodule-container">
        <ul className="topic-card-heading">
          <li className="card-header">
            <img src={info} alt="info" className="icon" />
            session plan
          </li>
          <li className="card-header">
            <img src={play} alt="play" className="icon" />
            pre-watch videos
          </li>
          <li className="card-header">
            <img src={video} alt="video" className="icon" />
            session recording
          </li>
          <li className="card-header">
            {/* <img src={reference} alt="reference" className="icon" /> */}
            references
          </li>
        </ul>
        <div className="topic-card"></div>
      </div>
    </div>
  );
}
