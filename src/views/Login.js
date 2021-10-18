import  { useHistory  } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { environment } from "../environments/environment";
import axios from 'axios'

function Login() {
    const days = [];
    const year = [];
    const date = new Date();

    const {register, handleSubmit, formState:{errors} } = useForm();
    const {register:register2, handleSubmit:handleSubmit2, formState:{errors2} } = useForm();
    const [ loading, setSpinner ] = useState(false);
    const [ errorMsg, setErrorMsg] = useState('');
    const history = useHistory();

    for(let x=1; x<=31; x++)
    {
        days.push(<option value={x} key={x}>{x}</option>)
    }

    for(let x=date.getFullYear(); x>=(date.getFullYear() - 90); x-- )
    {
        year.push(<option value={x} key={x}>{x}</option>)
    }

    const loginUser = (data) => {
        
        localStorage.removeItem('isNewAccount');
        setSpinner(true)
        axios.post(environment.API_URL + 'auth/login', data)
        .then(response => {
            setSpinner(false)
            // console.log(response.data)
            localStorage.setItem('userDetails', JSON.stringify(response.data));

            history.push('/')
            
        }).catch(err => {
            setSpinner(false)
            setErrorMsg(err.response.data)
        });
    }

    const createNewAccount = (data) => {
        let newData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            dob: data.dobMonth+"/"+data.dobDay+"/"+data.dobYear,
            password: data.password
        }
        axios.post(environment.API_URL + 'users/create-new-account' ,newData)
        .then(response => {
            if(response.status === 200)
            {
                setSpinner(false);
                localStorage.setItem('userDetails', JSON.stringify(response.data));
                localStorage.setItem('isNewAccount', true);
                history.push('/')
            }
        }).catch(err => {
            console.log(err.response.data)
            setErrorMsg(err.response.data)
        });
    }

    return (
        <div>
            <section className="login-wrapper">
                <h4>Notebok</h4>
                <div className="login-form">
                    <form onSubmit={handleSubmit2(loginUser)} className="row">
                        <div className="col">
                            <input className="form-control" type="text" name="authEmail" { ...register2("email", {required: true}) } id="authEmail" placeholder="Email address"/>
                        </div>
                        <div className="col">
                            <input className="form-control" type="password" name="authPassword" { ...register2("password", {required: true}) } id="authPassword" placeholder="Password"/>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-secondary btn-small">
                                {loading &&
                                    <span>Logging in..</span>
                                }
                                {!loading &&
                                    <span>Login</span>
                                }
                            </button>
                        </div>
                        {errorMsg !== '' &&
                            <p className="mb-0 text-danger">{errorMsg}</p>
                        }
                    </form>
                </div>
            </section>
            <hr />
            <section className="register">
                <div className="register-form">
                    <h3>Create New Account</h3>
                    <form onSubmit={handleSubmit(createNewAccount)} className="row g-3">
                        <div className="col">
                            <input type="text" placeholder="First name" name="firstName" id="firstName" { ...register("firstName", {required: true}) } className="form-control" />
                        </div>
                        <div className="col">
                            <input type="text" placeholder="Last name" name="lastName" id="lastName" { ...register("lastName", {required: true}) } className="form-control" />
                        </div>
                        <div className="col-12">
                            <input type="text" placeholder="Email" name="email" id="email" { ...register("email", {required: true}) } className="form-control" />
                        </div>
                        <div className="col-12">
                            <input type="text" placeholder="New password" name="password" { ...register("password", {required: true}) } id="password" className="form-control" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="birthday" className="form-label">Birthday</label>
                            <div className="row">
                                <div className="col">
                                    <select id="inputStateMonth" className="form-select" { ...register("dobMonth", {required: true}) }>
                                        <option defaultValue="selected" value="">Month</option>
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select id="inputStateDay" className="form-select" { ...register("dobDay", {required: true}) }>
                                        <option defaultValue="selected" value="">Day</option>
                                        {days}
                                    </select>
                                </div>
                                <div className="col">
                                    <select id="inputStateYear" className="form-select" { ...register("dobYear", {required: true}) }>
                                        <option defaultValue="selected" value="">Year</option>
                                        {year}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-secondary btn-small">Create New Account</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Login;