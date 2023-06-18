// Nosotros.jsx
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

function Nosotros() {
  return(
    <>
<div className="Us">
      <nav id="navbar" className="Navbar-Visible">
        <div className="nav-items">
          <Paper sx={{p:5,m:2}} elevation={5}> 
            <Typography fontSize={{xs: 26,sm: 36, md: 46, lg: 56, xl: 66}} color='primary'>Bienvenidos</Typography>
            <Typography variant="body1">
              En FASHION FUSION, nos apasiona proporcionar prendas de ropa
              interior cómodas y de alta calidad para hombres y mujeres. Nos
              enorgullece ofrecer una amplia variedad de estilos y diseños que
              se adaptan a todos los gustos y necesidades.
            </Typography>
          </Paper>
          
          <Paper sx={{p:5,m:2}} elevation={5}> 
          <Typography fontSize={{xs: 26,sm: 36, md: 46, lg: 56, xl: 66}} color='primary'>Nuestro Objetivo</Typography>
            <Typography variant="body1">
              Nuestro principal objetivo es que te sientas cómodo y seguro con
              nuestras prendas de ropa interior. Creemos firmemente que la
              comodidad no debe comprometer el estilo, por lo que nos esforzamos
              por combinar ambos aspectos en cada una de nuestras creaciones.
              Queremos que te sientas bien contigo mismo/a desde adentro hacia
              afuera.
            </Typography>
          </Paper>
          
          <Paper sx={{p:5,m:2}} elevation={5}> 
          <Typography fontSize={{xs: 26,sm: 36, md: 46, lg: 56, xl: 66}} color='primary'>Calidad y Confort</Typography>
            <Typography variant="body1">
              En FASHION FUSION, valoramos la calidad y el confort. 
              Por eso, seleccionamos cuidadosamente los materiales más suaves y duraderos para nuestras prendas. 
              Utilizamos telas transpirables que se 
              adaptan a tu cuerpo, brindándote una sensación de libertad y frescura durante todo el día.
            </Typography>
          </Paper>
          
          <Paper sx={{p:5,m:2}} elevation={5}> 
          <Typography fontSize={{xs: 26,sm: 36, md: 46, lg: 56, xl: 66}} color='primary'>Diversidad y Autenticidad</Typography>
            <Typography variant="body1">
              Creemos en la diversidad y la autenticidad. Sabemos que cada individuo 
              es único y tiene diferentes preferencias. Por eso, ofrecemos una amplia gama de estilos, 
              tallas y colores para que puedas encontrar la ropa interior que se ajuste perfectamente a tu 
              estilo y personalidad. 
              Queremos que te sientas libre para ser tú mismo/a sin limitaciones.
            </Typography>
          </Paper>
          <Paper sx={{p:5,m:2}} elevation={5}> 
          <Typography fontSize={{xs: 26,sm: 36, md: 46, lg: 56, xl: 66}} color='primary'>Sostenibilidad</Typography>
            <Typography variant="body1">
              En FASHION FUSION, nos preocupamos por el medio ambiente. Por eso, 
              nos esforzamos por utilizar materiales y prácticas sostenibles en la fabricación 
              de nuestras prendas de ropa interior. Buscamos minimizar 
              nuestro impacto en el planeta sin comprometer la calidad de nuestros productos.
            </Typography>
          </Paper>
          <Paper sx={{p:5,m:2}} elevation={5}> 
          <Typography fontSize={{xs: 26,sm: 36, md: 46, lg: 56, xl: 66}} color='primary'>Servicio al Cliente</Typography>
            <Typography variant="body1">
              La satisfacción de nuestros clientes es nuestra prioridad. 
              Estamos aquí para ayudarte en todo momento y responder a todas tus preguntas. 
              Nuestro equipo de servicio al cliente está disponible para brindarte asistencia
              personalizada y garantizar que tengas una experiencia de compra placentera y satisfactoria.

              ¡Únete a FASHION FUSION
              y descubre la comodidad y el estilo que estabas buscando en la ropa interior! 
              Explora nuestra colección y encuentra las prendas que se ajusten perfectamente a 
              tu estilo de vida y preferencias.
            </Typography>
          </Paper>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Nosotros;
