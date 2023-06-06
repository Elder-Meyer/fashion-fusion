import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ColorLens, ColorLensOutlined, Face2, FolderCopyOutlined, GroupOutlined, QueryStatsOutlined, StorageOutlined, TextFieldsOutlined } from '@mui/icons-material';
import { Personalizacion } from './Personalizacion/Personalizacion';
import { Usuarios } from './Usuarios/Usuarios';
import { Contenido } from './Contenido/Contenido';
import { Tipografia } from './Tipografia/Tipografia';
import { Estadisticas } from './Estadisticas/Estadisticas';
import { CopiasDeSeg } from './CopiasDeSeg/CopiasDeSeg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, minWidth: "78vw" }}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: 324 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: "20vw" }}
      >
        <Tab label="Personalización"      {...a11yProps(0)} icon={<ColorLensOutlined/>}   iconPosition='start' />
        <Tab label="Usuarios"             {...a11yProps(1)} icon={<GroupOutlined/>}       iconPosition='start' />
        <Tab label="Contenido"            {...a11yProps(2)} icon={<FolderCopyOutlined/>}  iconPosition='start' />
        <Tab label="Tipografía"           {...a11yProps(3)} icon={<TextFieldsOutlined/>}  iconPosition='start' />
        <Tab label="Estadisticas"         {...a11yProps(4)} icon={<QueryStatsOutlined/>}  iconPosition='start' />
        <Tab label="Copias de seguridad"  {...a11yProps(5)} icon={<StorageOutlined/>}     iconPosition='start' />
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
