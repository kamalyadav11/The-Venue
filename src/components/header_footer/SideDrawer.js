import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => alert("Hello")}>
          Event Starts in
        </ListItem>
        <ListItem button onClick={() => alert("Hello")}>
          Venue info
        </ListItem>
        <ListItem button onClick={() => alert("Hello")}>
          HighLights
        </ListItem>
        <ListItem button onClick={() => alert("Hello")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => alert("Hello")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
