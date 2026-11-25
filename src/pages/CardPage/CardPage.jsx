import PopBrowse from "../../components/PopBrowse/PopBrowse.jsx";
import { ModalPage } from "../PageLayout.styled.js";
import { useParams } from "react-router-dom";

export default function CardPage() {
  const { id } = useParams();

  return (
    <ModalPage>
      <PopBrowse heading="Просмотр задачи" taskId={id} />
    </ModalPage>
  );
}
