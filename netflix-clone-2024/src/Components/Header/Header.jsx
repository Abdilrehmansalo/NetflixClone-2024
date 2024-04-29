import React from 'react'
import log from "../../assets/Netflix_log.png"
import classes from "./header.module.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div>
      <div className={classes.header_container}>
        {/* header-left */}
        <div className={classes.header_left}>
          <ul>
            <li>
              <a href="#">
                <img src={log} alt="Log" width="100" />
              </a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TVshows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">Mylist</a>
            </li>
            <li>
              <a href="#">Browse by language</a>
            </li>
          </ul>
        </div>
        {/* header_right */}

        <div className={classes.header_right}>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxOutlinedIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header