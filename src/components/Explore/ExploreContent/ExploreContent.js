import React from "react";
import { styled, Box } from "@mui/system";
import SearchBar from "../../Home/SearchBar/SearchBar";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./ExploreContent.css";
import data from "../../../tweet-data.json";
import { IconButton } from "@mui/material";
import {
  Link,
  Switch,
  useRouteMatch,
  Route,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom";
import Card from "../../Home/Center/Cards/Card";
import NewsTab from "../../Home/RightBar/WhatHappening/NewsTab";
const Div = styled("div")`
  width: 80%;
  margin-left: 23%;
  margin-right: 30%;
  height: 100vh;
  border-right: 1px solid lightgrey;
`;
const ExploreTab = styled("div")`
  display: flex;
  justify-content: space-around;
`;

function ExploreContent() {
  let { path, url } = useRouteMatch();
  const location = useLocation();
  return (
    <Div>
      <div className="search-bar-setting">
        <div className="search-bar">
          <SearchBar />
        </div>
        <IconButton sx={{ width: "40px", height: "40px", padding: "2px" }}>
          <SettingsOutlinedIcon fontSize="medium" />
        </IconButton>
      </div>
      <ExploreTab className="exp-tab">
        <Link
          to={`${url}`}
          className={`exp-link ${
            location.pathname === "/explore" && "exp-link-click"
          } `}
        >
          For You
        </Link>
        <Link
          to={`${url}/covid-19`}
          className={`exp-link ${
            location.pathname === `${url}/covid-19` && "exp-link-click"
          } `}
        >
          COVID-19
        </Link>
        <Link
          to={`${url}/trending`}
          className={`exp-link ${
            location.pathname === `${url}/trending` && "exp-link-click"
          } `}
        >
          Trending
        </Link>
        <Link
          to={`${url}/news`}
          className={`exp-link ${
            location.pathname === `${url}/news` && "exp-link-click"
          } `}
        >
          News
        </Link>
        <Link
          to={`${url}/sports`}
          className={`exp-link ${
            location.pathname === `${url}/sports` && "exp-link-click"
          } `}
        >
          Sports
        </Link>
        <Link
          to={`${url}/entertainment`}
          className={`exp-link ${
            location.pathname === `${url}/entertainment` && "exp-link-click"
          } `}
        >
          Entertainment
        </Link>
      </ExploreTab>
      <Switch>
        <Route exact path={path}>
          <NewsTab
            vTag="#StockMarket"
            trending="Business & finance . Technolgy"
            nTweets="15k tweets"
          />
          <NewsTab
            vTag="#Reject_Zomato"
            trending="Trending . India"
            nTweets="19k tweets"
          />
          <NewsTab
            vTag="#MobPsycho"
            trending="Trending . Technolgy"
            nTweets="20k tweets"
          />
          <NewsTab
            vTag="#IITIAN"
            trending="Trending in India"
            nTweets="1.8k tweets"
          />
          <NewsTab
            vTag="Saint Row"
            trending="Video games . Trending"
            nTweets="15k tweets"
          />
          {data.map((val, i) => {
            return i > 50 && i < 100 && <Card key={i} data={val} />;
          })}
        </Route>
        <Route path={`${path}/:expoInfo`}>
          <ExploreByTabs />
        </Route>
      </Switch>
    </Div>
  );
}

export default ExploreContent;

function ExploreByTabs() {
  let { expoInfo } = useParams();
  return (
    <div className="exp-h">
      <h1>{expoInfo.toUpperCase()}</h1>
      <NewsTab
        vTag="#StockMarket"
        trending="Trending . Technolgy"
        nTweets="15k tweets"
      />
      <NewsTab
        vTag="#IITIAN"
        trending="Trending in India"
        nTweets="1.8k tweets"
      />
      <NewsTab
        vTag="Saint Row"
        trending="Video games . Trending"
        nTweets="15k tweets"
      />
      {data.map((val, i) => {
        return i > 100 && i < 150 && <Card key={i} data={val} />;
      })}
    </div>
  );
}
