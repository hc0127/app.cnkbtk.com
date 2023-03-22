import React, { useState } from 'react';
import {
    Breadcrumbs,
    Grid,
    Paper,
    Typography,
    Card,
    CardContent,
    CardActions,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Avatar,
    Checkbox,
    ButtonGroup,
    Button
} from '@mui/material';
import {
    useParams
} from 'react-router-dom';
import {
    Home,
    AccessTime,
    ExpandMore,
} from '@mui/icons-material';
import DataTable from "react-data-table-component";
import { NavLink } from 'react-router-dom';

export default function Posts(props) {
    const params = useParams();

    //api datas
    const [forum_info, setForumInfo] = useState({
        gid: 1, gtitle: '公示', fid: 1, ftitle: '会员须知', group_forums: [
            {
                fid: 2, title: '会员须知', topics: 8, posts: 8,
                newest_post: { tid: 86, title: '发帖教程' }
            }, {
                fid: 3, title: '创作者须知', topics: 4, posts: 4,
                newest_post: { tid: 56, title: '发帖教程' }
            }]
    });
    const [posts, setPosts] = useState([{
        tid: 1,
        topics: 'topic 1',
        author: 'admin 1',
        reply: 2,
        view: 5,
        finalpost: 'admin 1',
    }, {
        tid: 2,
        topics: 'topic 2',
        author: 'admin 2',
        reply: 5,
        view: 15,
        finalpost: 'admin 2',
    }]);

    let forumColumns = [
        {
            name: "",
            center: true,
            wrap: true,
            cell: (d) => <Checkbox defaultChecked />
        },
        {
            name: "最新",
            center: true,
            wrap: true,
            sortable: true,
            cell: (d) => <NavLink to={'/post/view/' + d.tid}>{d.topics}</NavLink>,
        },
        {
            name: "作者",
            center: true,
            wrap: true,
            selector: (row) => row.author,
        },
        {
            name: "回复/查看",
            center: true,
            wrap: true,
            selector: (row) => row.reply + '/' + row.view,
        },
        {
            name: "最后发表",
            center: true,
            wrap: true,
            selector: (row) => row.finalpost,
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
        <Grid container mt={2} spacing={2}>
            <Grid item>
                <Breadcrumbs aria-label="breadcrumb" separator="›">
                    <NavLink to='/'><Home /></NavLink>
                    <NavLink to='/forums'>论坛</NavLink>
                    <NavLink to={'/forums?gid=' + forum_info.gid}>{forum_info.gtitle}</NavLink>
                    <NavLink to={'/posts/' + forum_info.fid}>{forum_info.ftitle}</NavLink>
                </Breadcrumbs>
            </Grid>
            <Grid item container direction="row" alignItems="flex-start" justifyContent="flex-start">
                <Grid item container md={9} direction="column" alignItems="flex-start" justifyContent="flex-start" spacing={2} p={1}>
                    <Grid item md={12} sx={{ width: '100%' }}>
                        <Paper className='p-3' elevation={2}>
                            <Grid container direction="row" justifyContent="space-between" columns={2}>
                                <Grid item container direction="row" alignItems="flex-start" justifyContent="flex-start" md={9} spacing={1}>
                                    <Grid item>
                                        <img src='../../images/document.png' width='100%' />
                                    </Grid>
                                    <Grid item>
                                        <NavLink to={'/posts/' + forum_info.fid}>{forum_info.ftitle}</NavLink>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='span'>今日:</Typography><Typography variant='span' color='primary'>1</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='span'>主题:</Typography> <Typography variant='span' color='primary'>1</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='span' color='primary'>收藏本版</Typography>
                                    </Grid>
                                    <Grid item>
                                        <AccessTime />
                                        <Typography variant='span'>存档</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='span'>回收站</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='span'>管理面板</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button color='primary' variant='contained'><NavLink className="post_create" to={'/post/create/' + params.fid}>发表帖子</NavLink></Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sx={{ width: '100%' }}>
                        <DataTable
                            columns={forumColumns}
                            data={posts}
                            fixedHeader
                            defaultPageSize={100}
                            pagination
                        />
                    </Grid>
                </Grid>
                <Grid item container md={3} direction="column" spacing={2} p={1}>
                    <Grid item>
                        <Card>
                            <CardContent sx={{ backgroundColor: 'grey' }}>
                                <NavLink to={'/forums' + forum_info?.gid}>{"所属分类:" + forum_info?.gtitle}</NavLink>
                            </CardContent>
                            <CardActions>
                                {
                                    forum_info?.group_forums.map((forum, index) => {
                                        return <NavLink className='m-2' to={'/posts/' + forum.fid}>{forum.title}</NavLink>
                                    })
                                }
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>正在浏览此版块的会员(4)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container direction="row" alignItems="flex-start" justifyContent="flex-start" spacing={1}>
                                    <Grid item container direction="column" alignItems="flex-start" justifyContent="flex-start" md={4}>
                                        <Grid item>
                                            <Avatar />
                                        </Grid>
                                        <Grid item>
                                            <Typography>Admin</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container direction="column" alignItems="flex-start" justifyContent="flex-start" md={4}>
                                        <Grid item>
                                            <Avatar />
                                        </Grid>
                                        <Grid item>
                                            <Typography>Admin</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container direction="column" alignItems="flex-start" justifyContent="flex-start" md={4}>
                                        <Grid item>
                                            <Avatar />
                                        </Grid>
                                        <Grid item>
                                            <Typography>Admin</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container direction="column" alignItems="flex-start" justifyContent="flex-start" md={4}>
                                        <Grid item>
                                            <Avatar />
                                        </Grid>
                                        <Grid item>
                                            <Typography>Admin</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}