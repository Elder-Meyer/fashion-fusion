import { Box, Button, Divider, Stack, TextField, ThemeProvider, Tooltip, Typography, createTheme } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { Botones } from './Botones';
import ButtonAppBar from './ButtonAppBar';
import { Iconos } from './Iconos';
import { CheckBox } from './CheckBox';
import { rawTheme } from '../../../../styles/theme';
import { HelpOutlineOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export const Personalizacion = () => {
  
  const [primaryColor, setPrimaryColor] = useState(`${rawTheme.palette.primary.main}`);
  const [secondaryColor, setSecondaryColor] = useState(`${rawTheme.palette.secondary.main}`);
  
  const handlePrimaryColorChange = (event) => {
    setPrimaryColor(event.target.value);
  };
  
  const handleSecondaryColorChange = (event) => {
    setSecondaryColor(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones adicionales cuando se envíe el formulario, como guardar los valores de color en una base de datos, etc.
  };

  const handleResetColors = () => {
    setPrimaryColor(rawTheme.palette.primary.main);
    setSecondaryColor(rawTheme.palette.secondary.main);
  };
  
  const editTheme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      }
    }
  })

  return (
    <ThemeProvider theme={editTheme}>
      <Box sx={{width: "100%"}}>

        <Typography variant='h5'>
          Personaliza los colores de la aplicación
        </Typography>

        <Box component="form" p={1} onSubmit={handleSubmit}>
          <Typography p={1}>
            Color primario:
          </Typography>
            <TextField
              fullWidth
              type="color"
              value={primaryColor}
              onChange={handlePrimaryColorChange}
            />
            <Tooltip 
            title={
              <Typography>
                ¿No te decides por el color?, prueba la herramienta de <Link to="https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors:~:text=Color%20variations%20for%20accessibility" target='_blank'>Material Design</Link>
              </Typography>
            } placement='right'>
              <HelpOutlineOutlined/>
            </Tooltip>

          <Typography p={1}>
            Color secundario:
          </Typography>
            <TextField
              fullWidth
              type="color"
              value={secondaryColor}
              onChange={handleSecondaryColorChange}
            />
            <Tooltip 
            title={
              <Typography>
                ¿No te decides por el color?, prueba la herramienta de <Link to="https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors:~:text=Color%20variations%20for%20accessibility" target='_blank'>Material Design</Link>
              </Typography>
            } placement='right'>
              <HelpOutlineOutlined/>
            </Tooltip>

            <Box>
              <Button type="submit" sx={{m: 1}} variant='contained'>Guardar</Button>
              <Button onClick={handleResetColors} sx={{ m: 1 }}>
                Restablecer colores
              </Button>
            </Box>
        </Box>

        <Divider/>

        <Stack direction="column">
          <Botones/>
          <ButtonAppBar/>
          <Iconos/>
          <CheckBox/>
        </Stack>
      
      </Box>
    </ThemeProvider>
  )
}
