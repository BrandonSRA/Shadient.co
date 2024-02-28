import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import * as React from "react";

const pages = [
  {
    name: "Home",
    component: (
      <Link color="#fff" component={RouterLink} to="/landing">
        Home
      </Link>
    ),
  },
  {
    name: "About",
    component: (
      <Link component={RouterLink} to="/company">
        Company
      </Link>
    ),
  },
  {
    name: "Contact",
    component: (
      <Link component={RouterLink} to="/services">
        Services
      </Link>
    ),
  },
  // Agrega más rutas aquí
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container sx={{ width: "100%" }}>
        <Toolbar disableGutters>
          <Link
            component={RouterLink}
            to="/"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <img src="/img/Frame.svg" />
          </Link>
          <Typography
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            Shadient.co
          </Typography>

          <Box  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#ffff" }} />
            </IconButton>
            <Menu
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
                display: { xs: "block", md: "none", backdropFilter: "blur(4px)" },
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              {pages.map((page) => (
                <MenuItem sx={{background:"#110F0F"}} key={page.name} onClick={handleCloseNavMenu}>
                  {page.component}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link
            component={RouterLink}
            to="/"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          >
            <img src="/img/Frame.svg" />
          </Link>
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".0rem",
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            Sahdient.co
          </Typography>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.component}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="outlined"
              sx={{
                color: "#FFA800",
                border: "1px solid #FFA800",
                borderRadius: "100px",
                p: "5px 24px",
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
