import React, { useState } from 'react';

function Login() {

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = info => {
        console.log(info);
    }

    return (
        <div>
            <div>
                <center>
                    <h3>Enter Your Username and Password</h3>
                </center>
                <form onSubmit={useState()}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Username: </label>
                            <input type="text" name="username" onChange={useState()} />
                        </div>
                        <div className="col-md-4">
                            <label>Password: </label>
                            <input type="text" name="password" onChange={useState()} />
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                    <div>
                        <button type="button" onClick="">Don't Have an Account? Create One Here!</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;