import React, { useState } from 'react';
import {
    Breadcrumbs,
    Grid,
    Typography,
    Button,
    TextField,
    Chip,
    Autocomplete,
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

import {
    Home,
} from '@mui/icons-material';
import ImageUploading from "react-images-uploading";
import Files from 'react-files';
import { NavLink } from 'react-router-dom';
import axios from '../../services/axios';

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function PostCreate(props) {

    const [post_info, setForumInfo] = useState({
        gid: 1, gtitle: '公示',
        fid: 1, ftitle: '会员须知',
        tid: 240,
        title: '警告！降低音量～太大声被投诉～这样的TK你见过？',
        poster: 'admin',
        time: '2022-07-21',
        views: 31,
        replies: 1,
        theme: 0,
        post_count: 34,
        integral: 23,
        tags: ['无鞋', '裸足', 'JK', 'TK', 'MUMUZI', '工作室']
    });

    //image upload part
    const [isImageUploadModalOpen, setImageUploadModalOpen] = useState(false);
    const [images, setImages] = useState([]);
    const ImageUploadModalToggle = () => setImageUploadModalOpen(!isImageUploadModalOpen);
    const changeAvatar = () => {
        axios
            .post('/change_avatar', { image: images })
            .then(function (res) {
                console.log(res);
            });
    }
    const maxNumber = 10;

    //rich editor part
    const [editorState, onEditorStateChange] = useState();

    //file upload part
    const [files, setFiles] = useState([]);

    const fileSelect = (file) => {
        setFiles([...files, file]);
    }

    const fileSelectError = (error, file) => {
        alert('error code ' + error.code + ': ' + error.message)
    }

    const fileDelete = (index) => {
        console.log(index);
        const tmp_files = files.filter((file, i) => { return index != i })
        setFiles(tmp_files);
    }
    //tag manage part
    const [tags, setTags] = useState([]);
    return (
        <>
            <Grid container direction="column" mt={2} >
                <Grid item>
                    <Breadcrumbs aria-label="breadcrumb" separator="›">
                        <NavLink to='/'><Home /></NavLink>
                        <NavLink to='/forums'>论坛</NavLink>
                        <NavLink to={'/forums?gid=' + post_info.gid}>{post_info.gtitle}</NavLink>
                        <NavLink to={'/posts/' + post_info.fid}>{post_info.ftitle}</NavLink>
                        <Typography color="black">发表帖子</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item container direction="column" justifyContent="center" mt={2} spacing={2}>
                    <Grid item>
                        <TextField fullWidth variant='standard' label="title" />
                    </Grid>
                    <Grid item container direction="row" alignItems="center" spacing={1}>
                        <Grid item>
                            <Button onClick={() => setImageUploadModalOpen(true)} variant='outlined'>Upload Images</Button>
                        </Grid>
                        <Grid item>
                            <Files
                                className='files-dropzone'
                                onChange={fileSelect}
                                onError={fileSelectError}
                                accepts={['.txt', '.pdf', '.doc', '.docx']}
                                multiple
                                maxFileSize={1000000}
                                minFileSize={0}
                                clickable>
                                <Button fullWidth variant='outlined' className='m-1'>Upload Files</Button>
                            </Files>
                        </Grid>
                        {
                            files.map((file, index) => {
                                return <Grid item key={index}><Chip label={file[0].name} onDelete={() => fileDelete(index)} /></Grid>
                            })
                        }
                    </Grid>
                    <Grid item>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange}
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <Autocomplete
                        multiple
                        onChange={(e, value) => setTags(value)}
                        id="tags-filled"
                        options={tags.map((tag) => tag)}
                        freeSolo
                        renderTags={(tags, getTagProps) =>
                            tags.map((tag, index) => (
                                <Chip variant="outlined" label={tag} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="tags"
                                placeholder="Favorites"
                            />
                        )}
                    />
                </Grid>
                <Grid item container direction="row" mt={5}>
                    <Grid item className='m-1'>
                        <Button variant='contained'>发表帖子</Button>
                    </Grid>
                    <Grid item className='m-1'>
                        <Button variant='contained'>保存草稿</Button>
                    </Grid>
                </Grid>
            </Grid>
            <MDBModal show={isImageUploadModalOpen} setShow={setImageUploadModalOpen} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Upload Image</MDBModalTitle>
                            <Button className='btn-close' onClick={() => ImageUploadModalToggle()}></Button>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <ImageUploading
                                value={images}
                                multiple
                                onChange={setImages}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                                acceptType={["jpg", "png", "gif"]}
                            >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                }) => (
                                    <Grid container direction="column">
                                        <Grid item container direction="row">
                                            <Grid item>
                                                <Button onClick={onImageUpload} {...dragProps}>Select Image</Button>
                                            </Grid>
                                            <Grid item>
                                                <Button onClick={onImageRemoveAll}>Remove All</Button>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="row" spacing={1}>
                                            {
                                                imageList.map((image, index) => {
                                                    return <Grid item container key={index} direction="column" spacing={1} alignItems="center" justifyContent="center" md={6}>
                                                        <Grid item>
                                                            <img src={image['data_url']} alt='image' width="100" />
                                                        </Grid>
                                                        <Grid item container direction="row" spacing={1} alignItems="center" justifyContent="center">
                                                            <Grid item>
                                                                <Button variant='contained' onClick={() => onImageUpdate(index)}>Update</Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button variant='contained' onClick={() => onImageRemove(index)}>Remove</Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                })
                                            }
                                        </Grid>
                                    </Grid>
                                )}
                            </ImageUploading>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <Button onClick={() => ImageUploadModalToggle()} color='secondary'>Canacel</Button>
                            <Button onClick={() => changeAvatar()} color='primary'>Change</Button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}