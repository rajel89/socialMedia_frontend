import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';
import CreateProfile from '../views/CreateProfile';
import Dashboard from '../views/Dashboard';
import FriendList from '../views/FriendList';
import FriendRequest from '../views/FriendRequest';
import Login from '../views/Login';
import MyPosts from '../views/MyPosts';
import ViewProfile from '../views/ViewProfile';

const Router = () => {
    return (
        <AppRouter>
            <Switch>
                <Route exact path="/">
                    <Dashboard/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/create-profile">
                    <CreateProfile/>
                </Route>
                <Route exact path="/friend-lists">
                    <FriendList/>
                </Route>
                <Route exact path="/friend-requests">
                    <FriendRequest/>
                </Route>
                <Route exact path="/my-posts">
                    <MyPosts/>
                </Route>
                <Route exact path="/view-profile">
                    <ViewProfile/>
                </Route>
            </Switch>
        </AppRouter>
    )
}

export default Router