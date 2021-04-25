import React from "react";

import { Panel, PanelHeader, Group, Div, ContentCard } from "@vkontakte/vkui";

const Home = ({ go }) => (
  <Panel id="home">
    <PanelHeader>Вездекод 2021</PanelHeader>
    <Group style={{ margin: "auto" }}>
      <Div>
        <ContentCard
          onClick={() => go("categories")}
          image="https://13coconut69.github.io/Vezdekod10/static/media/it.59f90f8d.jpg"
          header="Категории"
          text="Всего 9 категорий, 45 заданий"
          style={{
            maxWidth: 400,
            maxHeight: 600,
          }}
        />
      </Div>
      <Div>
        <ContentCard
          onClick={() => go("partners")}
          image="https://13coconut69.github.io/Vezdekod10/static/media/build.b071c956.png"
          header="Партнёры и организаторы"
          text="Хакатон организован институтом прикладной математики и компьютерных наук ТулГУ, при поддержке РУБИКОН, SmartBear, Senla, Веб-интегратор Максимастер, Scloud.ru, DD Planet, Центр информационных технологий, SafeCafe, GDG Russia."
          style={{
            maxWidth: 400,
            maxHeight: 600,
          }}
        />
      </Div>
      <Div>
        <ContentCard
          image="https://13coconut69.github.io/Vezdekod10/static/media/city.65d512b4.jpg"
          header="Тула"
          text="Город-организатор первого этапа"
          style={{
            maxWidth: 400,
            maxHeight: 600,
          }}
        />
      </Div>
    </Group>
  </Panel>
);

export default Home;
