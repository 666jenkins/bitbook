import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import People from "../components/People/People";
import Feed from "../components/Feed/Feed";
import PostPage from "../components/Posts/PostPage";
import Login from "../components/Login/Login";

const Main = () => {
  return (
    <main className="container">
      <Switch>
        <Route path="/posts/:id" component={PostPage} />
        <Route path="/users/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={People} />
        <Route path="/feed" component={Feed} />
        <Route path="/" component={Login} />
      </Switch>
    </main>
  );
};

export default Main;