import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from '@mui/material';
import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import ReCAPTCHA from "react-google-recaptcha";
import axios from '../services/axios'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

export default function Register(props) {
  const [registerData, setRegisterData] = useState({});
  const [showPassword, setShowPassword] = React.useState(false);

  const [captcha, setCaptcha] = React.useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  function register() {
    if(validateCaptcha(captcha)){
      if (registerData.password === registerData.cpassword) {
        axios
          .post('/register', registerData)
          .then(function (res) {
            console.log(res);
          });
      }
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
                <TextField value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} label="邮箱" fullWidth variant="standard" />
                <FormControl fullWidth variant="filled">
                  <InputLabel htmlFor="password">密码</InputLabel>
                  <Input
                    id="password"
                    value={registerData.password}
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <TextField value={registerData.email} onChange={(e) => setCaptcha(e.target.value)} label="验证码" fullWidth variant="standard" />
                <Grid item>
                  <LoadCanvasTemplate />
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