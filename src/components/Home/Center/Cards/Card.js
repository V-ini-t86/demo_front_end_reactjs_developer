import React from "react";
import TweetIcon from "../../TweetForm/TweetIcon";
import { BsFillReplyFill } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import "./Card.css";
function Card({ data }) {
  return (
    <div className="card">
      <div className="profile-img">
        <img src={data.avatar} alt={data.first_name} />
      </div>
      <div className="header">
        <h4 className="header__name">
          {data.first_name} {data.last_name} . <span>@{data.user_name}</span>
        </h4>
        <p>{data.para}</p>
        <div className="header__img">
          <img src={data.ip_address} alt="img" />
        </div>
        <div className="icons">
          <IconWithNumber
            Icon={BsFillReplyFill}
            IconName="Reply"
            Number={data.reply}
          />
          <IconWithNumber
            Icon={AiOutlineRetweet}
            IconName="Retweet"
            Number={data.retweet}
          />
          <IconWithNumber
            Icon={FavoriteBorderOutlinedIcon}
            IconName="Like"
            Number={data.like}
          />
          <IconWithNumber Icon={IosShareOutlinedIcon} IconName="Share" />
        </div>
      </div>
    </div>
  );
}

export default Card;

function IconWithNumber({ Icon, IconName, Number }) {
  return (
    <div className="icon-num">
      <TweetIcon Icon={Icon} IconName={IconName} />
      <p>{Number}</p>
    </div>
  );
}
