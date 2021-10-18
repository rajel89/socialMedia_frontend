import React, { useState } from 'react';

function Registration() {

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Registration = info => {
        console.log(info);
    }

    return (
        <div>
            <div>
                <center>
                    <h3>Create Your Username and Password</h3>
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
                            <label>Tell Us a Little About Yourself: </label>
                            <input type="text" name="about" onChange={useState()} />
                        </div>
                        <div className="col-md-4">
                            <label>Upload a Photo</label>
                            <input type="file" name="image" onChange={useState()} />
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;