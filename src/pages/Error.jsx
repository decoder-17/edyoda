import error from "../assets/error.svg";
export default function Error() {
  return (
    <div className="error">
      <img src={error} alt="error" />
      <h3 className="errorhandle">
        Page not found, please use the sidebar navigation to find your back to
        the website, thank you.
      </h3>
    </div>
  );
}
