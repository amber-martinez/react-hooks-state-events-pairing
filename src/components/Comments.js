import React from "react";
import video from "../data/video.js";

function Comments() {

    const commentsLength = video.comments.length;
    // console.log(video)

    const comments = video.comments.map((comment) => {
        return (
            <div>
                <h3><strong>{comment.user}</strong></h3>
                <p>{comment.comment}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>{commentsLength} Comments</h1>
            <p>{comments}</p>
        </div>
    )
}

export default Comments;