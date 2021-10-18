import { Link } from "react-router-dom"
import  { useHistory  } from 'react-router-dom';
import axios from 'axios';
import { environment } from '../environments/environment';


const Header = () => {
    const history = useHistory();
    const session = localStorage.getItem('userDetails');

    const logout = (e) => {
        let user = JSON.parse(session);

        axios.post(environment.API_URL + 'auth/logout', {}, {headers: {token: user.token}})
        .then(response => {
            // console.log(response.data)
            if(response.status === 200)
            {
                localStorage.removeItem('userDetails');
                history.push('login');
            }
        })
        
    }

    const setHome = (e) => {
        history.push('/');
    }

    return (
        <>
            <header className="mt-2">
                <h4 className="pull-left" style={{cursor: 'pointer'}} onClick={(e) => {setHome(e)}}>Notebook</h4>
                <ul className="nav navbar">
                    <li><Link to="/view-profile">My Profile</Link></li>
                    <li><Link to="/friend-requests">Friend Request</Link></li>
                    <li><button className="btn btn-secondary btn-outline btn-sm" onClick={(e) => {logout(e)}}>Logout</button></li>
                </ul>
            </header>
            <hr/>
        </>
    )
}

export default Header
