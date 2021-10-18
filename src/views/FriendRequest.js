import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { environment } from '../environments/environment';

const FriendRequest = () => {
    const session = localStorage.getItem('userDetails');

    const [friendRequests, setFriendRequest] = useState([]);
    const [msg, setMessage] = useState(false);

    useEffect(() => {
        let user = JSON.parse(session);

        axios.get(environment.API_URL + 'users/friend/requests', {headers: {token: user.token}})
        .then(response => {
            // console.log(response)
            if(response.status == 200)
            {
                // console.log(response.data)
                setFriendRequest(response.data)
            }

            if(response.status == 204)
            {
                setMessage("You have no active friend request.");
            }
        }).catch(err => {
            console.log(err.response.data)
        });
    }, [])

    const acceptFriendRequest = (data, index) => {
        
        let user = JSON.parse(session);

        axios.post(environment.API_URL + 'users/friend/request/accept', data, {headers: {token: user.token}})
        .then(response => {
            // console.log(response)
            if(response.status == 200)
            {
                friendRequests.splice(index, 1);
                setMessage(response.data.msg);
            }
        });
    }


    const declineFriendRequest = (data, index) => {
        let user = JSON.parse(session);

        axios.post(environment.API_URL + 'users/friend/request/decline', data, {headers: {token: user.token}})
        .then(response => {
            // console.log(response)
            if(response.status == 200)
            {
                friendRequests.splice(index, 1);
                setMessage(response.data.msg);
            }
        });
    }

    return (
        <div>
            <Header/>
            <section className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h4>Friend Request</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                {msg &&
                                    <li className="list-group-item">
                                        <div className="row d-flex align-items-center">
                                            <p className="mb-0 text-success"><i className="bi bi-check2-circle"></i> {msg}</p>
                                        </div>
                                    </li>                                
                                }
                                {friendRequests.map((data, index) => {
                                    return (
                                        <li key={data._id} className="list-group-item">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-1 px-0 text-center">
                                                    <img className="rounded-circle" src={`${data.details?.avatar ? data.details?.avatar : "../assets/img/avatar.png"}`} style={{width: "35px"}} alt="Avatar" />
                                                </div>
                                                <div className="col-7">
                                                    <p className="my-0">{(data.details.firstName + " " + data.details.lastName).toUpperCase()}</p>
                                                </div>
                                                <div className="col-3">
                                                    <button className="btn btn-success btn-sm" onClick={() => {acceptFriendRequest(data, index)}}>Accept</button> 
                                                    <button className="btn btn-danger btn-sm" style={{marginLeft: '5px'}} onClick={() => {declineFriendRequest(data, index)}}>Decline</button>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                    <p></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FriendRequest
