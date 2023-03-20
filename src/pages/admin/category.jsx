
import React, { useEffect, useState } from 'react';
import {
    Grid,
    Paper,
    Typography,
    Button,
} from '@mui/material';
import {
    ExpandMore,
    ChevronRight,
} from '@mui/icons-material';
import { TreeView, TreeItem } from '@mui/lab';
import axios from '../../services/axios'

export default function AdminCategory(props) {
    const [selected, setSelected] = React.useState([]);

    useEffect(() => {
    }, []);

    const handleSelect = (event, nodeIds) => {
        setSelected(nodeIds);
    };

    return (
        <Grid container alignItems="center" justifyContent="center" mt={2}>
            <Grid item container md={6} spacing={2}>
                <Grid item md={12}>
                    <Typography>Category</Typography>
                </Grid>
                <Grid item md={9}>
                    <Paper className='p-5' elevation={6}>
                        <TreeView
                            aria-label="file system navigator"
                            defaultCollapseIcon={<ExpandMore />}
                            defaultExpandIcon={<ChevronRight />}
                            onNodeSelect={handleSelect}
                            selected={selected}
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
                    </Paper>
                </Grid>
                <Grid item container direction="column" md={3} spacing={2}>
                    <Grid item>
                        <Button variant='contained' fullWidth>add</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' fullWidth>edit</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' fullWidth>remove</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}