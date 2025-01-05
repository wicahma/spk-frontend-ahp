"use client";
import { sidebarListCounter, sidebarListMain } from "@/constants/navigation";
import { AppBar } from "@/components/atoms/appbar";
import { Drawer } from "@/components/atoms/drawer";
import { DrawerHeader } from "@/components/atoms/drawer-header";
import { ListItemRow } from "@/components/atoms/drawer/list-item";
import { ISidebarList } from "@/interfaces/page/dashboard/ui.interface";
import {
  faBolt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const DashboardPage: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" color="default" open={open}>
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <FontAwesomeIcon size="1x" icon={faBolt} />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard SPK
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            className="aspect-square rounded-full p-2 h-10"
            color="secondary"
            onClick={handleDrawerClose}
          >
            {theme.direction === "rtl" ? (
              <FontAwesomeIcon size="xs" icon={faChevronRight} />
            ) : (
              <FontAwesomeIcon icon={faChevronLeft} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 45,
                  px: 2,
                },
                open
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                      display: "none",
                    },
              ]}
            >
              <p className="font-medium text-xl">Dashboard</p>
            </ListItemButton>
          </ListItem>
          {sidebarListMain.map((item, index) => (
            <ListItemRow
              item={item}
              open={open}
              key={`${item.name}-${index}`}
            />
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 45,
                  px: 2,
                },
                open
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                      display: "none",
                    },
              ]}
            >
              <p className="font-medium text-xl">Perhitungan</p>
            </ListItemButton>
          </ListItem>
          {sidebarListCounter.map((item, index) => (
            <ListItemRow
              item={item}
              open={open}
              key={`${item.name}-${index}`}
            />
          ))}
        </List>
        {!open && <Divider />}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
