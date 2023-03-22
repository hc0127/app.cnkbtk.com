
import React, { useEffect, useState } from 'react';
import {
    Grid,
    Paper,
    Typography,
    Checkbox,
    Button,
    ButtonGroup,
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
import { TreeView, TreeItem } from '@mui/lab';
import {
    ExpandMore,
    ChevronRight,
} from '@mui/icons-material';

import DataTable from "react-data-table-component";
import { NavLink } from 'react-router-dom';
import axios from '../../services/axios'

export default function AdminPost(props) {
    useEffect(() => {
    }, []);

    //move modal
    const [isLoginModalOpen, setMoveModalOpen] = useState(false);
    const moveModalToggle = () => setMoveModalOpen(!isLoginModalOpen);

    //tree item modal
    const [selectedItem, setSelectedItem] = useState([]);
    const treeItemSelect = (event, nodeIds) => {
        setSelectedItem(nodeIds);
    };

    //tree item
    const [category, setCategory] = useState([]);
    const categorySelect = (event, nodeIds) => {
        setCategory(nodeIds);
    };

    const move = () => {
        axios.post('/post/move', { gid: 1, fid: 1, tid: 1 }, function (res) {
            console.log(res);
        });
    }

    const remove = () => {
        axios.post('/post/delete', { tid: 1 }, function (res) {
            console.log(res);
        });
    }

    let posts = [{
        tid: 1,
        title: '只见她的小蛮腰突然一扭',
        creator: 'creator 1',
        content: '<p>Hi</p>',
        views: 2,
        created: '2020-05-11',
        tags: ['DR', 'BC'],
    }, {
        tid: 2,
        title: '腰间与肋骨处上下抓挠',
        creator: 'creator 2',
        content: '<p>Hello</p>',
        views: 5,
        created: '2022-04-30',
        tags: ['BP', 'KR'],
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
            cell: (d) => <NavLink to={'/post/view/' + d.tid}>{d.title}</NavLink>,
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
                    <Button size='small' color='secondary' onClick={() => remove(d)}>Delete</Button>
                    <Button size='small' onClick={moveModalToggle}>Move</Button>
                </ButtonGroup>
            ]
        },
    ];

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" mt={2}>
                <Grid item container md={12} spacing={2}>
                    <Grid item md={12}>
                        <Typography>Post Manage</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <TreeView
                            aria-label="file system navigator"
                            defaultCollapseIcon={<ExpandMore />}
                            defaultExpandIcon={<ChevronRight />}
                            onNodeSelect={categorySelect}
                            selected={category}
                            sx={{ overflowY: 'auto' }}
                        >
                            <TreeItem nodeId="0" label="All">
                                <TreeItem nodeId="1" label="公示栏">
                                    <TreeItem nodeId="2" label="会员须知" />
                                    <TreeItem nodeId="3" label="创作者须知" />
                                </TreeItem>
                                <TreeItem nodeId="4" label="资源库">
                                    <TreeItem nodeId="5" label="原创视频" />
                                    <TreeItem nodeId="6" label="原创图集" />
                                    <TreeItem nodeId="7" label="原创小说" />
                                    <TreeItem nodeId="8" label="教程" />
                                    <TreeItem nodeId="9" label="用户交流中心">
                                        <TreeItem nodeId="10" label="文章" />
                                        <TreeItem nodeId="11" label="讨论区" />
                                        <TreeItem nodeId="12" label="视频" />
                                        <TreeItem nodeId="13" label="图集" />
                                    </TreeItem>
                                </TreeItem>
                                <TreeItem nodeId="14" label="制作组专栏">
                                    <TreeItem nodeId="15" label="四月bd会员专区" />
                                    <TreeItem nodeId="16" label="胜景影视原创" />
                                    <TreeItem nodeId="17" label="杰仔原创（VIP）" />
                                    <TreeItem nodeId="18" label="贝特原创" />
                                    <TreeItem nodeId="19" label="天冥玄月专栏" />
                                </TreeItem>
                                <TreeItem nodeId="20" label="定制服务">
                                    <TreeItem nodeId="21" label="制作组" />
                                    <TreeItem nodeId="22" label="模特" />
                                </TreeItem>
                            </TreeItem>
                        </TreeView>
                    </Grid>
                    <Grid item md={10}>
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

            <MDBModal show={isLoginModalOpen} setShow={setMoveModalOpen} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>用户登录</MDBModalTitle>
                            <Button className='btn-close' onClick={() => moveModalToggle()}></Button>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <TreeView
                                aria-label="file system navigator"
                                defaultCollapseIcon={<ExpandMore />}
                                defaultExpandIcon={<ChevronRight />}
                                onNodeSelect={treeItemSelect}
                                selected={selectedItem}
                                sx={{ overflowY: 'auto' }}
                            >
                                <TreeItem nodeId="1" label="公示栏">
                                    <TreeItem nodeId="2" label="会员须知" />
                                    <TreeItem nodeId="3" label="创作者须知" />
                                </TreeItem>
                                <TreeItem nodeId="4" label="资源库">
                                    <TreeItem nodeId="5" label="原创视频" />
                                    <TreeItem nodeId="6" label="原创图集" />
                                    <TreeItem nodeId="7" label="原创小说" />
                                    <TreeItem nodeId="8" label="教程" />
                                    <TreeItem nodeId="9" label="用户交流中心">
                                        <TreeItem nodeId="10" label="文章" />
                                        <TreeItem nodeId="11" label="讨论区" />
                                        <TreeItem nodeId="12" label="视频" />
                                        <TreeItem nodeId="13" label="图集" />
                                    </TreeItem>
                                </TreeItem>
                                <TreeItem nodeId="14" label="制作组专栏">
                                    <TreeItem nodeId="15" label="四月bd会员专区" />
                                    <TreeItem nodeId="16" label="胜景影视原创" />
                                    <TreeItem nodeId="17" label="杰仔原创（VIP）" />
                                    <TreeItem nodeId="18" label="贝特原创" />
                                    <TreeItem nodeId="19" label="天冥玄月专栏" />
                                </TreeItem>
                                <TreeItem nodeId="20" label="定制服务">
                                    <TreeItem nodeId="21" label="制作组" />
                                    <TreeItem nodeId="22" label="模特" />
                                </TreeItem>
                            </TreeView>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <Button onClick={() => move()} color='primary'>登录</Button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}