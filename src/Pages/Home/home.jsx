import { useState, useEffect } from 'react';

// Images
import Activity from '../../Assets/images/activity.png';
import CloseHover from '../../Assets/images/close-hover.png';
import MasonryChildPrimary from '../../Assets/images/masonry-child-primary.png';
import MasonryParent from '../../Assets/images/masonry-parent.png';
import ArrowUp from '../../Assets/icon/img-arrow-up.png';
import AddHover from '../../Assets/images/add-hover.png';

// Services
import homeServices from './home.services';

// style
import './home.scss';

export default function HomePage() {

    const [videos, setVideos] = useState([]);
    const [activity, setActivity] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [chanells, setChanells] = useState([]);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        homeServices.getData().then(response => {
            setActivity(response.activity)
            setVideos(response.videos)
            setPeoples(response.people)
            setChanells(response.chanells)
            setDocuments(response.documents)
        })
    }, [])

    return (
        <main>
            <div className="home">

                <div className="row">

                    {/* ====== Start Main Content ===== */}
                    <div className="col-lg-8">

                        {/* ====== Start Post Video ====== */}
                        <div className="home__post">

                            {/* ====== Title Post Video ====== */}
                            <div className="row">
                                <div className="col-md-8 wrap-title">
                                    <h3>Videos</h3>
                                    <a href="#">Browse All Videos</a>
                                </div>
                            </div>

                            <div className="home__masonry">

                                {/* ====== List Content Post ====== */}

                                {videos.map(item => {
                                    return (
                                        <div className="item-post" key={item.id}>
                                            <img src={item.image} alt="" className="img-post" />
                                            <div className="view-user">
                                                <div>
                                                    <h3 className="title">{item.title}</h3>

                                                    <h5 className="username">
                                                        {item.user}
                                                    </h5>
                                                </div>
                                                <span className="views">{item.viewer} views</span>
                                            </div>
                                            <a href="#" className="link-post"></a>
                                        </div>
                                    );
                                })}


                                {/* ====== End List Content Post ====== */}

                                {/* ====== Upload Post ====== */}
                                <div className="item-action">
                                    <img src={MasonryChildPrimary} alt="" />
                                    <div className="content">
                                        <img src={ArrowUp} alt="" className="img-upload" />
                                        <div className="desc">
                                            Upload
                                            <div>Your Own Upload</div>
                                        </div>
                                    </div>
                                    <a href="#" className="link"></a>
                                </div>
                                {/*E====== nd Upload Post ====== */}

                            </div>
                        </div>
                        {/*====== nd Start Post Video ====== */}



                        {/* ====== Start Post People ====== */}
                        <div className="home__post">

                            {/* ====== Title Post People ====== */}
                            <div className="row">
                                <div className="col-md-8 wrap-title">
                                    <h3>People</h3>
                                    <a href="#">View All</a>
                                </div>
                            </div>

                            <div className="home__masonry">

                                {/* ====== List Content People ====== */}
                                {peoples.map((item, index) => {
                                    return (
                                        <div className="item-post" key={item.id}>
                                            <img src={MasonryParent} alt="" className="img-post" />
                                            <div className="view-user">
                                                <div>
                                                    <h3 className="title">
                                                        {index === 0 ? item.user : ''}
                                                    </h3>
                                                    <h5 className="username">
                                                        {
                                                            index !== 0 ? item.user : item.title
                                                        }
                                                    </h5>

                                                </div>
                                                <span className="views">
                                                    {item.viewer ? item.viewer + ' views' : ''}
                                                </span>
                                            </div>
                                            <a href="#" className="link-post"></a>
                                        </div>
                                    );
                                })}





                                {/* ====== End List Content Post ====== */}

                                {/* ====== Upload Post ====== */}
                                <div className="item-action">
                                    <img src={MasonryChildPrimary} alt="" />
                                    <div className="content">
                                        <img src={ArrowUp} alt="" className="img-upload" />
                                        <div className="desc">
                                            How
                                            <div>Your Work</div>
                                        </div>
                                    </div>
                                    <a href="#" className="link"></a>
                                </div>
                                {/*====== End Upload Post ====== */}

                            </div>
                        </div>
                        {/*====== End Start Post People ====== */}

                        {/* ====== Start Post Documents ====== */}
                        <div className="home__post">

                            {/* ====== Title Post Documents ====== */}
                            <div className="row">
                                <div className="col-md-8 wrap-title">
                                    <h3>Documents</h3>
                                    <a href="#">Browse All Documents</a>
                                </div>
                            </div>

                            <div className="home__masonry">

                                {/* ====== List Content Documents ====== */}
                                {documents.map((item, index) => {
                                    return (
                                        <div className="item-post" key={item.id}>
                                            <img src={item.image} alt="" className="img-post" />

                                            <div className={`view-user ${index !== 0 ? 'd-block' : ''}`}>
                                                <div>

                                                    {index === 0 ?

                                                        <h3 className="title">
                                                            {item.title}
                                                        </h3>

                                                        :
                                                        <h4 className="sub-title">
                                                            {item.title}
                                                        </h4>
                                                    }

                                                    <h5 className="username">
                                                        {
                                                            item.user
                                                        }
                                                    </h5>

                                                </div>
                                                <span className="views m-0">
                                                    {item.viewer} views
                                                </span>
                                            </div>
                                            <a href="#" className="link-post"></a>
                                        </div>
                                    );
                                })}

                                {/* ====== End List Content Post ====== */}

                                {/* ====== Upload Post ====== */}
                                <div className="item-action">
                                    <img src={MasonryChildPrimary} alt="" />
                                    <div className="content">
                                        <img src={ArrowUp} alt="" className="img-upload" />
                                        <div className="desc">
                                            Share
                                            <div>Your Document</div>
                                        </div>
                                    </div>
                                    <a href="#" className="link"></a>
                                </div>
                                {/*E====== nd Upload Post ====== */}

                            </div>
                        </div>
                        {/*====== End Start Post Documents ====== */}

                    </div>

                    {/* ====== Start Sidebar ====== */}
                    <div className="col-lg-4">

                        {/* ====== Start Widget ====== */}
                        <div className="home__widget">
                            <div className="widget-title">
                                <div className="flex-fill">
                                    <h3 className="title">Activity</h3>
                                </div>
                                <div>
                                    <a href="#">View timeline</a>
                                    /
                                    <a href="#">Filter Activites</a>
                                </div>
                            </div>

                            {activity.map(item => {
                                return (
                                    <div className="post-activity" key={item.id}>
                                        <div className="wrap-image">
                                            <img src={Activity} alt="activity image" />
                                        </div>
                                        <div className="content flex-fill">
                                            <h5 className="name">
                                                {item.user}
                                                <small className="pl-1">{item.activity}</small>
                                            </h5>
                                            <p className="mb-0">
                                                {item.description.substring(0, 37)}
                                            </p>
                                            <span>
                                                <i className="fa-comment fas pr-1"></i>
                                                4 months ago
                                            </span>
                                        </div>
                                        <a href="#" className="post-link">
                                        </a>
                                        <a href="#" className="post-close">
                                            <img src={CloseHover} alt="" />
                                        </a>
                                    </div>
                                );
                            })}

                        </div>
                        {/* ====== End Widget ====== */}


                        {/* ====== Start Widget ====== */}
                        <div className="home__widget">
                            <div className="widget-title">
                                <div className="flex-fill">
                                    <h3 className="title">Channels</h3>
                                </div>
                                <div>
                                    <a href="#">Browse all channels</a>
                                </div>
                            </div>

                            <div className="row row-channel">
                                {chanells.map(item => {
                                    return (
                                        <div className="col-6" key={item.id}>
                                            <a href="#" className="item-channel">
                                                <img src={item.image} alt="" />
                                                <span>{item.channel}</span>

                                                <div href="#" className="add-channel">
                                                    <img src={AddHover} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    );
                                })}

                            </div>

                        </div>
                        {/* ====== End Widget ====== */}

                    </div>
                    {/* ====== End Sidebar ====== */}
                </div>
            </div>
        </main>


    );
}