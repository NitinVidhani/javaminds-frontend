import React from 'react'
import RecentPosts from '../../components/RecentPosts'

const About = () => {
    return (
        <>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-md-9">
                        About
                    </div>
                    <div className="col-md-3">
                        <RecentPosts />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About