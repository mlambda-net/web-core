import React from 'react';
import LocalizedStrings from 'react-localization';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { Title } from '@mlambda-net/web-core/common';
import { withUtils } from '@mlambda-net/web-core/utils';

const language = new LocalizedStrings({
  en: {
    recovery: 'Recovery',
    email: 'email',
    invalidEmail: 'email is not valid',
    submit: 'recovery',
    cancel: 'cancel',
  },
  es: {
    recovery: 'Recuperar contraseña',
    email: 'correo',
    invalidEmail: 'el correo es invalido',
    submit: 'recuperar',
    cancel: 'cancelar',
  },
});

const styles = (theme) => {
  return {};
};

class Recovery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      validEmail: '',
      helpEmail: '',
    };

    this.valid = this.props.validation;
    this.changeEmail = this.emailChangeHandle.bind(this);
    this.recoveryClick = this.recoveryHandle.bind(this);
  }

  render() {
    language.setLanguage(this.props.lang);
    return (
      <Box width="100%">
        <Box display="flex" justifyContent="center">
          <Title title={language.recovery} />
        </Box>
        <Box p={1}>
          <FormControl fullWidth>
            <TextField
              label={language.email}
              color="secondary"
              type="email"
              error={!this.state.validEmail}
              onChange={this.changeEmail}
              helperText={this.state.helpEmail}
            />
          </FormControl>
        </Box>
        <Box p={1} m={1} display="flex" justifyContent="flex-end">
          <Box p={1}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => this.props.onClose()}>
              {language.cancel}
            </Button>
          </Box>
          <Box p={1}>
            <Button
              variant="outlined"
              color="primary"
              disabled={!this.isValid()}
              onClick={this.recoveryClick}>
              {language.recovery}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  emailChangeHandle(event) {
    let email = event.target.value;
    if (this.valid.email(email)) {
      this.setState({
        email: email,
        validEmail: true,
        helpEmail: '',
      });
    } else {
      this.setState({
        validEmail: false,
        helpEmail: language.invalidEmail,
      });
    }
  }

  isValid() {
    return this.state.validEmail;
  }

  recoveryHandle() {
    if (this.isValid()) {
      this.onRecovery({ email: this.state.email });
    }
  }
}

export default withUtils(styles)(Recovery);
