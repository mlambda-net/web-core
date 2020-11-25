import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { makeStyles } from '@material-ui/core/styles';
import Profile from '@mlambda-net/core/login/profile';
import { AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Label from '@mlambda-net/core/common/label';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const user = {
  name: 'Roy',
  lastName: 'Gonzalez',
  email: 'yordivad@gmail.com',
};

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const content = () => {
  return (
    <Box>
      <Label label="Name" style={{ paddingTop: '10px' }} value="Roy Gonzalez" />
      <Label
        label="Email"
        style={{ paddingTop: '10px' }}
        value="yordivad@gmail.com"
      />
    </Box>
  );
};

const actions = () => {
  return <Button>Update</Button>;
};

export const ProfileStory = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Profile
          user={user}
          content={content}
          actions={actions}
          open="true"
          width="250px"
          height="300px"
        />
      </Toolbar>
    </AppBar>
  );
};

export default {
  title: 'MLambda/Login/profile',
  component: ProfileStory,
};
