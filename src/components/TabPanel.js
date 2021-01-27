import React from 'react';
import Box from '@material-ui/core/Box';

export const TabPanel = (props) => {
  
    const { children, value, index } = props;

    return (
      <div hidden={value !== index} id={index}>
        {value === index && 
          <Box p={3}> {children} </Box>
        }
      </div>
    );
}