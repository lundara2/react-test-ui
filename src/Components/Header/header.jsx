import Logo from '../../Assets/images/logo.png'
import User from '../../Assets/images/user.png'

import './header.scss'

export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="content-header">

                    <div className="header__brand flex-fill">
                        <a href="#">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>

                    <div className="header__search">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Find..." />
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div className="header__upload">
                        <button className="btn btn-primary">
                            <i className="fas fa-arrow-up mr-2"></i>Upload
                        </button>
                    </div>

                    <div className="header__user">
                        <div className="d-flex">
                            <div className="pr-2">
                                <img src={User} alt="user" />
                            </div>
                            <div className="position-relative pr-2">
                                <span className="badge rounded-pill bg-primary">
                                    43
                                </span>
                                <h5 className="mb-0">
                                    Waseem
                                </h5>
                                <span>Arshad</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header__responsive">
                    <div className="search-responsive">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Find..." />
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div className="upload-responsive">
                        <button className="btn btn-primary">
                            <i className="fas fa-arrow-up mr-2"></i>Upload
                        </button>
                    </div>
                </div>
            </div>

            <nav className="wrap-menu">
                <ul>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Documents</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Communities</a></li>
                    <li><a href="#">Favorites</a></li>
                    <li><a href="#">Channels</a></li>
                </ul>
            </nav>

        </div>
    );
}