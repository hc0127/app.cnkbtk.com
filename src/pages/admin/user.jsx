
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import DataTable from "react-data-table-component";
import { NavLink } from 'react-router-dom';

import axios from '../../services/axios'

export default function AdminUser(props) {
  useEffect(() => {
  }, []);

  let posts = [{
    tid: 1,
    name:'新月',
    email:'1003187439@qq.com',
    email_verify_status:true,
    status:1,
    type:2,
    ip:'125.73.199.128',
  },{
    tid: 2,
    name:'新月',
    email:'1002387439@qq.com',
    email_verify_status:false,
    status:2,
    type:1,
    ip:'125.76.199.148',
  }];

  let postColumns = [
    {
      name: "用户身份",
      center: true,
      wrap: true,
      sortable: true,
      selector: (row) => row.tid,
    },
    {
      name: "用户名称",
      center: true,
      wrap: true,
      sortable: true,
      cell: (d) => <NavLink to={'/profile/' + d.tid}>{d.name}</NavLink>,
    },
    {
      name: "电子邮件",
      center: true,
      wrap: true,
      selector: (row) => row.email,
    },
    {
        name: "电子邮件验证",
        center: true,
        wrap: true,
        cell: (d) => <Checkbox checked = {d.email_verify_status} />
    },
    {
      name: "IP",
      center: true,
      wrap: true,
      selector: (row) => row.ip,
    },
    {
      name: "用户类型",
      center: true,
      wrap: true,
      cell: (d) => 
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={d.type}
          onChangeStatus={(e)=>changeStatus(d,e)}
          label="Age"
        >
          <MenuItem value='1'>Approved</MenuItem>
          <MenuItem value='2'>Banned</MenuItem>
        </Select>
      </FormControl>,
    },
    {
      name: "用户状态",
      center: true,
      wrap: true,
      cell: (d) => 
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={d.type}
          onChangeStatus={(e)=>changeStatus(d,e)}
          label="Age"
        >
          <MenuItem value='1'>User</MenuItem>
          <MenuItem value='2'>Creator</MenuItem>
          <MenuItem value='3'>Admin</MenuItem>
        </Select>
      </FormControl>,
    },
  ];

  const changeStatus = (d,e) =>{
    console.log(d,e);
  }

  return (
    <Grid container alignItems="center" justifyContent="center" mt={2}>
      <Grid item container md={12} spacing={2}>
        <Grid item md={12}>
          <Typography>User Manage</Typography>
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
  );
}