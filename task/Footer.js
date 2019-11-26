import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import { View, Button, Icon, Text } from 'native-base';
import Config from 'react-native-config';
import styles from '../styles';
import { PangolinText } from '../utils/commons';
import { useTranslation } from 'react-i18next';
import { openStaticPage } from '../actions/staticPage';
import { navigate } from '../utils/navigation';

const { INSTAGRAM_URL, FACEBOOK_URL } = Config;

const Footer = connect()(function ({ dispatch }) {
    const { t } = useTranslation();
    const date = new Date;

    const openFBPage = async () => {
        if (FACEBOOK_URL) {
            try {
                // Try to open FB page in FB app
                await Linking.openURL('fb://facewebmodal/f?href=' + FACEBOOK_URL)
            }
            catch (e) {
                // Otherwise, open in browser.
                Linking.openURL(FACEBOOK_URL)
            }
        }
    }

    return (
        <View style={_styles.footer}>
            <View style={_styles.logo}>
                <Image source={require('../assets/images/logo-bottom.png')} style={{ width: 182, height: 56 }} />
            </View>

            <View style={{ ...styles.flexRow, justifyContent: "center", alignItems: "center" }}>
                <Button transparent onPress={() => INSTAGRAM_URL && Linking.openURL(INSTAGRAM_URL)}>
                    <Text>
                        <Icon type="FontAwesome" name="instagram" style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                    </Text>
                </Button>

                <Button transparent onPress={openFBPage}>
                    <Text>
                        <Icon type="FontAwesome" name="facebook" style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                    </Text>
                </Button>
            </View>

            <View style={{ ...styles.flexRow, marginTop: 30, marginBottom: 20 }}>
                <View style={{ flex: 1, paddingLeft: 40 }}>
                    <TouchableOpacity onPress={() => navigate('AboutUs')} style={{ marginBottom: 10 }}>
                        <PangolinText uppercase={false} style={{ fontSize: 16, color: 'white' }}>{t('About us')}</PangolinText>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => dispatch(openStaticPage('terms_and_conditions'))} style={{ marginRight: 30 }}>
                        <PangolinText uppercase={false} style={{ fontSize: 16, color: 'white' }}>{t('Terms')}</PangolinText>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, paddingLeft: 30 }}>
                    <TouchableOpacity onPress={() => dispatch(openStaticPage('privacy_policy'))} style={{ marginBottom: 10 }}>
                        <PangolinText uppercase={false} style={{ fontSize: 16, color: 'white' }}>{t('Privacy policy')}</PangolinText>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('Contact')}>
                        <PangolinText uppercase={false} style={{ fontSize: 16, color: 'white' }}>{t('Contact')}</PangolinText>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ ...styles.flexRow, justifyContent: "center", alignItems: "center" }}>
                <PangolinText style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 16 }}>© Kokotachi {date.getFullYear()}</PangolinText>
            </View>
        </View>
    )
})

const _styles = StyleSheet.create({
    footer: {
        backgroundColor: '#494949',
        paddingTop: 50,
        paddingBottom: 50
    },
    logo: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Footer