import React from 'react'

const CreateProduct = () => {

  const [selectUnit, setSelectUnit] = React.useState("default");

  const handleChange = (e) => {
    setSelectUnit(e.target.value);
  }

  return (
    <>
      <div className="form-block">
        <div className="form-item">
          <label className="form-item__label">
            Название:
          </label>
          <input type="text" className="form-item__input" placeholder="Введите название продукта" />
        </div>
        <div className="form-item">
          <label className="form-item__label">
            Ед. измерения:
          </label>
          <select name="" id="" className="form-item__input form-item__select" value={selectUnit} onChange={handleChange}>
            <option disabled>Выбрать</option>
            <option value="default" selected>100 г(мл)</option>
            <option value="pack">Пачка</option>
            <option value="portion">Порция</option>
            <option value="thing">Штука</option>
            <option value="tablet">Таблетка</option>
          </select>
        </div>
        {
          selectUnit !== 'default' ?
            <div className="form-item">
              <label className="form-item__label">
                Вес одной {
                  (() => {
                    switch (selectUnit) {
                      case 'pack':
                        return 'пачки';
                      case 'portion':
                        return 'порции';
                      case 'thing':
                        return 'штуки';
                      case 'tablet':
                        return 'таблетки';
                      default:
                        return 'измерении'
                    }
                  })()
                }:
              </label>
              <input type="number" className="form-item__input" placeholder="г(мл)" />
            </div>
            : ''
        }
      </div>

      <div className="form-block">
        <div className="form-item form-item--row">
          <label className="form-item__label">
            Калорийность:
          </label>
          <input type="text" className="form-item__input" placeholder="ккал" />
        </div>
        <div className="form-item form-item--row">
          <label className="form-item__label">
            Белки:
          </label>
          <input type="text" className="form-item__input" placeholder="г" />
        </div>
        <div className="form-item form-item--row">
          <label className="form-item__label">
            Жиры:
          </label>
          <input type="text" className="form-item__input" placeholder="г" />
        </div>
        <div className="form-item form-item--row">
          <label className="form-item__label">
            Углеводы:
          </label>
          <input type="text" className="form-item__input" placeholder="г" />
        </div>
      </div>
      <div className="footer">
        <button className="btn">
          Сохранить
        </button>
      </div>
    </>
  )
}

export default CreateProduct