import Column from "../Column/Column.jsx";
import { cardList } from "../../../data.js";
import { Container } from "../Common/Common.styled.js";
import {
  MainBlock,
  MainContent,
  MainWrapper,
} from "./Main.styled.js";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function Main() {
  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {statuses.map((status) => (
              <Column
                key={status}
                title={status}
                tasks={cardList.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
}