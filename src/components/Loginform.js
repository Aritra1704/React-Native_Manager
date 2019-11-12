import React, {Component} from 'react';
import {View, SafeAreaView, Text, Platform} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: '#fff'}}>
          <Text styles={styles.errorTextStyles}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 5, borderWidth: 1}}></View>
        <View style={{flex: 90, borderWidth: 1}}>
          <Card style={styles.statusBarBackground}>
            <CardSection>
              <Input
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                styles={styles.userInput}
              />
            </CardSection>
            <CardSection>
              <Input
                secureTextEntry
                label="Password"
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>
            {this.renderError()}
            <CardSection>{this.renderButton()}</CardSection>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  errorTextStyles: {
    flex: 1,
    fontSize: 20,
    alignSelf: 'center',
    color: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  statusBarBackground: {
    height: Platform.OS === 'ios' ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: 'white',
  },
};

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;

  return {email, password, error, loading};
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
