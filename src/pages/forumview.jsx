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

    const [post_info, setForumInfo] = useState({
        gid: 1, gtitle: '公示',
        fid: 1, ftitle: '会员须知',
        tid: 240,
        title: '警告！降低音量～太大声被投诉～这样的TK你见过？',
        poster:'admin',
        time:'2022-07-21',
        views:31,
        replies:1,
        theme:0,
        post_count:34,
        integral:23,
        tags:['无鞋','裸足','JK','TK','MUMUZI','工作室']
    });


    return (
        <Grid container direction="column" mt={2} >
            <Grid item>
                <Breadcrumbs aria-label="breadcrumb" separator="›">
                    <NavLink to='/'><Home /></NavLink>
                    <NavLink to='/forum'>论坛</NavLink>
                    <NavLink to={'/forum?gid=' + post_info.gid}>{post_info.gtitle}</NavLink>
                    <NavLink to={'/forum/list/' + post_info.fid}>{post_info.ftitle}</NavLink>
                    <NavLink to={'/forum/view/' + post_info.tid}>{post_info.title}</NavLink>
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
                <CardHeader sx={{ backgroundColor: 'secondary.light', border: '1px solid #bbb' }} title={post_info.title}
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
                                    <Typography color="primary">{post_info.views}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>查看</Typography>
                                </Grid>
                            </Grid>
                            <Grid item container direction="column" alignItems="center" md={3}>
                                <Grid item>
                                    <Typography color="primary">{post_info.replies}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>回复</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                />
                <CardContent sx={{ p: '0', minHeight: '500px' }}>
                    <Grid container>
                        <Grid item md={2}>
                            <Box sx={{ backgroundColor: 'secondary.light', width: '100%', minHeight: '600px' }}>
                                <Grid container direction="column" alignItems="center" justifyContent="center">
                                    <Grid item m={2}>
                                        <Avatar />
                                    </Grid>
                                    <Grid item>
                                        <Typography color="primary">{post_info.poster}</Typography>
                                    </Grid>
                                    <Grid item container direction="row" spacing={2} mb={2}>
                                        <Grid item container direction="column" alignItems="center" justifyContent="center" md={4}>
                                            <Grid item>
                                                <Typography color="secondary.dark">{post_info.theme}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography color="secondary.dark">主题</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="column" alignItems="center" justifyContent="center" md={4}>
                                            <Grid item>
                                                <Typography color="secondary.dark">{post_info.post_count}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography color="secondary.dark">帖子</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="column" alignItems="center" justifyContent="center" md={4}>
                                            <Grid item>
                                                <Typography color="secondary.dark">{post_info.integral}</Typography>
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
                                        <Typography>{"积分" + post_info.integral}</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box>
                                <Grid container direction="column" m={1}>
                                    <Grid item container direction="row" spacing={3}>
                                        <Grid item>
                                            <Typography color="secondary.dark">{"时间 " + post_info.time}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="secondary.dark">|</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="secondary.dark">{"阅读 " + post_info.views}</Typography>
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