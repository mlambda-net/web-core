import React from 'react';
import Box from '@mui/material/Box';
import login from '../assets/img/login.png';
import { Action, LeftImage, State } from '@mlambda-net/web-core/common';
import { SignIn } from '@mlambda-net/web-core/login';
import withUtils from '@mlambda-net/web-core/utils/withUtils';
import Recovery from '@mlambda-net/web-core/login/recovery';

const styles = (themes) => ({
  root: {
    display: 'flex',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  login: {},
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.route = this.props.route;
    this.state = { actual: 'login' };
    this.onLogin = this.onLoginHandle.bind(this);
    this.onForgot = this.onForgotHandle.bind(this);
  }

  login(data) {
    this.route.to('store');
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.root}>
        <Box width={'500px'}>
          <LeftImage img={<img src={login} width="100%" alt="img" />}>
            <Action actual={this.state.actual}>
              <State name="login">
                <SignIn
                  title="Login"
                  onForgot={() => this.setState({ actual: 'recovery' })}
                  onLogin={(user) => this.login(user)}
                />
              </State>
              <State name="recovery">
                <Recovery onClose={() => this.setState({ actual: 'login' })} />
              </State>
            </Action>
          </LeftImage>
        </Box>
      </Box>
    );
  }

  onLoginHandle(data) {
    console.log(data);
  }

  onForgotHandle() {}
}

export default withUtils(styles)(Login);
