import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  RichCell,
  Avatar,
} from "@vkontakte/vkui";
import React from "react";

const Categories = ({ go }) => {
  return (
    <Panel>
      <PanelHeader left={<PanelHeaderBack onClick={() => go("home")} />}>
        Категории
      </PanelHeader>
      <RichCell
        disabled
        multiline
        text="Разработка инструментов для работы с обращениями пользователей для службы поддержки."
      >
        Web — DD Planet
      </RichCell>
      <RichCell
        disabled
        multiline
        text="Мобильные приложения на Java, Kotlin, Objective-C или Swift."
      >
        Мобильная разработка
      </RichCell>
      <RichCell
        disabled
        multiline
        text="Различные задания на web и не только"
      >
        Web Максимастер
      </RichCell>
      <RichCell
        disabled
        multiline
        text="Задания на создание дизайна"
      >
        Дизайн интерфейсов
      </RichCell>
      <RichCell
        disabled
        multiline
        text="Задания на создание VK Mini Apps"
      >
        VK Mini Apps
      </RichCell>
      <RichCell
        disabled
        multiline
        text="Задания связанные с робототехникой и электроникой"
      >
        Робототехника
      </RichCell>
      <RichCell
        disabled
        multiline
        text="Задачи связанные с безопасностью"
      >
        Информационная безопасность
      </RichCell>
      <RichCell
        disabled
        multiline
        text="Задачи на разработку и тестирование API"
      >
        Разработка и тестирование API
      </RichCell>
    </Panel>
  );
};

export default Categories;
