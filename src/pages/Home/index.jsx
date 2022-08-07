import React from 'react'
import Topbar from '../../components/Topbar'
import AllPartialBlogs from '../../components/AllPartialBlogs'
import RecentPosts from '../../components/RecentPosts'

const Home = () => {
    return (
        <div className='home'>
            <Topbar />
            <div className="container">
                <div className="row gx-5">
                    <div className="col-md-9">
                        <AllPartialBlogs />
                    </div>
                    <div className="col-md-3">
                        <RecentPosts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home