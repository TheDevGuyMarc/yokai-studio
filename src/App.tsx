import React, {useEffect, useState} from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Routes} from "react-router-dom";
import {Route} from "react-router";
import ConfigService from "./shared/services/ConfigService";
import {Wrapper} from "./shared/components/Wrapper.styles";
import NavbarComponent from "./shared/components/NavbarComponent";
import LevelEditor from "./features/level-editor/LevelEditor";
import NPCEditor from "./features/npc-editor/NPCEditor";



function App() {
  const [configured, setConfigured] = useState(false);

  useEffect((): () => void => {
    const checkConfig = async (): Promise<void> => {
      const result: boolean = await ConfigService.isConfigured();
      setConfigured(result);
    };

    checkConfig();

    const interval = setInterval(checkConfig, 5000); // Überprüfe alle 5 Sekunden

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (!configured) {
    return (
        <Wrapper>
            {/* Render HTML for when the application needs new base configuration */}
        </Wrapper>
    )
  }
  else {
    return (
        <Wrapper>
          {/* Render HTML for when the application is configured and is simply starting */}

          <NavbarComponent></NavbarComponent>

          <Routes>
            <Route path={"/"} />
            <Route path={"/level-editor"} element={<LevelEditor/>}/>
            <Route path="/npc-editor" element={<NPCEditor/>} />
            {/*<Route path="/story-editor" component={LevelEditor} />*/}
            {/*<Route path="/quest-editor" component={LevelEditor} />*/}
            <Route path="/item-editor" element={<LevelEditor/>} />
          </Routes>
        </Wrapper>
    )
  }
}

export default App;
