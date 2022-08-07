import React from 'react'
import RecentPosts from '../../components/RecentPosts'

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-md-9">
                        Contact
                    </div>
                    <div className="col-md-3">
                        <RecentPosts />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact