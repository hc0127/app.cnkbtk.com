import React, { useEffect } from 'react'; 
import {
    Grid,
    Paper,
    Typography,
    Avatar,
    Chip,
    Button,
    TextField
} from '@mui/material';
import ReCAPTCHA from "react-google-recaptcha";

export default function Register(props) {

  useEffect(() => {
  }, []);
  
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <Grid container alignItems="center" justifyContent="center" mt={2}>
      <Grid item container md={4} spacing={2}>
        <Grid item md={12}>
          <Typography>Sign up</Typography>
        </Grid>
        <Grid item md={12}>
          <Paper className='p-5' elevation={6}>
            <Grid container  direction="row" alignItems="center" justifyContent="center">
              <Grid item container direction="column" alignItems="center" justifyContent="center" spacing={2}>
                  <TextField label="username" fullWidth variant="standard"/>
                  <TextField type="password" fullWidth label="password" variant="standard"/>
                  <TextField type="password" fullWidth label="confirm password" variant="standard"/>
                  <Grid container direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                    <Grid item sx={12} md={8}>
                      <TextField label="email" fullWidth variant="standard"/>
                    </Grid>
                    <Grid item>
                    <Button variant="outlined">Verify</Button>
                    </Grid>
                    <Grid item>
                      <Typography>注册时需要验证邮件地址，请务必填写正确的邮件地址，点击验证按钮后请及时查看邮件,</Typography>
                      <Typography>您可能需要等待几分钟才能收到邮件，如果收件箱没有，请检查一下垃圾邮件箱。</Typography>
                    </Grid>
                  </Grid>
                  <TextField label="verify code" fullWidth variant="standard"/>
                  <Grid item>
                    <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
                  </Grid>
                  <Grid item>
                      <Button variant="outlined">Sign up</Button>
                  </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}