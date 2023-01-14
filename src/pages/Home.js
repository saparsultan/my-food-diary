import React from 'react'

const Home = () => {
  return (
    <>
      <section className="section section-prev">
        <div className="prev-main">
          <h1>
            Привет, <span>я Султан:)</span> <br />
            UX/UI дизайнер из Астаны. <br />
            Добро пожаловать в мое портфолио. <br />
          </h1>
          <div className="prev-main__actions">
            <a href="#" className="btn btn--active">Мое резюме</a>
            <a href="#" className="btn">Написать</a>
          </div>
        </div>
        <div className="prev-footer">
          <div className="prev-footer__list">
            <a href="#" className="prev-footer__link">Почта</a>
            <a href="#" className="prev-footer__link">Телеграм</a>
            <a href="#" className="prev-footer__link">Линкедин</a>
          </div>
          <div className="prev-footer__arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.0701 14.43L12.0001 20.5L5.93005 14.43" stroke="#3C6AE9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 3.5V20.33" stroke="#3C6AE9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </section>
      <section className="section section-work">
        <h2>
          Мои работы
        </h2>
        <div className="work-grid">
          <div className="work">
            <div className="work-header">
              <img src="" alt="" />
            </div>
            <div className="work-footer">
              <div className="work-footer-top">
                <div className="work__text work__text--stage">Дизайн . Разработка</div>
                <div className="work__text work__text--year">2021</div>
              </div>
              <div className="work-footer-bottom">
                <div className="work__text work__text--name">Партия «Ауыл»</div>
                <div className="work__text work__text--type">Корпоративный сайт</div>
              </div>
            </div>
          </div>
          <div className="work">
            <div className="work-header">
              <img src="" alt="" />
            </div>
            <div className="work-footer">
              <div className="work-footer-top">
                <div className="work__text work__text--stage">Дизайн . Разработка</div>
                <div className="work__text work__text--year">2021</div>
              </div>
              <div className="work-footer-bottom">
                <div className="work__text work__text--name">Партия «Ауыл»</div>
                <div className="work__text work__text--type">Корпоративный сайт</div>
              </div>
            </div>
          </div>
          <div className="work">
            <div className="work-header">
              <img src="" alt="" />
            </div>
            <div className="work-footer">
              <div className="work-footer-top">
                <div className="work__text work__text--stage">Дизайн . Разработка</div>
                <div className="work__text work__text--year">2021</div>
              </div>
              <div className="work-footer-bottom">
                <div className="work__text work__text--name">Партия «Ауыл»</div>
                <div className="work__text work__text--type">Корпоративный сайт</div>
              </div>
            </div>
          </div>
          <div className="work">
            <div className="work-header">
              <img src="" alt="" />
            </div>
            <div className="work-footer">
              <div className="work-footer-top">
                <div className="work__text work__text--stage">Дизайн . Разработка</div>
                <div className="work__text work__text--year">2021</div>
              </div>
              <div className="work-footer-bottom">
                <div className="work__text work__text--name">Партия «Ауыл»</div>
                <div className="work__text work__text--type">Корпоративный сайт</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-contacts">
        <div className="contacts">
          <div className="contacts__head">
            <span>Давайте работать вместе</span>
          </div>
          <a href="#" className="contacts__email">sultansyzdyc@gmail.com</a>
          <div className="contacts__social social">
            <a href="" className="social__link">Телеграм</a>
            <a href="" className="social__link">Линкедин</a>
            <a href="" className="social__link">Гитхаб</a>
            <a href="" className="social__link">Беханс</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home