import React, { useState } from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import routes from "../../../constants/routes";

type Props = {
  children: React.ReactElement<any, any>;
};

const Mobile: React.FC<Props> = ({ children }) => {
  const [value, setValue] = useState<string>(window.location.pathname);

  const isAuthor = true;

  const navProps = (route: string) => {
    return { to: route, value: route, component: RouterLink };
  };

  return (
    <>
      {children}
      <Paper
        elevation={3}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
          value={value}
          onChange={(e, newValue) => setValue(newValue)}>
          <BottomNavigationAction
            icon={<HomeIcon />}
            {...navProps(routes.home)}
          />
          <BottomNavigationAction
            icon={<ExploreIcon />}
            {...navProps(routes.posts.all)}
          />
          {isAuthor && (
            <BottomNavigationAction
              icon={<AddCircleIcon />}
              {...navProps(routes.posts.create)}
            />
          )}
          <BottomNavigationAction
            icon={<BookmarksIcon />}
            {...navProps(routes.posts.bookmarked)}
          />
          <BottomNavigationAction
            icon={<AccountCircleIcon />}
            {...navProps(routes.account.view)}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Mobile;
