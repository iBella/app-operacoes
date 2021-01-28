import React, { useState } from "react";
import intl from 'react-intl-universal';

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
            <Tab label={intl.get("tab.label.panel")} />
            <Tab label={intl.get("tab.label.alliance")}  />
            <Tab label={intl.get("tab.label.executionCheck")}  />
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
