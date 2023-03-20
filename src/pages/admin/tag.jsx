
import React, { useEffect, useState } from 'react';
import {
    Grid,
    Paper,
    Typography,
    Button,
    Chip,
    TextField
} from '@mui/material';
import axios from '../../services/axios'
import {
    RemoveCircleRounded
} from '@mui/icons-material';
export default function AdminTag(props) {
    const [tagValue, setTagValue] = useState('');

    useEffect(() => {
    }, []);

    const tags = ['A', 'B', 'C'];

    const handleDelete = (index) => {
        axios.post('/tag/remove',{tag:index}).then(function(res){
            console.log(res);
        });
    }

    const tagAdd = () =>{
        axios.post('/tag/add',{tag:tagValue}).then(function(res){
            console.log(res);
        });
    }

    return (
        <Grid container alignItems="center" justifyContent="center" mt={2}>
            <Grid item container md={6} spacing={2}>
                <Grid item container md={12} alignItems="center" justifyContent="space-between" spacing={2}>
                    <Grid item>
                        <Typography>Tags</Typography>
                    </Grid>
                    <Grid item container spacing={2}>
                        <Grid item>
                            <TextField size='small' value={tagValue} onChange={(e) =>setTagValue(e.target.value)}/>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' onClick={tagAdd}>add</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <Paper className='p-5' elevation={6}>
                        <Grid container spacing={2}>
                            {
                                tags.map((tag, index) => {
                                    return <Grid item key={index}><Chip label={tag} onDelete={() =>handleDelete(index)} /></Grid>
                                })
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}