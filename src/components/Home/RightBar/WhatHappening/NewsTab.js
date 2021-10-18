import React from "react";
import "./NewsTab.css";

function NewsTab({ hashtag, text, vTag, imgSrc, trending, nTweets }) {
  return (
    <div className="news-coll">
      <div className="news-heading">
        {!hashtag ? (
          <h6>
            {trending ? (
              <div>
                <span>{trending}</span>
              </div>
            ) : (
              <div>
                <span>Entertainment</span> . <span>Live</span>
              </div>
            )}
          </h6>
        ) : (
          <div className="news-hashtag">
            <h3>#{hashtag}</h3>
            <h4>{text}</h4>
          </div>
        )}
        <h4>{vTag}</h4>
        <h6>{nTweets}</h6>
      </div>
      {imgSrc && <img src={imgSrc} alt="img" />}
    </div>
  );
}

export default NewsTab;
// https://pbs.twimg.com/semantic_core_img/1449696959120351232/AUtAoeCm?format=png&name=120x120
