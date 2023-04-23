import "../assets/css/Submodule.css";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock-blue.svg";

export default function Quiz() {
  return (
    <div className="submodule-topic">
      <div className="submodule-header">
        <div className="submodule-head">
          <div className="heading">Quiz-1: Data Types</div>
          <div className="date">16 December 2021, Thursday</div>
        </div>
        {/* <div className="submodule-head-right">
          <div className="param">
            <div className="param-head">3</div>
            <div className="param-sub">Problems</div>
          </div>
          <div className="param">
            <div className="param-head">100</div>
            <div className="param-sub">Total Score</div>
          </div>
        </div> */}
      </div>
      <div className="submodule-subheading">Quiz Details</div>
      <div className="card">
        <div className="card-right">
          <div className="param">
            <div className="param-head">10</div>
            <div className="param-sub">Questions</div>
          </div>
          <div className="param">
            <div className="param-head">-</div>
            <div className="param-sub">Duration</div>
          </div>
          <div className="param">
            <div className="param-head">125</div>
            <div className="param-sub">Total Score</div>
          </div>
        </div>
        <div className="card-left">
          <div className="moment">
            <div className="moment-head">Start:</div>
            <div className="day">
              <img src={calendar} alt="calendar" className="card-icon" />
              16 Dec 2021
            </div>
            <div className="time">
              <img src={clock} alt="clock" className="card-icon" />
              07:30 PM
            </div>
          </div>
          <div className="moment">
            <div className="moment-head">Due:</div>
            <div className="day">
              <img src={calendar} alt="calendar" className="card-icon" />
              19 Dec 2021
            </div>
            <div className="time">
              <img src={clock} alt="clock" className="card-icon" />
              11:59 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
