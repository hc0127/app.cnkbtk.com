
import React, { useEffect, useState } from 'react';
import {
    Grid,
    Paper,
    Typography,
    Checkbox,
    Button,
    ButtonGroup,
} from '@mui/material';
import axios from '../../services/axios'
import DataTable from "react-data-table-component";
import { NavLink } from 'react-router-dom';

export default function AdminPost(props) {
    useEffect(() => {
    }, []);

    let posts = [{
        tid: 1,
        title: '只见她的小蛮腰突然一扭',
        creator: 'creator 1',
        content: '<p>Hi</p>',
        views: 2,
        created: '2020-05-11',
        tags: ['DR','BC'],
    }, {
        tid: 2,
        title: '腰间与肋骨处上下抓挠',
        creator: 'creator 2',
        content: '<p>Hello</p>',
        views: 5,
        created: '2022-04-30',
        tags: ['BP','KR'],
    }];

    let postColumns = [
        {
            name: "",
            center: true,
            wrap: true,
            cell: (d) => <Checkbox defaultChecked />
        },
        {
            name: "标题",
            center: true,
            wrap: true,
            sortable: true,
            cell: (d) => <NavLink to={'/forum/view/' + d.tid}>{d.title}</NavLink>,
        },
        {
            name: "创作者",
            center: true,
            wrap: true,
            selector: (row) => row.creator,
        },
        {
            name: "查看",
            center: true,
            wrap: true,
            selector: (row) => row.views,
        },
        {
            name: "标签",
            center: true,
            wrap: true,
            selector: (row) => row.created,
        },
        {
            name: "行动",
            center: true,
            wrap: true,
            cell: (d) => [
                <ButtonGroup variant="contained">
                    <Button size='small' color='secondary'>Delete</Button>
                    <Button size='small'>Move</Button>
                </ButtonGroup>
            ]
        },
    ];

    return (
        <Grid container alignItems="center" justifyContent="center" mt={2}>
            <Grid item container md={12} spacing={2}>
                <Grid item md={12}>
                    <Typography>Post Manage</Typography>
                </Grid>
                <Grid item md={12}>
                    <Paper className='p-5' elevation={6}>
                        <DataTable
                            columns={postColumns}
                            data={posts}
                            fixedHeader
                            defaultPageSize={100}
                            pagination
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}