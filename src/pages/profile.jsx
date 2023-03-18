import React, { useEffect, useState } from 'react';

import {
    Grid,
    Paper,
    Typography,
    Avatar,
    Chip,
    Button,
    TextField
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
import ImageUploading from "react-images-uploading";
import axios from '../services/axios';

export default function Profile(props) {
    const [isPasswordSettingModalOpen, setPasswordSettingModalOpen] = useState(false);
    const [isAvatarSettingModalOpen, setAvatarSettingModalOpen] = useState(false);
    
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [images, setImages] = useState([]);

    const passwordModalToggle = () => setPasswordSettingModalOpen(!isPasswordSettingModalOpen);
    const avatarModalToggle = () => setAvatarSettingModalOpen(!isAvatarSettingModalOpen);

    const maxNumber = 2;

    const changePassword = () =>{
        if(password === confirm_password){
            axios
            .post('/change_password',{password:password})
            .then(function(res){
                console.log(res);
            });
        }
    }

    const changeAvatar = () =>{
        axios
        .post('/change_avatar',{image:images})
        .then(function(res){
            console.log(res);
        });
    }

    useEffect(() => {
    }, []);

    return (
        <>
            <Grid container direction="row">
                <Grid item sm={12} md={12}>
                    <img alt="header" src='images/profile_header.png' width='100%' />
                </Grid>
                <Grid item container direction="column" sm={9} md={9} rowSpacing={2}>
                    <Grid item container direction="row" justifyContent="flex-start">
                        <Grid item>
                            <Typography variant='h6'>Basic Information</Typography>
                        </Grid>
                        <Grid item ml={3}>
                            <Button onClick={() => setPasswordSettingModalOpen(true)} color='primary' variant="outlined">change password</Button>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" rowSpacing={1}>
                        <Grid item sm={12} md={6}>
                            <Typography>Username:</Typography>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Typography>UID:</Typography>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Typography>Email status:</Typography>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Typography>Video authentication:</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>Active profile</Typography>
                    </Grid>
                    <Grid item container direction="row" rowSpacing={1} alignItems="center" spacing={2} justifyContent="space-between">
                        <Grid item sm={6} md={12}>
                            <Typography>user group:</Typography>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Typography>registration time:</Typography>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Typography>last visit:</Typography>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Typography>registration ip:</Typography>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Typography>last visit ip:</Typography>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Typography>last activity time:</Typography>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Typography>use the system default timezone:</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>Statistics</Typography>
                    </Grid>
                    <Grid item container direction="row">
                        <Grid item sm={6} md={4}>
                            <Typography>used space:</Typography>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Typography>points:</Typography>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Typography>general points:</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={3} md={3}>
                    <Paper className='p-2' elevation={2}>
                        <Grid container direction={"column"} alignItems="center" justifyContent="center">
                            <Grid item container direction="row" alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Avatar></Avatar>
                                    <Typography>USER</Typography>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => setAvatarSettingModalOpen(true)} variant='outlined'>Change Avatar</Button>
                                </Grid>
                            </Grid>
                            <Grid item container direciton="row" mt={2} alignItems="center" justifyContent="space-around">
                                <Grid item>
                                    Followers:
                                </Grid>
                                <Grid item>
                                    Topics:
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className='p-2 mt-2' elevation={2}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Typography variant='h6'>Popular tags</Typography>
                            </Grid>
                            <Grid item mt={2}>
                                <Chip label='KB' />
                                <Chip label='TK' />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <MDBModal show={isPasswordSettingModalOpen} setShow={setPasswordSettingModalOpen} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Change Password</MDBModalTitle>
                            <Button className='btn-close' onClick={() => passwordModalToggle()}></Button>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Grid container direction="column" rowSpacing={2} alignItems="center" justifyContent="center">
                                <Grid item>
                                    <TextField value={password} onChange={(e) =>setPassword(e.target.value)} type="password" label="New password" variant="standard" />
                                </Grid>
                                <Grid item>
                                    <TextField value={confirm_password} onChange={(e) =>setConfirmPassword(e.target.value)} type="password" label="Confirm password" variant="standard" />
                                </Grid>
                            </Grid>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <Button onClick={() => passwordModalToggle()} color='secondary'>Canacel</Button>
                            <Button onClick={() => changePassword()}  color='primary'>Change</Button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBModal show={isAvatarSettingModalOpen} setShow={setAvatarSettingModalOpen} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Change Password</MDBModalTitle>
                            <Button className='btn-close' onClick={() => avatarModalToggle()}></Button>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <ImageUploading
                                value={images}
                                onChange={setImages}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                                acceptType={["jpg", "png", "gif"]}
                            >
                                {({
                                    imageList,
                                    onImageUpload,
                                }) => (
                                    <Grid container direction="row" alignItems="center" justifyContent="space-between">
                                        <Grid item>
                                            <Button onClick={onImageUpload} variant="outlined">Select Avatar</Button>
                                        </Grid>
                                        <Grid>
                                            <img src={imageList[0]?.data_url} alt="" width="200" />
                                        </Grid>
                                    </Grid>
                                )}
                            </ImageUploading>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <Button onClick={() => avatarModalToggle()} color='secondary'>Canacel</Button>
                            <Button onClick={() => changeAvatar()} color='primary'>Change</Button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}