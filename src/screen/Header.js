import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import { Avatar } from "@mui/material";
import { IconButton } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/png;base64,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"
          alt=""
        />

        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header_center">
        <div
          className="header_options
        header__options--active"
        >
          <HomeIcon fontsize="large" />
        </div>

        <div className="header_options">
          <FlagIcon fontsize="large" />
        </div>

        <div className="header_options">
          <SubscriptionsOutlinedIcon fontsize="large" />
        </div>

        <div className="header_options">
          <StorefrontOutlinedIcon fontsize="large" />
        </div>

        <div className="header_options">
          <SupervisedUserCircleIcon fontsize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header_info">
          <Avatar />
          <h4>adzeoda</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;