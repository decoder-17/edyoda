import dw from "../assets/Data Wrangling.png";
export const Learning = () => {
  return (
    <div className="learning">
      <div className="title">Continue Learning</div>
      <div className="cards">
        <div className="card">
          <img src={dw} alt="dw" className="image" />
          <div className="certificate-details-heading">
            data wrangling and visualization
          </div>
        </div>
        <div className="card"></div>
      </div>
    </div>
  );
};
