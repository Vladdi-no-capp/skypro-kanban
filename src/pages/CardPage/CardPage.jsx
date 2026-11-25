import PopBrowse from "../../components/PopBrowse/PopBrowse.jsx";
import { ModalPage } from "../PageLayout.styled.js";

export default function CardPage() {
  return (
    <ModalPage>
      <PopBrowse heading="Просмотр задачи" />
    </ModalPage>
  );
}
