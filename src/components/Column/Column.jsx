import Card from "../Card/Card.jsx";
import {
  Cards,
  ColumnTitle,
  ColumnWrapper,
} from "./Column.styled.js";

export default function Column({ title, tasks }) {
  return (
    <ColumnWrapper>
  <ColumnTitle>{title}</ColumnTitle>

  <Cards>
    {tasks.map((task) => (
      <Card key={task.id} task={task} />
    ))}
  </Cards>
</ColumnWrapper>
  );
}
