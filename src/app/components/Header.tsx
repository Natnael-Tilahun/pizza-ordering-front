"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/" },
  { name: "Orders", path: "/orders" },
  { name: "Who we are", path: "/who-we-are" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ px: "20px" }}>
      <Box
        sx={{
          height: "65px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/logo.png"
          alt="Pizza Ordering App"
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          py: "20px",
        }}
      >
        {navItems.map((item) => (
          <Link className="text-left" href={item.path} key={item.path}>
            {item.name}
          </Link>
        ))}
      </List>
      <Button
        variant="contained"
        size="small"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "25px",
          width: "100%",
        }}
      >
        Register
      </Button>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgcolor: "#FFF8F1",
          boxShadow: "none",
          position: "static",
          width: "100%",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Image
            src="/logo.png"
            alt="Pizza Ordering App"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            {navItems.map((item) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: pathname === item.path ? "#FF9921" : "#16120DBF", // Updated condition
                  fontWeight: pathname === item.path ? "bold" : "normal",
                  fontSize: "25px",
                }}
                key={item.path}
                href={item.path} // Updated href to match item.path directly
              >
                {item.name}
              </Link>
            ))}
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "25px",
                borderRadius: "5px",
                height: { xs: "45px", md: "50px" },
                width: { xs: "140px", md: "150px" },
              }}
            >
              Register
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
