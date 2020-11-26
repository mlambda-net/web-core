import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import withLanguage from '@mlambda-net/core/lang/language';
import { Valid } from '@mlambda-net/core/common/validations';
import Box from '@material-ui/core/Box';
import {Title} from '@mlambda-net/core/common'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const valid = Valid;

const language = new LocalizedStrings({
  en: {
    recovery: 'Recovery',
    email: 'email',
    invalidEmail: 'email is not valid',
    submit: 'recovery'
  },
  es: {
    recovery: 'Recuperar contraseña',
    email: 'correo',
    invalidEmail: 'el correo es invalido',
    submit: 'recuperar'
  },
});

const styles = (theme) => {
  console.log(theme)
  return ({})
};

class Skeleton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      validEmail : "",
      helpEmail: "",
    };

    this.changeEmail = this.emailChangeHandle.bind(this)
    this.recoveryClick = this.recoveryHandle.bind(this)
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
          <Button
            variant="outlined"
            color="primary"
            disabled={!this.isValid()}
            onClick={this.recoveryClick}>
            {language.submit}
          </Button>
        </Box>
      </Box>
    );
  }

  emailChangeHandle(event) {

    let email = event.target.value
    if (valid.email(email)) {
      this.setState({
        email: email,
        validEmail: true,
        helpEmail: ""
      })
    }
    else {
      this.setState({
        validEmail: false,
        helpEmail: language.invalidEmail
      })
    }

  }

  isValid() {
    return this.state.validEmail
  }

  recoveryHandle() {
    if (this.isValid()) {
      return {email: this.state.email}
    }
  }
}

Skeleton.protoTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  lang: PropTypes.string,
};

export default  withStyles(styles)(withTheme(withLanguage(Skeleton)));