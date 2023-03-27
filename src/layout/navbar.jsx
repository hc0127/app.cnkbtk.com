import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Divider,
  TextField,
  Typography,
} from '@mui/material';

import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Outlet, NavLink } from 'react-router-dom';
import axios from '../services/axios';
import { useEffect } from 'react';

export default function Navbar() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [login_email, setLoginEmail] = useState('');
  const [login_password, setLoginPassword] = useState('');

  const loginModalToggle = () => setLoginModalOpen(!isLoginModalOpen);

  const login = () => {
    axios
      .post('login', { email: login_email, password: login_password })
      .then(function (res) {

      });
  }

  const [captcha, setCaptcha] = React.useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6,'red');
  }, []);

  return (
    <>
      <Box>
        <AppBar position="static" color="white">
          <ToastContainer />
          <Container maxWidth="lg">
            <Grid container direction={"row"} justifyContent="space-between" alignItems="center">
              <Grid item container direction={"row"} xs={6} md={6} xl={6} lg={6} justifyContent="flex-start" alignItems="center">
                <Grid item>
                  <img
                    alt="logo"
                    src="images/logo.png"
                    height={60}
                  />
                </Grid>
                <Grid item>
                  <Button size="large" sx={{ color: 'red' }}><NavLink className="to_page" to="/forums">论坛</NavLink></Button>
                </Grid>
              </Grid>
              <Grid item container direction={"row"} xs={6} md={6} xl={6} lg={6} justifyContent="flex-end" alignItems="center">
                <Grid item>
                  <Button onClick={() => setLoginModalOpen(true)} color='dark'>登录</Button>
                </Grid>
                <Grid item>
                  <Button color='dark' sx={{ color: 'red !important' }}><NavLink to="/register">注册</NavLink></Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>
      <Container>
        <Outlet />
      </Container>
      <div className='tmp_footer'>

      </div>
      <Grid className="footer">
        <Divider className='mt-3' />
        <Typography className='text-center p-3' label=" © 2022 Comsenz Inc. Powered by Discuz!">© 2022 Comsenz Inc. Powered by Discuz!</Typography>
      </Grid>

      <MDBModal show={isLoginModalOpen} setShow={setLoginModalOpen} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>用户登录</MDBModalTitle>
              <Button className='btn-close' onClick={() => loginModalToggle()}></Button>
            </MDBModalHeader>
            <MDBModalBody>
              <Grid container direction="column" rowSpacing={2} alignItems="center" justifyContent="center">
                <Grid item sx={{ width: '60%' }}>
                  <TextField fullWidth value={login_email} onChange={(e) => setLoginEmail(e.target.value)} label="邮箱 / 账号" variant="standard" />
                </Grid>
                <Grid item sx={{ width: '60%' }}>
                  <TextField fullWidth value={login_password} onChange={(e) => setLoginPassword(e.target.value)} type="password" label="密码" variant="standard" />
                </Grid>
                <Grid item>
                  <LoadCanvasTemplate />
                </Grid>
              </Grid>
            </MDBModalBody>
            <MDBModalFooter>
              <Button onClick={() => login()} variant='outlined' color='primary'>登录</Button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}