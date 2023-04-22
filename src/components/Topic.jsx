import "../assets/css/Submodule.css";
import video from "../assets/videocam.svg";
import play from "../assets/play-circle.svg";
import info from "../assets/info.svg";
import reference from "../assets/document.svg";
import { useState } from "react";
export default function Topic() {
  const [selectedTopic, setSelectedTopic] = useState("session plan");

  const updateSelectedTopic = (topic) => {
    setSelectedTopic(topic);
  };
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
          <li
            className={
              selectedTopic === "session plan"
                ? "topic-card-header topic-selected"
                : "topic-card-header"
            }
            onClick={() => updateSelectedTopic("session plan")}
          >
            <img src={info} alt="info" className="icon" />
            session plan
          </li>
          <li
            className={
              selectedTopic === "pre-watch videos"
                ? "topic-card-header topic-selected"
                : "topic-card-header"
            }
            onClick={() => updateSelectedTopic("pre-watch videos")}
          >
            <img src={play} alt="play" className="icon" />
            pre-watch videos
          </li>
          <li
            className={
              selectedTopic === "session recording"
                ? "topic-card-header topic-selected"
                : "topic-card-header"
            }
            onClick={() => updateSelectedTopic("session recording")}
          >
            <img src={video} alt="video" className="icon" />
            session recording
          </li>
          <li
            className={
              selectedTopic === "references"
                ? "topic-card-header topic-selected"
                : "topic-card-header"
            }
            onClick={() => updateSelectedTopic("references")}
          >
            <img src={reference} alt="reference" className="icon" height={20} />
            references
          </li>
        </ul>
        <div className="topic-card">
          <div className="heading">Session Plan</div>
          <div className="date">
            LIVE session is about to start. Please stay tuned.
          </div>
          <div className="join">
            {" "}
            <div className="join-btn">Join Live Session</div>{" "}
          </div>
          <div className="sub-topic">Sub-Topics</div>
          <ol>
            <li className="submodule-subtopics">
              Sorting and Indexing Dataframe
            </li>
            <li className="submodule-subtopics">Filtering Dataframe</li>
            <li className="submodule-subtopics">
              Usage of loc and iloc functions
            </li>
          </ol>
          <div className="sub-topic">Session Details</div>
        </div>
      </div>
    </div>
  );
}
