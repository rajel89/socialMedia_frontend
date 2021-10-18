import Header from '../components/Header'

const CreateProfile = () => {
    return (
        <div>
            <Header/>
            <section className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <h4>Create Profile</h4>
                        <div className="card">
                            <img src="../assets/img/avatar.png" className="mt-2 rounded-circle mx-auto d-block" alt="Avatar" />
                            <div className="card-body">
                                <div className="d-grid col-6 gap-2 mx-auto">
                                    <button className="btn btn-light btn-sm">Upload Picture</button>
                                </div>
                                <h5 className="card-title mt-4">About Me</h5>
                                <textarea className="form-control" name="aboutMe" id="aboutMe" rows="5" placeholder="Tell something..."></textarea>
                                <div className="d-grid gap-2 mt-2">
                                    <button className="btn btn-secondary btn-sm">Save Profile</button>
                                </div>
                            </div>
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

export default CreateProfile
