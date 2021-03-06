import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Connect from "./Connect";
import MuiNextLink from "./MuiNextLink";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
// const settings = ['Logout',currentAccount];

const ResponsiveAppBar = ({ navLinks }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container textalign="center">
        <Toolbar disableGutters={true}>
          <Box
            component="img"
            sx={{
              height: 64,
            }}
            alt="Marketplace"
            src={"logofinal_transparent.png"}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              textalign="center"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navLinks.map(({ title, path }, i) => (
                <MenuItem key={`${title}${i}`} onClick={handleCloseNavMenu}>
                  <MuiNextLink
                    href={path}
                    variant="button"
                    sx={{ color: "rgba(0,0,0)", opacity: 1 }}
                    textalign="center"
                  >
                    {title}
                  </MuiNextLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navLinks.map(({ title, path }, i) => (
              <Link key={`${title}${i}`} href={path}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {title}
                </Button>
              </Link>
            ))}
          </Box>

          <Connect />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
