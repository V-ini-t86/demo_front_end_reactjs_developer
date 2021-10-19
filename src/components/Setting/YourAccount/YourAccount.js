import React from "react";
import SettingPTab from "../SettingPTab/SettingPTab";
import "./YourAccount.css";
function YourAccount() {
  return (
    <div className="your-account">
      <h3>Your Account</h3>
      <p style={{ fontSize: "0.9rem", marginLeft: "20px" }}>
        See information about your account, download an archive of your data, or
        learn about your account deactivation options
      </p>
      <SettingPTab
        name="Account Information"
        info="See your account information like your phone number and email address."
      />
      <SettingPTab
        name="Change Your Password"
        info="Change your password at any time."
      />
      <SettingPTab
        name="Download an archive of your data"
        info="Get insights into the type of information stored for your account."
      />
      <SettingPTab
        name="TweetDeck Teams"
        info="Invite anyone to Tweet from this account using the Teams feature in TweetDeck."
      />
      <SettingPTab
        name="Deactivate your account"
        info="Find out how you can deactivate your account."
      />
    </div>
  );
}

export default YourAccount;
