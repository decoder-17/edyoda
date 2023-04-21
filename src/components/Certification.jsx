import dac from "../assets/Data-Analysis.png";

export default function Certification() {
  return (
    <div className="certification">
      <div className="title">Upcoming Certifications</div>
      <div className="card">
        <img src={dac} alt="dac" className="image" />
        <div className="certificate-details">
          <div className="certificate-details-header">
            certification | attempt 1
          </div>
          <div className="certificate-details-heading">
            data Analysis certification
          </div>
          <div className="certificate-details-status">
            completed | 21 mar 2022
          </div>
        </div>
        <div className="exam-structure">
          <div className="exam-heading">exam structure</div>
          <div className="round">
            Round 1<div className="round-details">mcqs</div>
            <div className="round-details">coding</div>
          </div>
          <div className="round">
            Round 2<div className="round-details">project</div>
          </div>
        </div>
        <div className="exam-details">view exam details</div>
      </div>
    </div>
  );
}
