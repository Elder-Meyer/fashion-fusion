import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Personalizacion } from './Personalizacion/Personalizacion';
import { Usuarios } from './Usuarios/Usuarios';
import { Contenido } from './Contenido/Contenido';
import { Tipografia } from './Tipografia/Tipografia';
import { Estadisticas } from './Estadisticas/Estadisticas';
import { CopiasDeSeg } from './CopiasDeSeg/CopiasDeSeg';
import { ColorLensOutlined, Face2, FolderCopyOutlined, GroupOutlined, QueryStatsOutlined, StorageOutlined, TextFieldsOutlined } from '@mui/icons-material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ m: {md: 1, sm: 1, xs: 1}, bgcolor: "background.paper", minHeight:"60vh"}}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabsAdministrador() {
  const [value, setValue] = useState(0);
  const [datos, setDatos] = useState(null);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <Box sx={{maxWidth: "100%"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="Personalización"        iconPosition="start" {...a11yProps(0)} icon={<ColorLensOutlined/>} />
        <Tab label="Usuarios"               iconPosition="start" {...a11yProps(1)} icon={<GroupOutlined/>} />
        <Tab label="Contenido"              iconPosition="start" {...a11yProps(2)} icon={<FolderCopyOutlined/>} />
        <Tab label="Tipografía"             iconPosition="start" {...a11yProps(3)} icon={<TextFieldsOutlined/>} />
        <Tab label="Estadisticas"           iconPosition="start" {...a11yProps(4)} icon={<QueryStatsOutlined/>} />
        <Tab label="Copias de seguridad"    iconPosition="start" {...a11yProps(5)} icon={<StorageOutlined/>} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Personalizacion/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Usuarios/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contenido/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Tipografia/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Estadisticas/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <CopiasDeSeg/>
      </TabPanel>
    </Box>
  );
}