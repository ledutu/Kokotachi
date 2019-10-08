import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountLoginBox from '../components/AccountLoginBox';
import { withNavigation } from 'react-navigation';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      displayForgot: false,
    };
  };

  close = () => {
    this.setState({ display: false })
  }

  dropDownSection = () => {

  };

  handleOpenAccount = () => {
    this.setState({
      display: true
    })
  };

  handleOpenForgot = () => {
    this.setState({ displayForgot: true })
  };

  closeForgot = () => {
    this.setState({ displayForgot: false })
  };

  handleOpenRegisterScreen = () => {
    this.setState({display: false})
    this.props.navigation.navigate('Register');
  }



  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.dropDownSection}>
            <Image
              source={require('../kokotachi_image/menu.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../kokotachi_image/logo.png')}
              style={styles.logoImage}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleOpenAccount}>
            <Icon
              name="user"
              color="white"
              size={30}
              style={styles.loginAccount}
            />
          </TouchableOpacity>
        </View>
        <AccountLoginBox
          display={this.state.display}
          close={this.close}
          onPress={this.handleOpenRegisterScreen}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff2a30",
    height: 100,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  menuIcon: {
    width: 35,
    height: 50,
  },

  logoImage: {
    width: 200,
    resizeMode: 'contain',
    flex: 1,
  },

  loginAccount: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  }


});

export default withNavigation(Header);
