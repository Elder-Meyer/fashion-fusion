import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Link as LinkRoute } from 'react-router-dom';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../../components/items/Typography';
import AppForm from '../Home/AppForm';
import { email, required } from '../../components/form/validation';
import RFTextField from '../../components/form/RFTextField';
import FormButton from '../../components/form/FormButton';
import FormFeedback from '../../components/form/FormFeedback';
import withRoot from '../../styles/withRoot';
import { TextField} from '@mui/material'
import { app } from "../../config/firebaseConnection";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
function SignUp() {
  const [sent, setSent] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  // const [error, setError] = React.useState("");
  // const [variant, setVariant] =React.useState("");
  // const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const validate = (values) => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName) return;
    if (!lastName) return;
    if (!email) return;
    if (!password) return;
    const coleccionRef = app.firestore().collection("usuarios");
    // Realizar la consulta para verificar si el correo ya existe
    const querySnapshot = await coleccionRef.where("email", "==", email).get();
    if (!querySnapshot.empty) {
      // El correo ya existe, puedes manejar el caso aquí
      console.log("El correo ya está registrado");
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Correo existente, preba con otro',
        showConfirmButton: false,
        timer: 3500
      })
      
      return;
    }
    // El correo no existe, agregarlo a la colección de usuarios
    await coleccionRef.doc().set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      tipo_Usuario: "consultador",
    });
    navigate("/inicio");
  };
  

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link component={LinkRoute} to="/sign-in" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First name"
                    name="firstName"
                    value={firstName || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      const regex = /^[a-zA-Z\s]*$/; 
                      if (regex.test(value)) {
                        setFirstName(value);
                      }
                    }}
                    required
                    error={
                      firstName.length === 0 ||
                      firstName.length < 3 ||
                      firstName.length > 30
                    }
                    helperText={
                      firstName.length === 0
                        ? "El nombre no pude estar vacio"
                        : firstName.length < 3
                        ? "El nombre no puede tener tener menos de 3 caracteres"
                        : firstName.length > 30
                        ? "El nombre no puede tener más de 30 caracteres"
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Last name"
                    name="LastName"
                    value={lastName || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      const regex = /^[a-zA-Z\s]*$/; 
                      if (regex.test(value)) {
                        setLastName(value);
                      }
                    }}
                    required
                    error={
                      lastName.length === 0 ||
                      lastName.length < 3 ||
                      lastName.length > 30
                    }
                    helperText={
                      lastName.length === 0
                        ? "El apellido no pude estar vacio"
                        : lastName.length < 3
                        ? "El apellido no puede tener tener menos de 3 caracteres"
                        : lastName.length > 30
                        ? "El apellido no puede tener más de 30 caracteres"
                        : ""
                    }
                  />
                </Grid>
              </Grid>
              <br />
              <TextField
                fullWidth
                label="Correo electrónico"
                name="email"
                type="email"
                value={email || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                }}
                required
                error={
                  email.length === 0 ||
                  !/\S+@\S+\.\S+/.test(email)
                }
                helperText={
                  email.length === 0
                    ? "El correo electrónico no puede estar vacío"
                    : !/\S+@\S+\.\S+/.test(email)
                    ? "Ingrese un correo electrónico válido"
                    : ""
                }
              />
              <br /><br />

              <TextField
                fullWidth
                label="Contraseña"
                name="password"
                type="password"
                value={password || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setPassword(value);
                }}
                required
                error={
                  (password.length > 0 && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}/.test(password)) || password.length === 0
                }
                helperText={
                  password.length === 0
                    ? <span style={{ color: 'red' }}>La contraseña no puede estar vacía</span>
                    : password.length > 0 && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}/.test(password)
                    ? "La contraseña debe tener al menos 5 caracteres, incluyendo al menos 1 letra minúscula, 1 letra mayúscula, 1 número y 1 carácter especial."
                    : ""
                }
              />


              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
                fullWidth
                type="submit"
                onClick={handleSubmit}
              >
                Registrar
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
    </React.Fragment>
  );
}

export default withRoot(SignUp);
