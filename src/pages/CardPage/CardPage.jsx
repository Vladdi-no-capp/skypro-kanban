import PopBrowse from "../../components/PopBrowse/PopBrowse.jsx";
import { ModalPage } from "../PageLayout.styled.js";
import { useParams } from "react-router-dom";
import { cardList } from "../../../data.js";

export default function CardPage() {
  const { id } = useParams();
  const task = cardList.find((card) => String(card.id) === id);

  return (
    <ModalPage>
      <PopBrowse heading="Просмотр задачи" taskId={id} task={task} />
    </ModalPage>
  );
}
