import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField
} from '@mui/material';
import ReCAPTCHA from "react-google-recaptcha";
import axios from '../services/axios'

export default function Register(props) {
  const [registerData, setRegisterData] = useState({});

  useEffect(() => {
  }, []);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  function register() {
    if (registerData.password === registerData.cpassword) {
      axios
        .post('/register', registerData)
        .then(function (res) {
          console.log(res);
        });
    }
  }

  return (
    <Grid container alignItems="center" justifyContent="center" mt={2}>
      <Grid item container md={4} spacing={2}>
        <Grid item md={12}>
          <Typography>Sign up</Typography>
        </Grid>
        <Grid item md={12}>
          <Paper className='p-5' elevation={6}>
            <Grid container direction="row" alignItems="center" justifyContent="center">
              <Grid item container direction="column" alignItems="center" justifyContent="center" spacing={2}>
                <TextField value={registerData.user} onChange={(e) => setRegisterData({ ...registerData, user: e.target.value })} label="username" fullWidth variant="standard" />
                <TextField value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} type="password" fullWidth label="password" variant="standard" />
                <TextField value={registerData.cpassword} onChange={(e) => setRegisterData({ ...registerData, cpassword: e.target.value })} type="password" fullWidth label="confirm password" variant="standard" />
                <TextField value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} label="email" fullWidth variant="standard" />
                <Grid item>
                  <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
                </Grid>
                <Grid item>
                  <Button variant="outlined" onClick={register}>Sign up</Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}