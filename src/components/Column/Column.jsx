import Card from "../Card/Card.jsx";

export default function Column({ title, tasks }) {
  return (
    <section className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
