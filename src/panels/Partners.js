import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  RichCell,
  Avatar,
} from "@vkontakte/vkui";
import React from "react";

const Partners = ({ go }) => {
  return (
    <Panel>
      <PanelHeader left={<PanelHeaderBack onClick={() => go("home")} />}>
        Партнёры
      </PanelHeader>
      <RichCell
        disabled
        multiline
        before={
          <Avatar
            src="https://media.fulledu.ru/firms/covers/2018.04.21.01/thumbnail/100040000000000000026100.jpg"
            size={72}
            mode="image"
          />
        }
        href="http://tsu.tula.ru/"
        text=""
      >
        Институт прикладной математики и компьютерных наук ТулГУ
      </RichCell>
      <RichCell
        disabled
        multiline
        before={
          <Avatar
            src="https://i.otzovik.com/objects/b/1850000/1848013.png"
            size={72}
            mode="image"
          />
        }
        href="https://rubiconpro.ru/"
        text=""
      >
        РУБИКОН - компьютерная академия
      </RichCell>
      <RichCell
        disabled
        multiline
        before={
          <Avatar
            src="https://avatars.githubusercontent.com/u/1644671?s=280&v=4"
            size={72}
            mode="image"
          />
        }
        href="https://smartbear.com/"
        text=""
      >
        SmartBear
      </RichCell>
      <RichCell
        disabled
        multiline
        before={
          <Avatar
            src="https://sun9-48.userapi.com/impf/c623717/v623717886/388d1/uu5qYTjiFWE.jpg?size=475x475&quality=96&sign=6c8b0e80acd7ccea0c307153c2b8bcc2&type=album"
            size={72}
            mode="image"
          />
        }
        href="https://maximaster.ru/"
        text=""
      >
        Веб-интегратор Максимастер
      </RichCell>
      <RichCell
        disabled
        multiline
        before={
          <Avatar
            src="https://habrastorage.org/getpro/moikrug/uploads/company/100/007/169/6/logo/medium_ca7bfaa26d0e35a743ed5b8a9d0c8a12.png"
            size={72}
            mode="image"
          />
        }
        href="https://www.ddplanet.ru/"
        text=""
      >
        Scloud.ru
      </RichCell>
      <RichCell
        disabled
        multiline
        before={
          <Avatar
            src="https://sun9-66.userapi.com/impg/L2bfoh8evdzzXIFfsT0R8kz2t247nzwl9wnJNg/l9_ZnMN1qig.jpg?size=1242x1242&quality=96&sign=cdba024ad9bf8e9878f55baa965b48ed&type=album"
            size={72}
            mode="image"
          />
        }
        href="https://gdg-russia.com/"
        text=""
      >
        GDG Russia
      </RichCell>
    </Panel>
  );
};

export default Partners;
