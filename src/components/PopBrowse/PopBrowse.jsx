import Calendar from "../Calendar/Calendar.jsx";

const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

export default function PopBrowse() {
  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {statuses.map((status) => (
                  <div className={`status__theme ${status === "Нужно сделать" ? "_gray" : "_hide"}`} key={status}>
                    <p className={status === "Нужно сделать" ? "_gray" : undefined}>{status}</p>
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
              <Calendar selectedDay={9} inputId="browse-date" />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
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
                onClick={() => {
                  window.location.hash = "";
                }}
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
