import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => (
    <div className="container">
        <div className="row bg-light">
            <div className="btn-group btn-group-lg col-md-4 offset-md-4" role="group">
                <button type="button" className="btn btn-outline-primary col-md-6">
                <Link to='/chat'>Chat</Link>
                </button>
                <button type="button" className="btn btn-outline-primary col-md-6">
                <Link to='/settings'>Settings</Link>
                </button>
            </div>
        </div>
    </div>
)

export default Navigation