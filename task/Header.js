import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountLoginBox from '../components/AccountLoginBox';
import { withNavigation } from 'react-navigation';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      displayForgot: false,
      menu: [
        "Công việc", "Căn hộ", "Xã hội", "Nhà thờ", "Sự kiện",
        "Mỹ phẩm", "Sim", "Tìm bạn", "Liên hệ",
      ]
    };
  };

  _menu = null;

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  setMenuRef = ref => {
    this._menu = ref;
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
    this.setState({ display: false })
    this.props.navigation.navigate('Register');
  }



  render() {
    return (
      <View>
        <View style={styles.container}>
          <Menu
            ref={this.setMenuRef}
            button={
              <TouchableOpacity onPress={this.showMenu}>
                <Image
                  source={require('../kokotachi_image/menu.png')}
                  style={styles.menuIcon}
                />
              </TouchableOpacity>
            }
          >
            <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
            <MenuItem onPress={this.hideMenu} style={styles.menu}>Menu item 2</MenuItem>
          </Menu>


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
  },

  menu: {
    width: 600,
  }


});

export default withNavigation(Header);
