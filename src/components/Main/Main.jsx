import Column from "../Column/Column.jsx";

const makeTask = (id, category, colorClass) => ({
  id,
  category,
  colorClass,
  title: "Название задачи",
  date: "30.10.23",
});

const columns = [
  {
    title: "Без статуса",
    tasks: [
      makeTask("no-status-1", "Web Design", "_orange"),
      makeTask("no-status-2", "Research", "_green"),
      makeTask("no-status-3", "Web Design", "_orange"),
      makeTask("no-status-4", "Copywriting", "_purple"),
      makeTask("no-status-5", "Web Design", "_orange"),
    ],
  },
  {
    title: "Нужно сделать",
    tasks: [makeTask("todo-1", "Research", "_green")],
  },
  {
    title: "В работе",
    tasks: [
      makeTask("working-1", "Research", "_green"),
      makeTask("working-2", "Copywriting", "_purple"),
      makeTask("working-3", "Web Design", "_orange"),
    ],
  },
  {
    title: "Тестирование",
    tasks: [makeTask("testing-1", "Research", "_green")],
  },
  {
    title: "Готово",
    tasks: [makeTask("done-1", "Research", "_green")],
  },
];

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column) => (
              <Column key={column.title} title={column.title} tasks={column.tasks} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
