import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon } from 'native-base'
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'
import { PangolinText } from '../utils/commons'
import { loginSocial } from '../utils/api'
import { setAuth } from '../actions/auth'
import { goBack } from '../utils/navigation'

const FBLoginBtn = connect()(function ({ dispatch }) {

    /**
 * Perform authentication using Facebook SDK by following steps:
 * 
 * 1. Get token by open up the modal by Facebook SDK
 * 2. Request user's information by `GraphRequest`, `GraphRequestManager` using the token just taken.
 * 3. Using user's information and token to login into Kokotachi API
 */

    const onPressButton = async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
                console.log("Login cancelled", result);
            }
            else {
                const accessTokenData = await AccessToken.getCurrentAccessToken();

                const graphRequestConfig = {
                    httpMethod: 'GET',
                    version: 'v5.0',
                    parameters: {
                        fields: {
                            string: 'id, name, email, first_name, last_name, picture'
                        },
                    },
                    accessToken: accessTokenData.accessToken.toString(),
                }

                const profileRequest = new GraphRequest('/me', graphRequestConfig, async (error, result) => {
                    if (error) {
                        console.log("Error fetching data: " + error.toString());
                        return;
                    }

                    const loginParams = {
                        provider: 'facebook',
                        appId: result.id,
                        name: result.name,
                        email: result.email,
                        avatar: 'https://graph.facebook.com/' + result.id + '/picture?type=large',
                        token: accessTokenData.accessToken,
                        situations_id: null,
                        periods_id: null,
                        resident_methods_id: null,
                        occupations_id: null,
                        working_types_id: null,
                    }

                    // Login into Kokotachi server.

                    const loginRes = await loginSocial(loginParams);

                    dispatch(setAuth(loginRes.data._data));

                    goBack();
                });

                new GraphRequestManager().addRequest(profileRequest).start();
            }
        }
        catch (e) {
            console.log("Login fail with error: " + error);
        }
    };

    return (
        <Button block iconLeft style={{ backgroundColor: '#4267b2' }} onPress={onPressButton}>
            <Icon type='FontAwesome' name='facebook-square' />
            <PangolinText style={{ fontSize: 18 }}>Facebook</PangolinText>
        </Button>
    )
});

export default FBLoginBtn