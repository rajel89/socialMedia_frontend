import Header from '../components/Header'

const ViewProfile = () => {
    return (
        <div>
            <Header/>
            <section className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <h4>View Profile</h4>
                        <div className="card">
                            <img src="../assets/img/avatar.png" className="mt-2 rounded-circle mx-auto d-block" alt="Avatar" />
                            <div className="card-body">
                                <p className="text-center">John Smith</p>
                                <h5 className="card-title mt-4">About </h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic, reprehenderit minima quibusdam officiis, placeat minus eligendi itaque, ducimus aperiam rerum dolore nemo ipsa eos iste! Perferendis dolores sint numquam.</p>
                                <div className="d-grid gap-2 mt-2">
                                    <button className="btn btn-secondary btn-sm">Send friend request</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ViewProfile
