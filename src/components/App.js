import React, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header";
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video);

  const [commentsView, setCommentsView] = useState(false);

  function handleCommentsView() {
    setCommentsView((commentsView) => !commentsView)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Header handleCommentsView={handleCommentsView}/>
      {commentsView ? null : <Comments />}
    </div>
  );
}

export default App;
