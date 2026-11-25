import PopExit from "../../components/PopExit/PopExit.jsx";
import { ModalPage } from "../PageLayout.styled.js";
import { useNavigate } from "react-router-dom";

export default function ExitPage({ onLogout }) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    onLogout();
    navigate("/login", { replace: true });
  };

  return (
    <ModalPage>
      <PopExit onConfirm={handleConfirm} onCancel={() => navigate("/")} />
    </ModalPage>
  );
}
