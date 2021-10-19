import React, { useRef } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "./Tweet.css";
import { Button, IconButton } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TweetIcon from "./TweetIcon";
function TweetForm() {
  const tweetRef = useRef();
  return (
    <div className="tweet-form">
      <div className="profile-img">
        <IconButton>
          <PermIdentityIcon />
        </IconButton>
      </div>
      <form>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="What's Happening?"
          style={{
            width: "100%",
            outline: "none",
            border: "none",
            fontSize: "1.2rem",
            fontWeight: "200",
            padding: "5px",
            resize: "none",
          }}
          ref={tweetRef}
        />

        <div className="final">
          <div className="tweet-icons">
            <TweetIcon Icon={PhotoIcon} IconName="Media" />
            <TweetIcon Icon={GifIcon} IconName="Gif" />
            <TweetIcon Icon={PollIcon} IconName="Poll" />
            <TweetIcon Icon={InsertEmoticonIcon} IconName="Emoji" />
            <TweetIcon Icon={CalendarTodayIcon} IconName="Schedule" />
          </div>
          <button className="tweet-button" type="submit">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetForm;
