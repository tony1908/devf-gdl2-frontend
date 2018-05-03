import React from 'react';
import { Link, Redirect} from 'react-router-dom';

const VideoCards = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Bienvenido a Netflix +!</h1>
            <p><Link to="/">Logout</Link></p>
        </div>
    );
}
export default VideoCards;