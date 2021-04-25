import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Categories from "./panels/Categories";
import Partners from "./panels/Partners";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  useEffect(() => {
    bridge.send("VKWebAppInit")
  }, [])
  const go = (to) => {
    setActivePanel(to);
  };

  return (
    <AdaptivityProvider>
      <AppRoot>
        <View activePanel={activePanel}>
          <Home id="home" go={go}/>
          <Categories id="categories" go={go}/>
          <Partners id="partners" go={go}/>
        </View>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
