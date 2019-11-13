import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountLoginBox from '../components/account/AccountLoginBox';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import LogoImages from '../utils/LogoImages';
import MenuModal from '../components/detailMenuComponent/MenuModal';
import AccountFotgotBox from '../components/account/AccountFotgotBox';

import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import LogoutBox from '../components/account/LogoutBox';

const KEY = "KEY";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      displayForgot: false,
      displayShowMenu: false,
      name: '',
      image: '',
      isLogin: false,
      isLoginMenu: false,
      isLogoutBox: false,
    };
  };

  static propTypes = {
    onPress: PropTypes.func,
  }

  //to open a login box
  handleOpenAccount = () => {
    this.setState({
      display: true
    })
  };

  //to swtich forgot username and password screen
  handleOpenForgot = () => {
    this.setState({ 
      displayForgot: true,
      display: false,
    })
  };

  //to close forgotScreen
  handleCloseForgotModal = () => {
    this.setState({ displayForgot: false })
  };


  handleOpenRegisterScreen = () => {
    this.setState({ display: false })
    this.props.navigation.navigate('Register');
  };

  //To close a login box
  handleCloseLoginModal = () => {
    this.setState({
      display: false,
    })
  };

  //to return a HomeScreen
  handleBackToHome = () => {
    this.props.navigation.navigate('Home')
  };

  //To close a menu
  dismissRender = () => {
    this.setState({
      displayShowMenu: false,
    })
  };

  handleOpenMenu = () => {
    const { displayShowMenu } = this.state;
    if (displayShowMenu === true) {
      this.setState({ displayShowMenu: false })
    }

    else {
      this.setState({ displayShowMenu: true })
    }
  };

  //return a menu with a lot of option
  renderMenu = () => {
    const { displayShowMenu } = this.state;
    if (displayShowMenu) {
      return (
        <View style={styles.fullScreen}>
          <ScrollView>
            {
              LogoImages.map(item => {
                return (
                  <MenuModal
                    key={item.id}
                    title={item.title}
                    uri={item.uri}
                    onPress={this.handleOnPressMenu}
                  />
                )
              })
            }
          </ScrollView>
        </View>
      )
    };

    return null;

  };

  handleOnPressMenu = (title, uri) => {
    this.props.navigation.navigate('DetailMore', { data: { title, uri } });
    this.setState({ displayShowMenu: false })
  };

  //to Get info user of facebook login
  requestInfo = accessToken => {
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken,
        parameters: {
          fields: {
            string: 'email, name, picture',
          }
        }
      },
      this.responseCallback,
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  //to Get info user of facebook login
  responseCallback = (error, result) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      infoData = JSON.parse(JSON.stringify(result));
      const { name, picture } = infoData;
      this.setState({
        name,
        image: picture.data.url,
        isLogin: true,
      }, () => {
        const { name, image, isLogin } = this.state;

        this.storeData({ name, image, isLogin });

      });


    }
  };

  //Store data to display that no need to get info user again
  storeData = async ({ name, image, isLogin }) => {

    const user = {
      name: name,
      image: image,
      isLogin
    };

    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(user));
    }
    catch (e) {
      console.log(e)
    }
  };

  //to get data from storage
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem(KEY);

      if (value !== null) {
        const user = JSON.parse(value)
        const { name, image, isLogin } = user
        this.setState({
          name,
          image,
          isLogin,
        })
      }
    }
    catch (e) {
      console.log(e)
    }
  };

  //call every app run
  UNSAFE_componentWillMount() {
    this.getData();
  };



  handleLoginFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      (result) => {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          AccessToken.getCurrentAccessToken()
            .then(data => {
              let accessToken = data.accessToken;

              this.requestInfo(accessToken);

            })

        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
    this.handleCloseLoginModal();
  };

  //Open menu in Avatar
  handleOpenMenuLogin = () => {
    const { isLoginMenu } = this.state;

    this.setState({
      isLoginMenu: !isLoginMenu,
    })
  };

  handleLogout = () => {
    this.setState({
      isLogoutBox: true,
      isLoginMenu: false,
    });
  }

  //return a menu of login
  renderLoginMenu = () => {
    const { isLoginMenu } = this.state;
    if (isLoginMenu) {
      return (
        <View
          style={styles.picker}
        >
          <TouchableOpacity onPress={this.handleOpenMoreInfo} activeOpacity={0.8}>
            <Text
              style={[styles.text, styles.textBorder]}>Thông tin tài khoản</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleLogout} activeOpacity={0.8}>
            <Text style={styles.text}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return;
  };

  //To go to user infomation detail screen
  handleOpenMoreInfo = () => {
    this.setState({
      isLoginMenu: false,
    })
    const { image, name } = this.state;
    this.props.navigation.navigate('Register', { data: { image, name } });
  }

  handleCloseLogoutBox = () => {
    this.setState({
      isLogoutBox: false,
    })
  };

  //Logout facebook
  handleLogoutFacebook = () => {
    LoginManager.logOut();

    this.setState({
      isLogoutBox: false,
      isLogin: false,
    })

    this.storeData({
      name: '',
      image: '',
      isLogin: false,
    });
  }

  //return a modal to ask exit
  renderModal = () => {
    const { isLogoutBox } = this.state;
    return (
      <LogoutBox
        visible={isLogoutBox}
        onRequestClose={this.handleCloseLogoutBox}
        logoutPress={this.handleLogoutFacebook}
      />
    )
  };

  handleBackToLogin = () => {
    this.setState({
      display: true,
      displayForgot: false,
    })
  }



  render() {

    const { isLogin, image, display, displayForgot } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          <TouchableOpacity onPress={this.handleOpenMenu}>
            <Image
              source={require('../kokotachi_image/menu.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>


          <TouchableOpacity onPress={this.handleBackToHome}>
            <Image
              source={require('../kokotachi_image/logo.png')}
              style={styles.logoImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={isLogin ? this.handleOpenMenuLogin : this.handleOpenAccount}
          >
            {isLogin ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
                <Icon
                  name="user"
                  color="white"
                  size={30}
                  style={styles.loginAccount}
                />
              )}
          </TouchableOpacity>

        </View>
        <AccountLoginBox
          display={display}
          close={this.handleCloseLoginModal}
          onPress={this.handleOpenRegisterScreen}
          facebookLogin={this.handleLoginFacebook}
          openAnotherModel={this.handleOpenForgot}
        />
        <AccountFotgotBox
          display={displayForgot}
          close={this.handleCloseForgotModal}
          back={this.handleBackToLogin}
        />
        {this.renderLoginMenu()}

        {this.renderMenu()}

        {this.renderModal()}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },

  nothing: {

  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  detailContainer: {
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

  fullScreen: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    backgroundColor: 'white',
    top: 100,
    padding: 20,
    height: 550
  },
  fullScreenText: {
  },

  picker: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'white',
    top: 75,
    right: 20,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.15)',
  },

  text: {
    fontWeight: '400',
    color: '#212529',
    fontSize: 17,
    paddingVertical: 13.5,
    paddingHorizontal: 27
  },

  textBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.15)',
  }

});

export default withNavigation(Header);
