import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'; 

const SideDrawer = (props) => {
  const { open, onClose } = props
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log('featured 😊')}>
          Event starts in
        </ListItem>

        <ListItem button onClick={() => console.log('venue info 👶')}>
          Venue Info
        </ListItem>

        <ListItem button onClick={() => console.log('highlights 🔥')}>
          Highlights
        </ListItem>

        <ListItem button onClick={() => console.log('pricing 💰')}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => console.log('location 🗺')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  )
};

export default SideDrawer;