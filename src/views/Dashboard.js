import Header from '../components/Header'
import FriendItems from './FriendItems'
import  { useHistory  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { environment } from '../environments/environment';


const Dashboard = () => {
    const session = localStorage.getItem('userDetails');
    const {register, handleSubmit, formState:{errors}, reset } = useForm();
    const [ loading, setSpinner ] = useState(false);
    const [ isSearching, setSearching ] = useState(false);
    const [ isSearchLoading, setSearchLoading ] = useState(false);
    // const [ errorMsg, setErrorMsg] = useState('');
    const [ searchResult, setSearchResult] = useState([]);
    const [ inviteFriend, setinviteFriend] = useState(false);
    const [ newsFeed, setNewsFeed] = useState([]);
    const history = useHistory();

    const activeUser = JSON.parse(session);
    // console.log(activeUser)
    
    if(!session)
    {
        history.push('login');
    }

    const createPost = (data) => {
        setSpinner(true);
        let user = JSON.parse(session);
        // console.log(user)
        axios.post(environment.API_URL + `users/posts/${user._id}/create`, data, {headers: {token:user.token}})
        .then(response => {
            setSpinner(false);
            reset({"content": ""});
            
            // console.log(response)
        }).catch(err => {
            console.log(err.response.data)
        });
    }

    const handleSearch = (e) => {
        if(e.key === 'Enter' && e.target.value !== '')
        {
            setSearching(true);
            setSearchLoading(true);
            // console.log(e.target.value)
            let user = JSON.parse(session);
            // console.log(user)
            
            axios.post(environment.API_URL + 'users/search/friends', {keyword: e.target.value}, {headers: {token:user.token}})
            .then(response => {
                // console.log(response.data)
                setSearchResult(response.data.friends)
                setSearchLoading(false);
            }).catch(err => {
                console.log(err.response)
            });
        }
    }

    const handleKeyup = (e) => {
        if(e.target.value === '')
        {
            setSearching(false)
        }
    }

    const addFriend = (e, index) => {
        
        let data = e;
        let user = JSON.parse(session);
        
        axios.post(environment.API_URL + 'users/friends/send/invite', data, {headers: {token: user.token}})
        .then(response => {
            searchResult[index].status = "pending";
            setinviteFriend(response.data.msg);
        }).catch(err => {
            console.log(err.response)
        })
    }

    useEffect(() => {
        getNewsFeed();
    }, []);

    const getNewsFeed = () => {
        let user = JSON.parse(session);

        axios.get(environment.API_URL + 'users/news/feed', {headers: {token: user.token}})
        .then(response => {
            // console.log(response.data)
            setNewsFeed(response.data)
        }).catch(err => {
            console.log(err.response.data)
        })
    }

    return (
        <div>
            <Header/>
            <section className="container">
                <div className="row">
                    <div className="col-2">
                        <section className="user-profile">
                            <div className="avatar text-center">
                                <img src="../assets/img/avatar.png" alt="Avatar" />
                            </div>
                            <h4 className="text-center">{(activeUser.firstName +" "+ activeUser.lastName).toUpperCase()}</h4>
                            <p className="text-justify">
                                {activeUser?.aboutMe}
                            </p>
                        </section>
                        <div className="d-grid gap-2">
                            <button className="btn btn-secondary btn-block mt-2" type="button">My Posts</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <h3>News Feed</h3>
                        <hr/>
                        <section className="post-wall">
                            <form onSubmit={handleSubmit(createPost)}>
                                <textarea { ...register("content", {required: true}) } className="form-control" autoComplete="false" name="content" id="post" rows="7" placeholder="Whats on your mind?"></textarea>
                                <button type="submit" className="btn btn-secondary btn-sm mt-2 pull-right">
                                    {loading && 
                                        <span>Please wait...</span>
                                    }
                                    {!loading &&
                                        <span>Post</span>
                                    }
                                </button>
                            </form>
                        </section>
                        <section className="news-feed">
                            {newsFeed.map((row, index) => {
                                return (
                                    <div key={row._id} className="news-feed-items mb-3">
                                        <div className="row mb-1">
                                            <div className="col d-flex justify-content-center">
                                                <section>
                                                    <img className="news-feed-avatar" src="../assets/img/avatar.png" alt="Avatar" />
                                                    <p><small>John Doe</small></p>
                                                </section>
                                            </div>
                                            <div className="col-10">
                                                <p className="news-feed-text">{row.content}</p>
                                            </div>
                                        </div>
                                        <p className="news-feed-likes">{`${row.likes} like${row.likes > 1 ? "s" : ""}`}</p>
                                    </div>
                                )
                            })

                            }
                        </section>
                    </div>
                    <div className="col-2 border-start">
                        <h3>Friends Lists</h3>
                        <hr/>
                        <div className="mb-3">
                            <input className="form-control" id="exampleDataList" placeholder="Type to search friend" onKeyPress={(e) => {handleSearch(e)}} onKeyUp={(e) => {handleKeyup(e)}} />
                        </div>
                        {!isSearching &&
                            <FriendItems/>
                        }
                        {isSearching &&
                            <section className="search-result">
                                <ul className="list-group list-group-flush">
                                    {isSearchLoading &&
                                        <li key={"isSearchLoading"} className="list-group-item px-1 d-flex align-items-center justify-content-between">Seearching...</li>
                                    }
                                    {inviteFriend &&
                                        <li key={"alertSearch"} className="list-group-item px-1">
                                            <div className="alert alert-success" role="alert">
                                                {inviteFriend}
                                            </div>
                                        </li>
                                    }
                                    
                                    {searchResult.map((data, index) => {
                                        return (
                                            <li key={index} className="list-group-item px-1 d-flex align-items-center justify-content-between">
                                                <span>
                                                    <i className="bi bi-circle"></i> {data.firstName + " " + data.lastName}
                                                </span>
                                                <button type="button" value={JSON.stringify(data)} onClick={(e) => {addFriend(data, index)}} className={`btn ${data.status === null ? "btn-success" : data.status === "pending" ? "btn-warning" : "btn-info"} btn-sm pull-right`} disabled={`${data.status != null ? "disabled" : ""}`}>
                                                    {data.status === null || data.status === "pending"
                                                        ? <i className="bi bi-person-plus"></i>
                                                        : <i class="bi bi-person-check"></i>
                                                    }
                                                    
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </section>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
