import { IoIosChatboxes } from "react-icons/io";

export default function Chat() {
  return (
    <a
      href="mailto:hello@edyoda.com"
      className="contact"
      target="_blank"
      rel="noreferrer"
    >
      <IoIosChatboxes className="chat" size={36} color="white" />
    </a>
  );
}
