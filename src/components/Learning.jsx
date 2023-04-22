import dw from "../assets/Data Wrangling.png";
import avatar from "../assets/avatar.svg";
export const Learning = () => {
  return (
    <div className="learning">
      <div className="title title-learning">Continue Learning</div>

      <div className="cards">
        <div className="card-container">
          <div className="view-details module-details">view module details</div>
          <div className=" card left-card">
            <div className="left">
              <div className="card-heading">
                <img src={dw} alt="dw" className="image" />
                <div className="card-details">
                  <div className="certificate-details-heading">
                    data wrangling & visualization
                  </div>
                  <div className="card-instructor-details">
                    <img src={avatar} alt="avatar" className="avatar" />
                    Test Instructor
                  </div>
                </div>
              </div>
              <div className="course-details">
                <div className="cohorts">
                  live sessions
                  <div className="progress">
                    0/13
                    <div className="bar"></div>
                  </div>
                </div>
                <div className="cohorts">
                  assignments
                  <div className="progress">
                    0/3
                    <div className="bar"></div>
                  </div>
                </div>
                <div className="cohorts">
                  MCQ quiz
                  <div className="progress">
                    0/6
                    <div className="bar"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="right-head">
                <div className="right-heading">Today's plan</div>
                <div className="date">21 March 2022</div>
              </div>
              <div className="right-topic">
                Data Transformation using Pandas-3
              </div>
              <div className="feedback">
                <div className="session">Daily Feedback</div>
                <div className="session-time">opens at 07:30 PM</div>
              </div>
              <div className="join">
                {" "}
                <div className="join-btn">Join Live Session</div>{" "}
              </div>
              <div className="begin">begins at 07:30 PM</div>
            </div>
          </div>
        </div>
        <div className="card progress-overview">
          <div className="progress-heading">progress overview</div>
          <div className="mini-cards">
            <div className="progress-percent">0%</div>
            <div className="progress-topic">overall grade</div>
          </div>
          <div className="mini-cards">
            <div className="progress-percent">0%</div>
            <div className="progress-topic">attendance</div>
          </div>
          <div className="view-details">view detailed progress</div>
        </div>
      </div>
    </div>
  );
};
