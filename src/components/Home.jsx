import React from 'react'
import Feed from './Feed'

const Home = ({ posts, fetchError, isLoading }) => {
    return (
        <main className='mt-3 overflow-y-auto' style={{maxHeight: '80vh'}}>
            {isLoading ? <div className="d-flex justify-content-center mt-5 pt-5">
                            <div className="spinner-grow me-2" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow me-2" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow me-2" style={{width: '3rem', height: '3rem'}} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> 
                         </div>
                : fetchError ? <p className='fs-5 text-center text-danger'>{fetchError}</p> 
                    : posts.length ? (<Feed posts={posts}/>) 
                        : (<p className='text-center'>No posts to display...</p>)
            }
        </main>
    )
}

export default Home