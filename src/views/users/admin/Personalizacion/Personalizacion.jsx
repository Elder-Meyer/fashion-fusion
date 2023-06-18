import { Box, Button, Container, Divider, Grid, Stack, TextField, ThemeProvider, Tooltip, Typography, createTheme } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { Botones } from './Botones';
import ButtonAppBar from './ButtonAppBar';
import { Iconos } from './Iconos';
import { CheckBox } from './CheckBox';
import { HelpOutlineOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { saveSettingsApp, updateSettingsApp } from '../../../../utils/fnSettingsApp';
import Swal from 'sweetalert2';
import { useAuth } from "../../../../context/AuthContext";
export const Personalizacion = () => {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    try {
      setOpen(true);
      await logout();
      navigate("/");
      setOpen(false);
    } catch (error) {
      setOpen(true);
      console.log(error.message);
      setOpen(false);
    }
  };
  console.log("vista colaborador: id del usuario =>", user.uid);
  const [primaryColor, setPrimaryColor]           = useState("#2f3b84");
  const [primaryColorLight, setPrimaryColorLight] = useState("#e5e6ef");
  const [primaryColorDark, setPrimaryColorDark]   = useState("#0c134f");

  const [secondaryColor, setSecondaryColor]           = useState("#f8447c");
  const [secondaryColorLight, setSecondaryColorLight] = useState("#ffe4ed");
  const [secondaryColorDark, setSecondaryColorDark]   = useState("#941153");
  
  const handlePrimaryColorChange      = (event) => { setPrimaryColor(event.target.value); };
  const handlePrimaryColorLightChange = (event) => { setPrimaryColorLight(event.target.value); };
  const handlePrimaryColorDarkChange  = (event) => { setPrimaryColorDark(event.target.value); };
  
  const handleSecondaryColorChange      = (event) => { setSecondaryColor(event.target.value); };
  const handleSecondaryColorLightChange = (event) => { setSecondaryColorLight(event.target.value); };
  const handleSecondaryColorDarkChange  = (event) => { setSecondaryColorDark(event.target.value); };
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones adicionales cuando se envíe el formulario, como guardar los valores de color en una base de datos, etc.
    await updateSettingsApp("C5sl8yZRgXubsme5uBws", primaryColorLight, primaryColor, primaryColorDark, secondaryColorLight, secondaryColor, secondaryColorDark);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Los colores se han guardado correctamente',
      showConfirmButton: false,
      timer: 3500
    })
  };

  const handleResetColors = () => {
    setPrimaryColorLight("#e5e6ef");
    setPrimaryColor("#2f3b84");
    setPrimaryColorDark("#0c134f");
    setSecondaryColorLight("#ffe4ed");
    setSecondaryColor("#f8447c");
    setSecondaryColorDark("#941153");
  };
  
  const editTheme = createTheme({
    palette: {
      primary: {
        light: primaryColorLight,
        main: primaryColor,
        dark: primaryColorDark,
      },
      secondary: {
        light: secondaryColorLight,
        main: secondaryColor,
        dark: secondaryColorDark,
      }
    }
  })

  return (
    <ThemeProvider theme={editTheme}>
      <Box sx={{width: "100%"}}>

        <Typography variant='h5'>
          Personaliza los colores de la aplicación
          <Tooltip 
            title={
              <Typography>
                ¿No te decides por el color?, prueba la herramienta de <Link style={{color: "white"}} to="https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors:~:text=Color%20variations%20for%20accessibility" target='_blank'>Material Design</Link> y elige las variaciones de los colores primarios y secundarios.
              </Typography>
            } 
            placement='right'
          >
            <HelpOutlineOutlined/>
          </Tooltip>
        </Typography>

        <Box component="form" p={1} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* primer input */}
              <Typography p={1}>Color primario (Light):</Typography>
                <TextField
                  fullWidth
                  type="color"
                  value={primaryColorLight}
                  onChange={handlePrimaryColorLightChange}
                />
              {/* segundo input */}
              <Typography p={1}>Color primario (Main):</Typography>
                <TextField
                  fullWidth
                  type="color"
                  value={primaryColor}
                  onChange={handlePrimaryColorChange}
                />
              {/* tercer input */}
              <Typography p={1}>Color primario (Dark):</Typography>
                <TextField
                  fullWidth
                  type="color"
                  value={primaryColorDark}
                  onChange={handlePrimaryColorDarkChange}
                />
            </Grid>


            
            <Grid item xs={12} sm={6}>
              {/* cuarto input */}
              <Typography p={1}>Color secundario (Light):</Typography>
                <TextField
                  fullWidth
                  type="color"
                  value={secondaryColorLight}
                  onChange={handleSecondaryColorLightChange}
                />
              {/* quinto input */}
              <Typography p={1}>Color secundario (Main):</Typography>
                <TextField
                  fullWidth
                  type="color"
                  value={secondaryColor}
                  onChange={handleSecondaryColorChange}
                />
              {/* sexto input */}
              <Typography p={1}>Color secundario (Dark):</Typography>
                <TextField
                  fullWidth
                  type="color"
                  value={secondaryColorDark}
                  onChange={handleSecondaryColorDarkChange}
                />
            </Grid>
          </Grid>


            <Box>
              <Button type="submit" sx={{m: 1}} variant='contained' color='success'>Guardar</Button>
              <Button onClick={handleResetColors} sx={{ m: 1 }} variant='contained' color='error'>
                Restablecer colores
              </Button>
            </Box>
        </Box>

        <Container maxWidth="xl" sx={{my: 3}}>
            <Divider/>
        </Container>

        <Stack direction="column">
          <ButtonAppBar/>
          <Botones/>
          <Iconos/>
          <CheckBox/>
        </Stack>
      
      </Box>
    </ThemeProvider>
  )
}
