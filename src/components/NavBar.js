import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <nav>
            <ul>
                <Link to="/">
                    <li>Login</li>
                </Link>
                <Link to="/">
                    <li>Registration</li>
                </Link>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/">
                    <li>Logout</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;