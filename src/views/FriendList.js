import Header from '../components/Header'

const FriendList = () => {
    return (
        <div>
             <Header/>
             <section className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h4>Friend Lists</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-2 px-0 text-center">
                                            <img className="rounded-circle" src="../assets/img/avatar.png" style={{width: "35px"}} alt="Avatar" />
                                        </div>
                                        <div className="col-6">
                                            <p className="my-0">John Doe</p>
                                        </div>
                                        <div className="col-4">
                                            <button className="btn btn-light btn-sm">Remove</button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-2 px-0 text-center">
                                            <img className="rounded-circle" src="../assets/img/avatar.png" style={{width: "35px"}} alt="Avatar" />
                                        </div>
                                        <div className="col-6">
                                            <p className="my-0">John Smith</p>
                                        </div>
                                        <div className="col-4">
                                            <button className="btn btn-light btn-sm">Remove</button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-2 px-0 text-center">
                                            <img className="rounded-circle" src="../assets/img/avatar.png" style={{width: "35px"}} alt="Avatar" />
                                        </div>
                                        <div className="col-6">
                                            <p className="my-0">Claire Davis</p>
                                        </div>
                                        <div className="col-4">
                                            <button className="btn btn-light btn-sm">Remove</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                    <p></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FriendList
