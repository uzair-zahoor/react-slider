import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router= useRouter();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };
  function home(){
    router.push("/");
  }

  function about(){
    router.push("/about");
  }
  function contact(){
    router.push("/#");
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        {!isMobile && (
          <>
            <Button color="inherit">
              <Link className="link" href="/" passHref>
                <HomeIcon />
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="link" href="/about" passHref>
                <InfoIcon />
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="link" href="/#" passHref>
                <PhoneIcon />
              </Link>
            </Button>
          </>
        )}
      </Toolbar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          <ListItem  onClick={toggleDrawer(false)}>
            <ListItemText primary={<HomeIcon onClick={home}/>} />
          </ListItem>
          <ListItem  onClick={toggleDrawer(false)}>
            <ListItemText primary={<InfoIcon onClick={about}/>} />
          </ListItem>
          <ListItem  onClick={toggleDrawer(false)}>
            <ListItemText primary={<PhoneIcon onClick={contact}/>} />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
