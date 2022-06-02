import React from "react";
import "./SidebarRow.css"
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import {ExpandMoreOutlined} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarRow 
        src="andy.jpeg"
        title="Andy Adzeoda"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"/> 

      <SidebarRow Icon={EmojiFlagIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="People"/>
      <SidebarRow Icon={ChatIcon} title="Chat"/>
      <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="VideoLibrary"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace"/>

    </div>
  );
}

export default Sidebar;