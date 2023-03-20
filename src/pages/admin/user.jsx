
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import TreeView from '@mui/lab';
import axios from '../../services/axios'

export default function AdminUser(props) {
  useEffect(() => {
  }, []);

  return (
    <Grid container alignItems="center" justifyContent="center" mt={2}>
      <Grid item container md={4} spacing={2}>
        <Grid item md={12}>
          <Typography>Sign up</Typography>
        </Grid>
        <Grid item md={12}>
          <Paper className='p-5' elevation={6}>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}