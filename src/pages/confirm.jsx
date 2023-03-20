import React, { useEffect, useState, useCallback } from 'react';
import {
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import axios from '../services/axios'
import ReactInputVerificationCode from 'react-input-verification-code';

import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Confirm(props) {
    const [value, setValue] = useState('');

    useEffect(() => {
    }, []);

    function confirm(e) {
        setValue(e);
        if (e.length === 6) {
            axios.post('/confirm', { code: value }).then(function (res) {
                console.log(res);
            });
        }
    }

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Grid container alignItems="center" justifyContent="center" mt={2}>
            <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
            <Grid item container md={6} direction="column" spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={12}>
                    <Typography>Verification Confirm</Typography>
                </Grid>
                <Grid item md={12}>
                    <Paper className='p-5' elevation={6}>
                        <ReactInputVerificationCode value={value} length={6} placeholder="" onChange={confirm} />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}