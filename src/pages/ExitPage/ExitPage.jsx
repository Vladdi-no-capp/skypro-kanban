import PopExit from "../../components/PopExit/PopExit.jsx";
import { ModalPage } from "../PageLayout.styled.js";

export default function ExitPage({ onLogout }) {
  return (
    <ModalPage>
      <PopExit onConfirm={onLogout} />
    </ModalPage>
  );
}
