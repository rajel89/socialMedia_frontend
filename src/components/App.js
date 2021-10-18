import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import jwtDecode from 'jwt-decode';
// import Registration from './Registration'
// import Posts from './Posts'
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

const App = (props) => {
    const [user, setUser] = useState({});
    const [posts, setPostList] = useState([]);
    // const [friendsList, setCurrentFriends] = useState('');

    //register
    //login
    //upload photo
    //send friend request
    //accept or deny request
    //populate list of friends
    //populate pending friend request
    //view posts from friends
    //create post
    //delete post
    //like a post
    //** Friends online status
    //** Remove friends

    const registerUser = async () => {
        await axios.post(`http://localhost:5000/api/users`, {
            name: "Sample",
            email: "sample@hello.com",
            password: "samplePassWord",
        })
        .then((response) => {
            setUser(response);
            console.log(user)
        })
        .catch(error => console.log(error));
    };

    const loginUser = async () => {
        await axios.post(`http://localhost:5000/api/users`, {
            email: "sample@hello.com",
            password: "samplePassWord",
        })
        .then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data)
        })
        .catch(error => console.log(error));
    };

    const logoutUser = async () => {
        console.log(localStorage.getItem("token"))
        localStorage.removeItem("token")
        console.log(localStorage.getItem("token"))
    }

    useEffect(() => {
        const jwt = localStorage.getItem('token');
        try {
            const user = jwtDecode(jwt);
            this.setState({user});
        } catch {}
    })

    const getPosts = (pid) => {
        axios.get(`http://localhost:5000/api/users/posts`)
        .then((response) => (response.data.items))
        .catch((error) => console.log(error))
    }

    const postPost = () => {
        axios.post('http://localhost:5000/api/users/posts', {
            name: "Anonymous",
            text: "This is a post by Anonymous Mark",
            likes: 0,
            datePosted: Date.now()
        })
        .then((response) => setPostList(response.data))
        .catch((error) => console.log(error)) 
    }
    
    useEffect(() => {
       axios.get('http://localhost:5000/api/users')
            .then((response) => setPostList(response.data))
            .catch((error) => console.log(error))
    },[postPost]); 

    return (
        <div>
            <h1>Social Media App</h1>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => registerUser()}>Register
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => loginUser()}>Log In
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => logoutUser()}>Log Out
                    </button>
                </div>
        </div>
   )
}

export default App;

//<Posts posts={posts} postReply = {postReply} getUser={getUser}/>
{/* <div>
<NavBar />
<Posts posts={posts}/>
<Switch>
    <Route path="/login" exact component={Login}/>
    <Route path="/registration" exact component={Registration}/>
    <Route path="/" exact component={Home}/>
    <Redirect to='/not-found'/>
    </Switch>
</div> */}

//<div>
    {/* <Posts posts={posts}/> */}
//</div>