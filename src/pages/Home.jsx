import Certification from "../components/Certification";
import "../assets/css/Home.css";
import { Learning } from "../components/Learning";

export default function Home() {
  return (
    <div className="home">
      <Certification />
      <Learning />
    </div>
  );
}
