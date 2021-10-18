import { useState, useEffect } from 'react';
import axios from 'axios';
import { environment } from '../environments/environment';

const FriendItems = () => {
    const session = localStorage.getItem('userDetails');
    const [friendLists, setFriendLists] = useState([]);
    const [msg, setMessage] = useState(false);

    useEffect(() => {
        let user = JSON.parse(session);

        axios.get(environment.API_URL + 'users/friends/lists', {headers: {token: user.token}})
        .then(response => {
            // console.log(response.data.friends)
            if(response.status == 200)
            {
                setFriendLists(response.data.friends)
            }

            if(response.status == 204)
            {
                setMessage('You have no current friends.')
            }
        }).catch(err => {
            console.log(err.response.data)
        });
    }, [])

    const ucwords = (str) => {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }

    return (
        <>
            <ul className="list-group list-group-flush">
                {msg &&
                    <li key={'noFriendMsg'} className="list-group-item px-1">
                        <p className="mb-0 text-warning"><small><i className="bi bi-check2-circle"></i> {msg}</small></p>
                    </li>
                }
                {friendLists.map(data => {
                    return (
                        <li key={data._id} className="list-group-item px-1">
                            <i className={`bi ${data.isLogin ? "bi-circle-fill text-success" : "bi-circle"}`}></i> {ucwords(data.details.firstName + " " + data.details.lastName)}
                        </li>
                    )
                })}

            </ul>
        </>
    )
}

export default FriendItems
