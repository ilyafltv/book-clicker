import Button from "@components/UI/Button/Button";

export default function InfoPage() {
  return (
    <div className="page pageInfo">
      <div className="container-content">
        <h1>Информация</h1>
        <h2 className="title-block title-block--white">Об игре</h2>
        <p className="subtitle-block subtitle-block--white">
          Приложение представляет собой браузерный кликер. Суть игры заключается
          в множественных нажатиях на книгу в центре экрана, за которые дают
          очки опыта. Кликер состоит из нескольких разделов, включая в себя
          разделы: Главная, Магазин, Стастистика, Достижения, Информация и
          Настройки. В Магазине можно приобрести различные инструменты и
          улучшения для ускорения получения знаний. Достижения и Статистика
          предоставят сведения о вашем прогрессе.
        </p>

        <h2 className="title-block title-block--white">Поддержка</h2>
        <p className="subtitle-block subtitle-block--white">
          Если появились вопросы или предложения по проекту - пишите нам.
        </p>
        <Button
          onClick={() => {
            window.open("https://github.com/ilyafltv", "_blank");
          }}
        >
          Обратиться
        </Button>
      </div>
    </div>
  );
}
