import React, { useState } from "react";
import video from "../data/video.js";

function Header({ handleCommentsView }) {

    const [upvoteCount, setUpvoteCount] = useState(video.upvotes);

    function handleUpvotes() {
        setUpvoteCount(upvoteCount + 1)
    }

    const [downvoteCount, setDownvoteCount] = useState(video.downvotes);

    function handleDownvotes() {
        setDownvoteCount(downvoteCount + 1)
    }

    return (
        <div className="Header">
            <h1>{video.title}</h1>
            <p>{video.views} | Uploaded {video.createdAt}</p>
            <button onClick={handleUpvotes}>{upvoteCount} 👍 </button>
            <button onClick={handleDownvotes}>{downvoteCount} 👎 </button>
            <br/>
            <br/>
            <button onClick={handleCommentsView}>Hide Comments</button>
            <br/>
            <br/>
        </div>
    )
}

export default Header;