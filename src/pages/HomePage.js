import React, { useState } from "react";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { TabPanel } from '../components/TabPanel';

import { AlliancePage } from './AlliancePage';
import { PanelPage } from './PanelPage';
import { ExecutionCheckPage } from './ExecutionCheckPage';


export const HomePage = () => {

    const [value, setValue] = useState(2);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div >
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="panel" />
            <Tab label="Aliança" />
            <Tab label="Check Execução" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <PanelPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AlliancePage />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ExecutionCheckPage />
        </TabPanel>
      </div>
    );
};
