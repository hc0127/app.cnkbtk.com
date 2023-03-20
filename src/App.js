import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./layout/navbar";
import Register from "./pages/register";
import Confirm from "./pages/confirm";
import Profile from "./pages/profile";
import Forum from "./pages/forum";
import ForumList from "./pages/forumlist";
import ForumView from "./pages/forumview";

import AdminCategory from "./pages/admin/category";
import AdminTag from "./pages/admin/tag";
import AdminUser from "./pages/admin/user";
import AdminPost from "./pages/admin/post";

import { createBrowserHistory } from "history";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue, yellow, green,grey,red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
    secondary: {
      light: grey[100],
      main: grey[300],
      dark: grey[500],
    },
    blue:{
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    green: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
    white:{
      main:'#ffffff',
    },
    dark:{
      main:'#000000',
    },
    yellow:{
      main:yellow[500]
    }
  },
  breakpoints: {
    values: {
      sm: 768,
      md: 1024,
      xl: 1200,
      lg: 1440,
    },
  },
});

function App() {
  const history = createBrowserHistory();

  return (
    <ThemeProvider theme={theme}>
      <Routes history={history}>
        <Route element={<Navbar />}>
          <Route path="/register" element={<Register />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/" element={<Forum />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/:gid" element={<Forum />} />
          <Route path="/forum/list/:fid" element={<ForumList />} />
          <Route path="/forum/view/:tid" element={<ForumView />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Profile />} />
          <Route path="/admin/user" element={<AdminUser />} />
          <Route path="/admin/tag" element={<AdminTag />} />
          <Route path="/admin/category" element={<AdminCategory />} />
          <Route path="/admin/post" element={<AdminPost />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
