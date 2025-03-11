import React from "react";
import s from "./Container.module.css";
import Slider from "../slider/Slider";
import { Link } from "react-router-dom";
import Scroll from "../scroll/Scroll";

const Container = () => {
  return (
    <div>
      <Slider />
      <div className={s.container} id="glavnaya"></div>
      <div className={s.uslugi}>
        <button className={s.terapiya}>
          <div className={s.ter}>Терапия</div>
          <div className={s.terapiyaLogo}></div>
        </button>

        <button className={s.hirurgiya}>
          <div className={s.hir}>Хирургия</div>
          <div className={s.hirurgiyaLogo}></div>
        </button>

        <button className={s.apteka}>
          <div className={s.apt}>Аптека</div>
          <div className={s.aptekaLogo}></div>
        </button>

        <button className={s.ortopediya}>
          <div className={s.ort}>Ортопедия</div>
          <div className={s.ortopediyaLogo}></div>
        </button>
      </div>
      <div className={s.uslugi2}>
        <button className={s.derma}>
          <div className={s.der}>Дерматология</div>
          <div className={s.dermaLogo}></div>
        </button>

        <button className={s.diagnost}>
          <div className={s.diag}>Визуальная диагностика</div>
          <div className={s.diagnostLogo}></div>
        </button>

        <button className={s.stomatolog}>
          <div className={s.stom}>Стоматология</div>
          <div className={s.stomatologLogo}></div>
        </button>

        <button className={s.onkologiya}>
          <div className={s.onk}>Онкология</div>
          <div className={s.onkologiyaLogo}></div>
        </button>
      </div>
      <div className={s.history}>
        <div className={s.history2}>
          <div className={s.hisCompanii}>История компании</div>
          <div className={s.vetmaster}>
            {" "}
            Ветклиника "Ветмастер" — современное учреждение, основанное доктором
            Александром Петровичем. Она предлагает широкий спектр ветеринарных
            услуг, включая профилактические осмотры и хирургические операции.
            Основная миссия клиники — обеспечить качественный уход за животными
            и поддержку их владельцам. "Ветмастер" также проводит бесплатные
            семинары для владельцев, что помогает укрепить доверие местных
            жителей и сделать клинику символом заботы о животных в регионе.
          </div>
          <div className={s.special}>Наши специалисты</div>
          <div className={s.vrachi}>
            <div className={s.specialLogo}></div>
            <div className={s.specialLogo2}></div>
            <div className={s.specialLogo3}></div>
          </div>
        </div>
      </div>

      <div className={s.help}>
        <div className={s.infa}>
          <div className={s.kolvo}>1 150 000</div>
          <div className={s.titleHelp}>
            питомцам мы помогли <br />
            за 18 лет работы
          </div>
        </div>
        <div className={s.fotoPt}>
          <div className={s.ptichka}></div>
        </div>
      </div>

      <div className={s.why}>
        <div className={s.pochemu}> Почему хозяева выбирают нас?</div>
        <div className={s.usloviya}>
          <div className={s.work}>
            <div className={s.tittleQ}>Работаем круглосуточно</div>
            <div className={s.osnova}>
              <div className={s.icoWork}></div>
              <div className={s.tittleWWW}>
                Мы готовы в любое время суток принять домашних питомцев и их
                хозяев
              </div>
            </div>
          </div>

          <div className={s.usl}>
            <div className={s.tittleQ}>Широкий спектр услуг</div>
            <div className={s.osnova}>
              <div className={s.icoUsl}></div>
              <div className={s.tittleWWW}>
                Кроме широкопрофильных докторов в клинике развиты узкие
                направления в ветеринарии – офтальмология, стоматология,
                дерматология, травматология, ортопедия и онкология
              </div>
            </div>
          </div>

          <div className={s.opit}>
            <div className={s.tittleQ}>Большой опыт</div>
            <div className={s.osnova}>
              <div className={s.icoOpit}></div>
              <div className={s.tittleWWW}>
                30 высококвалифицированных врачей нашей клиники предоставляют
                ветеринарную помощь уже на протяжении 18 лет!
              </div>
            </div>
          </div>
        </div>

        <div className={s.usloviya2}>
          <div className={s.laborat}>
            <div className={s.tittleQ}>Собственная лаборатория</div>
            <div className={s.osnova}>
              <div className={s.icoLaborat}></div>
              <div className={s.tittleWWW}>
                Оборудованная профессиональным оснащением производства компании
                IDEXX International Inc.(США), которое позволяет получить
                результаты исследования прямо на приеме
              </div>
            </div>
          </div>

          <div className={s.stationar}>
            <div className={s.tittleQ}>Оснащенные стационары</div>
            <div className={s.osnova}>
              <div className={s.icoStationar}></div>
              <div className={s.tittleWWW}>
                Обычный и инфекционный стационар с индивидуальным подогревом
                каждой клетки. Для питомцев в критическом состоянии
                предусмотрены кислородные камеры
              </div>
            </div>
          </div>

          <div className={s.oborud}>
            <div className={s.tittleQ}>Новейшее оборудование</div>
            <div className={s.osnova}>
              <div className={s.icoOborud}></div>
              <div className={s.tittleWWW}>
                Помимо лабораторного оборудования и цифрового рентгена в клинике
                используется современный эндоскоп KARL STORZ
              </div>
            </div>
          </div>
        </div>

        <div className={s.usloviya3}>
          <div className={s.online}>
            <div className={s.tittleQ}>Запись на прием онлайн</div>
            <div className={s.osnova}>
              <div className={s.icoOnline}></div>
              <div className={s.tittleWWW}>
                Запись на приём позволяет избежать ожиданий в очереди, но если
                вы не можете приехать - мы выезжаем на дом!
              </div>
            </div>
          </div>

          <div className={s.zoo}>
            <div className={s.tittleQ}>Запись на прием онлайн</div>
            <div className={s.osnova}>
              <div className={s.icoZoo}></div>
              <div className={s.tittleWWW}>
                Для удобства в клинике предусмотрен аптечный пункт, а также
                бутик с одеждой и косметическими средствами для ухода за
                домашними любимцами
              </div>
            </div>
          </div>

          <div className={s.salon}>
            <div className={s.tittleQ}>Груминг-салон</div>
            <div className={s.osnova}>
              <div className={s.icoSalon}></div>
              <div className={s.tittleWWW}>
                Отдельный кабинет для проведения гигиенческих и косметических
                процедур, таких как мытьё и сушка, стрижка или тримминг, уход за
                ушами, глазами и когтями и многое другое
              </div>
            </div>
          </div>
        </div>

        <div className={s.contacti}>
          <div className={s.cont}>Контакты</div>

          <div className={s.contInfo}>
            <div className={s.infoLogo}>
              <div className={s.streetLogo}></div>
              <div className={s.nomerLogo}></div>
              <div className={s.rezhimLogo}></div>
            </div>
            <div className={s.contactiInfo}>
              <div className={s.info}>
                <div className={s.street}>
                  Большая Санкт-Петербургская ул., 39, стр. 10
                </div>
                <div className={s.nomer}>+7 (8162) 60-36-01</div>
                <div className={s.rezhim}>
                  Понедельник - пятница с 09:00 до 22:00 Суббота - воскресенье с
                  09:00 до 19:00
                </div>
              </div>
            </div>
          </div>
          <div className={s.karta}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.443919261817!2d31.26028717752577!3d58.537558174240615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beebb3b0d5ed49%3A0x129feee4e791260d!2z0JLQtdGC0JzQsNGB0YLQtdGA!5e0!3m2!1sru!2sru!4v1741015519737!5m2!1sru!2sru"
              width="100%"
              height="400"
              style={{
                border: "0",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта Google Maps с локацией Москвы"
            />
          </div>
        </div>

        <div className={s.footer1}>
          <div className={s.footer}>
            <Scroll />
            <div className={s.logotip}>
              <div className={s.lapka}></div>
              Ветклиника
            </div>
            <div className={s.knopki}>
            <button className={s.lichnii}>ЛИЧНЫЙ КАБИНЕТ</button>
            <button className={s.us}>
              <Link to="/Us">О НАС</Link>
            </button>
            <button className={s.contact}>
              <Link to="/Cont">КОНТАКТЫ</Link>
            </button>
            </div>
            <div className={s.seti}>
              <button className={s.tg}></button>
              <button className={s.vk}></button>
              <button className={s.youtube}></button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
