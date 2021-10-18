import Header from '../components/Header'
import FriendItems from './FriendItems'

const MyPosts = () => {
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
                            <h4 className="text-center">John Doe</h4>
                            <p className="text-justify">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eligendi ut voluptatibus minima beatae impedit dolor ad sequi, fuga eius.
                            </p>
                        </section>
                        <div className="d-grid gap-2">
                            <button className="btn btn-secondary btn-block mt-2" type="button">My Posts</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <h3>My Posts</h3>
                        <hr/>
                        <section className="news-feed mt-1">
                            <div className="news-feed-items">
                                <div className="pull-left">
                                    <img className="news-feed-avatar" src="../assets/img/avatar.png" alt="Avatar" />
                                    <p><small>John Doe</small></p>
                                </div>                            
                                <p className="news-feed-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aut dolor, sed repellat aliquid accusamus sequi qui autem quia sint ut culpa distinctio nisi! Similique commodi in officiis quam fugit? mus sequi qui autem quia sint ut culpa distinctio nisi! Similique commodi in officiis quam fugit?</p>
                                <p className="news-feed-likes">
                                    <span style={{marginRight: '7px'}}>10 Likes</span>
                                    <a className="btn btn-danger btn-sm mt-1"><i className="bi bi-trash"></i></a>
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="col-2 border-start">
                        <h3>Friends Lists</h3>
                        <hr/>
                        <FriendItems/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyPosts
