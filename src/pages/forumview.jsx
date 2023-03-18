import React, { useState } from 'react';
import {
    Breadcrumbs,
    Grid,
    Typography,
    CardHeader,
    CardContent,
    Button,
    IconButton,
    Box,
    Avatar,
} from '@mui/material';

import {
    Home,
    ArrowCircleLeftOutlined,
    ArrowCircleRightOutlined,
    PrintOutlined,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function ForumView(props) {
    return (
        <Grid container direction="column" mt={2} >
            <Grid item>
                <Breadcrumbs aria-label="breadcrumb" separator="›">
                    <NavLink to='/'><Home /></NavLink>
                    <NavLink to='/forum'>论坛</NavLink>
                    <NavLink to='/forum?gid=1'>公示</NavLink>
                    <NavLink to='/forum/list/1'>会员须知</NavLink>
                    <NavLink to='/forum/view/1'>论坛内的普通用户间交流规则</NavLink>
                </Breadcrumbs>
            </Grid>
            <Grid item container direction="row">
                <Grid item m={1}>
                    <Button color='primary' variant='contained'>发布主题</Button>
                </Grid>
                <Grid item m={1}>
                    <Button color='yellow' variant='contained' >回复</Button>
                </Grid>
            </Grid>
            <Grid item>
                <CardHeader sx={{ backgroundColor: 'secondary.light', border: '1px solid #bbb' }} title="论坛内的普通用户间交流规则"
                    action={
                        <Grid container alignItems="center" justifyContent="center" spacing={2}>
                            <Grid item md={2}>
                                <IconButton children={<PrintOutlined />} />
                            </Grid>
                            <Grid item md={2}>
                                <IconButton children={<ArrowCircleLeftOutlined />} />
                            </Grid>
                            <Grid item md={2}>
                                <IconButton children={<ArrowCircleRightOutlined />} />
                            </Grid>
                            <Grid item container direction="column" alignItems="center" md={3}>
                                <Grid item>
                                    <Typography color="primary">123</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>查看</Typography>
                                </Grid>
                            </Grid>
                            <Grid item container direction="column" alignItems="center" md={3}>
                                <Grid item>
                                    <Typography color="primary">2</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>回复</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                />
                <CardContent sx={{ p: '0',paddingBottom:'0' }}>
                    <Grid container>
                        <Grid item md={2}>
                            <Box sx={{ backgroundColor: 'secondary.light', width: '100%' }}>
                                <Grid container direction="column" alignItems="center" justifyContent="center">
                                    <Grid item m={2}>
                                        <Avatar />
                                    </Grid>
                                    <Grid item>
                                        <Typography color="primary">Admin</Typography>
                                    </Grid>
                                    <Grid item container direction="row" spacing={2} mb={2}>
                                        <Grid item container direction="column" alignItems="center" justifyContent="center" md={4}>
                                            <Grid item>
                                                <Typography color="secondary.dark">37</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography color="secondary.dark">主题</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="column" alignItems="center" justifyContent="center" md={4}>
                                            <Grid item>
                                                <Typography color="secondary.dark">37</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography color="secondary.dark">帖子</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="column" alignItems="center" justifyContent="center" md={4}>
                                            <Grid item>
                                                <Typography color="secondary.dark">37</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography color="secondary.dark">积分</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography color="primary">administrator</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>{"积分"}</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box>
                                <Grid container direction="column" m={1}>
                                    <Grid item container direction="row" spacing={3}>
                                        <Grid item>
                                            <Typography color="secondary.dark">{"时间 "+ "2022-12-31 10:50:30"}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="secondary.dark">{"时间 "+ "2022-12-31 10:50:30"}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="secondary.dark">{"阅读 "+ "221"}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>

                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
            <Grid item>
                <Button variant='contained'>发表新帖</Button>
            </Grid>
        </Grid>
    );
}