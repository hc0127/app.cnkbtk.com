import React, { useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Divider,
  Switch,
  List,
  ListItem,
  ListItemIcon,
  Chip,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Forum(props) {
  const [credit, selectCredit] = useState(1000);
  const [monthly, setMonthly] = useState(true);

  useEffect(() => {
  }, []);

  const Gallery = (props) => {
    return (
      <Paper className='text-center'>
        <img alt="gallery" src={'images/banner' + props.number + '.jpg'} width={"100%"} />
      </Paper>
    );
  }
  const galleries = [1, 2];

  return (
    <>
      <Grid container>
        <Grid item container direction={"row"} mt={2} spacing={2}>
          <Grid item sm={6} md={6} xl={6} lg={6}>
            <Carousel>
              {
                galleries.map((gallery, index) => <Gallery key={index} number={gallery} />)
              }
            </Carousel>
          </Grid>
          <Grid item sm={6} md={6} xl={6} lg={6}>
            <img alt="gallery" src='images/104521jm1mstocwoitcwis.png' width={"100%"} />
          </Grid>
          <Grid item sm={12} md={12} xl={12} lg={12} mt={3}>
            <Paper className="p-3" elevation={3}>
              <Grid item container direction={"row"} alignItems="center" justifyContent="space-between">
                <Grid item container direciton={"row"} sm={6} md={6} xl={6} lg={6} spacing={3}>
                  <Grid item container direciton={"row"} sm={3} md={3} xl={3} lg={3} alignItems="center" spacing={2}>
                    <Grid item>
                      <img alt="today" src='images/bbs1.png' />
                    </Grid>
                    <Grid item>
                      <Typography>今日:</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direciton={"row"} sm={3} md={3} xl={3} lg={3} alignItems="center" spacing={2}>
                    <Grid item>
                      <img alt="yesterday" src='images/bbs2.png' />
                    </Grid>
                    <Grid item>
                      <Typography>昨日:</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direciton={"row"} sm={3} md={3} xl={3} lg={3} alignItems="center" spacing={2}>
                    <Grid item>
                      <img alt="posts" src='images/bbs3.png' />
                    </Grid>
                    <Grid item>
                      <Typography>帖子:</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direciton={"row"} sm={3} md={3} xl={3} lg={3} alignItems="center" spacing={2}>
                    <Grid item>
                      <img alt="members" src='images/bbs4.png' />
                    </Grid>
                    <Grid item>
                      <Typography>会员:</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>欢迎新会员:</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item container sm={12} md={12} xl={12} lg={12} mt={3} alignItems="flex-start" justifyContent="flex-start">
            <Grid item container sm={9} md={9} xl={9} lg={9} spacing={2} direciton="column">
              <Grid item sm={12} md={12} xl={12} lg={12}>
                <NavLink className="to_category_group" to='/forum?gid=1'>{"notice board"}</NavLink >
              </Grid>
              <Grid item sm={4} md={4} xl={4} lg={4}>
                <Card>
                  <CardContent>
                    <Grid item container direction={"column"} rowSpacing={2}>
                      <Grid item container direction={"row"} alignItems="center" justifyContent="space-between" spacing={2}>
                        <Grid item sm={4} md={4} xl={4} lg={4}>
                          <img alt="document" src='images/document.png' width="50%" />
                        </Grid>
                        <Grid item container direction={"column"} sm={8} md={8} xl={8} lg={8}>
                          <Grid item>
                            <NavLink className="to_category" to='/forum/list/1'>{"Member Notice"}</NavLink >
                          </Grid>
                          <Grid item container direction={"row"} columnSpacing={2}>
                            <Grid item>
                              <Typography>Theme:</Typography>
                            </Grid>
                            <Grid item>
                              <Typography>Posts:</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Divider></Divider>
                      <Grid item container direction={"row"} columnSpacing={2}>
                        <Grid item>
                          <NavLink className='to_post' to='/forum/view/254'>{"Member Posting Guide"}</NavLink >
                        </Grid>
                        <Grid item>
                          <Typography>2022-12-31</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={12} md={12} xl={12} lg={12}>
                <NavLink to='/forum?gid=2'>{"notice board"}</NavLink >
              </Grid>
              <Grid item sm={4} md={4} xl={4} lg={4}>
                <Card>
                  <CardContent>
                    <Grid item container direction={"column"} rowSpacing={2}>
                      <Grid item container direction={"row"} alignItems="center" justifyContent="space-between" spacing={2}>
                        <Grid item sm={4} md={4} xl={4} lg={4}>
                          <img alt="document" src='images/document.png' width="50%" />
                        </Grid>
                        <Grid item container direction={"column"} sm={8} md={8} xl={8} lg={8}>
                          <Grid item>
                            Member Notice
                          </Grid>
                          <Grid item container direction={"row"} spacing={2}>
                            <Grid item>
                              <Typography>Theme:</Typography>
                            </Grid>
                            <Grid item>
                              <Typography>Posts:</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Divider></Divider>
                      <Grid item container direction={"row"} spacing={2}>
                        <Grid item>
                          <Typography>Member Posting Guide</Typography>
                        </Grid>
                        <Grid item>
                          <Typography>2022-12-31</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={4} md={4} xl={4} lg={4}>
                <Card>
                  <CardContent>
                    <Grid item container direction={"column"} rowSpacing={2}>
                      <Grid item container direction={"row"} alignItems="center" justifyContent="space-between" spacing={2}>
                        <Grid item sm={4} md={4} xl={4} lg={4}>
                          <img alt="document" src='images/document.png' width="50%" />
                        </Grid>
                        <Grid item container direction={"column"} sm={8} md={8} xl={8} lg={8}>
                          <Grid item>
                            Member Notice
                          </Grid>
                          <Grid item container direction={"row"} spacing={2}>
                            <Grid item>
                              <Typography>Theme:</Typography>
                            </Grid>
                            <Grid item>
                              <Typography>Posts:</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Divider></Divider>
                      <Grid item container direction={"row"} spacing={2}>
                        <Grid item>
                          <Typography>Member Posting Guide</Typography>
                        </Grid>
                        <Grid item>
                          <Typography>2022-12-31</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={12} md={12} xl={12} lg={12}>
                <NavLink to='/forum?gid=3'>{"notice board"}</NavLink >
              </Grid>
              <Grid item sm={4} md={4} xl={4} lg={4}>
                <Card>
                  <CardContent>
                    <Grid item container direction={"column"} rowSpacing={2}>
                      <Grid item container direction={"row"} alignItems="center" justifyContent="space-between" spacing={2}>
                        <Grid item sm={4} md={4} xl={4} lg={4}>
                          <img alt="today" src='images/document.png' width="50%" />
                        </Grid>
                        <Grid item container direction={"column"} sm={8} md={8} xl={8} lg={8}>
                          <Grid item>
                            Member Notice
                          </Grid>
                          <Grid item container direction={"row"} spacing={2}>
                            <Grid item>
                              <Typography>Theme:</Typography>
                            </Grid>
                            <Grid item>
                              <Typography>Posts:</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Divider></Divider>
                      <Grid item container direction={"row"} spacing={2}>
                        <Grid item>
                          <Typography>Member Posting Guide</Typography>
                        </Grid>
                        <Grid item>
                          <Typography>2022-12-31</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item container sm={3} md={3} xl={3} lg={3} direciton="column">
              <Grid item sm={12} md={12} xl={12} lg={12}>
                <Paper elevation={2} className="p-2" sx={{ backgroundColor: 'secondary.main' }}>
                  <Grid item container direction="row" alignItems="center" justifyContent="space-between">
                    <Grid item sm={6} md={6} xl={6} lg={6}>
                      <Typography>帖子排行</Typography>
                    </Grid>
                    <Grid item container direction="row" sm={6} md={6} xl={6} lg={6} alignItems="center" justifyContent="flex-end">
                      <Grid item>
                        <Typography>{monthly ? '每月' : '每周'}</Typography>
                      </Grid>
                      <Grid item >
                        <Switch defaultChecked checked={monthly} onChange={(e) => setMonthly(e.target.checked)} />
                      </Grid>
                    </Grid>
                    <Grid item md={12}>
                      <Divider />
                      <List dense={true}>
                        <ListItem>
                          <ListItemIcon>
                            <Chip label="1" color="primary" size="small" />
                          </ListItemIcon>
                          <NavLink to="/forum?mod=viewthread&tid=269">Single-line item</NavLink>

                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Chip label="2" sx={{backgroundColor:'blue.main',color:'white.main'}} size="small" />
                          </ListItemIcon>
                          <NavLink to="/forum?mod=viewthread&tid=270">Single-line item</NavLink>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Chip label="3" sx={{backgroundColor:'green.main',color:'white.main'}} size="small" />
                          </ListItemIcon>
                          <NavLink to="/forum?mod=viewthread&tid=284">Single-line item</NavLink>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item sm={12} md={12} xl={12} lg={12}>
                <Box sx={{ backgroundColor: 'secondary.main' }} className="mt-3 p-3">
                  <Typography>*请务必备注您的用户名，否则不予充值*</Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={12} xl={12} lg={12}>
                <Typography className="text-center">通用积分</Typography>
              </Grid>
              <Grid item sm={12} md={12} xl={12} lg={12}>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="credit_select">Select Credit</InputLabel>
                  <Select
                    labelId="credit_select"
                    id="credit"
                    value={credit}
                    label="Credit"
                    onChange={(e) => selectCredit(e.target.value)}
                  >
                    <MenuItem value={1000}>1000 通用积分 $20.00 CAD</MenuItem>
                    <MenuItem value={3000}>3000 通用积分 $60.00 CAD</MenuItem>
                    <MenuItem value={5000}>5000 通用积分 $100.00 CAD</MenuItem>
                    <MenuItem value={10000}>10000 通用积分 $200.00 CAD</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={12} md={12} xl={12} lg={12} mt={2} className="text-center">
                <img alt="btn_buynowCC_LG" src='images/btn_buynowCC_LG.gif' />
              </Grid>
              <Grid item sm={12} md={12} xl={12} lg={12}>
                <Box sx={{ backgroundColor: 'secondary.main' }} className="mt-3 p-3">
                  <Typography>其他支付方式请查看公告</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} md={6} xl={6} lg={6}>
            <Paper elevation={2} className="p-3">
              <Typography>在线会员 - 总计 2 人在线 - 最高记录是 54 于 2023-2-8.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}