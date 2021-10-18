import React, {useState} from 'react';
import Mugshot from '../images/Mugshot.jpg';


const Home = ({setProfile}) => {
    const [user, setUser] = useState("")
    
    const handleChange = (event) => {
        setUser(event.target.value);
    }
    // const LikeButton = () => {
    //     const [count, setCount] = useState(0);
    // }
    return (
        <div>
            <h1>SHENANIGANS</h1>
            <form>
                <img src={Mugshot} width="300" height="300" /><br/><br/>
                <text>userName</text>
                <div>
                    <br/>
                    <label>Search for Friends</label><br/>
                    <input type="search" />
                </div>
                <form>
                    <div>
                        <div className="col-md-4">
                            <br/>   
                            <label>Create a Post: </label><br/>
                            <input type="textarea" name="post" onChange={useState()} />
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                    <br/>
                    <label>View Posts Here!</label><br/>
                    <input type="textarea" name="friendsPosts"  onChange={useState()} /><br/>
                    {/* This is a placeholder for the individual posts' like buttons! */}
                    <input type="submit" value="Like" />
                    <input type="submit" value="Dislike" />
                    {/* This is a placeholder for the individual posts' delete buttons! */}
                    <input type="submit" value="Delete" />
                </form>
                {/* This is a placeholder for our friends list! */}
                <div>
                <br/>
                    <label>Friends List</label><br/>
                    <input type="textarea" name="friendsList"  onChange={useState()} />
                </div>
                <div>
                    <br/>
                    <label>Friends Requests</label> <br/>
                    <input type="textarea" name="friendRequestSent"  onChange={useState()} /> <br/>
                    <input type="textarea" name="friendRequestReceived"  onChange={useState()} />
                </div>
                <br/>
                <footer>
                    <button>Logout</button>
                </footer>
            </form>
        </div>
    )
}

                    // <div>
                    //     <button onClick={() => setCount(count + 1)}>
                    //     Like {count}
                    //     </button>
                    //     <button onClick={() => setCount(count - 1)}>
                    //     Dislike {count}
                    //     </button>
                    // </div>

export default Home;
// export default LikeButton;