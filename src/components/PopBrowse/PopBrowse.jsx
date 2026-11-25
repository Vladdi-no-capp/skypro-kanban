import Calendar from "../Calendar/Calendar.jsx";
import { useNavigate } from "react-router-dom";

const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];
const topicClassNames = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
};

export default function PopBrowse({ heading = "Название задачи", taskId, task }) {
  const navigate = useNavigate();
  const topic = task?.topic ?? "Web Design";
  const activeStatus = task?.status ?? "Нужно сделать";
  const topicClassName = topicClassNames[topic] ?? "_gray";

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <div>
                <h3 className="pop-browse__ttl">{heading}</h3>
                {taskId && <p className="pop-browse__task-id">ID задачи: {taskId}</p>}
                {task && <p className="pop-browse__task-title">{task.title}</p>}
              </div>
              <div className={`categories__theme theme-top ${topicClassName} _active-category`}>
                <p className={topicClassName}>{topic}</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {statuses.map((status) => (
                  <div
                    aria-current={status === activeStatus ? "true" : undefined}
                    className={`status__theme ${status === activeStatus ? "_gray" : "_hide"}`}
                    key={status}
                  >
                    <p className={status === activeStatus ? "_gray" : undefined}>{status}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse" id="formBrowseCard">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </form>
              <Calendar selectedDate={task?.date ?? "09.09.23"} inputId="browse-date" />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className={`categories__theme ${topicClassName} _active-category`}>
                <p className={topicClassName}>{topic}</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03" type="button">
                  Редактировать задачу
                </button>
                <button className="btn-browse__delete _btn-bor _hover03" type="button">
                  Удалить задачу
                </button>
              </div>
              <button
                className="btn-browse__close _btn-bg _hover01"
                type="button"
                onClick={() => navigate("/")}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
