import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Container, Content, ListItem, Left, Body, Right, Header, Icon } from 'native-base'
import { useTranslation } from 'react-i18next'
import { RedTitle, PangolinText, Logo_BackToHome } from '../utils/commons'
import styles from '../styles'
import OpenLinking from '../utils/OpenLinking'

export default function AboutUs({ navigation }) {
    const { t } = useTranslation()

    const _styles = StyleSheet.create({
        centerRow: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        container: {
            backgroundColor: '#fff'
        },
        header: {
            backgroundColor: styles.header.backgroundColor,
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 10
        },
        titleWrap: {
            alignItems: 'center',
            marginBottom: 20,
            marginTop: 10
        },
        titleHeader: {
            color: '#e73227'
        },
        fontLarger: {
            fontSize: 18
        },
        iconWarning: {
            fontSize: 16,
            color: '#ff2a30',
            marginRight: 5
        }
    })

    const closeThisScreen = () => {
        navigation.goBack()
    }

    return (
        <Container>
            <Header androidStatusBarColor={styles.header.backgroundColor} style={_styles.header}>
                <Left style={{ flex: 1 }} />

                <Body style={{ flex: 1 }}>
                    <Logo_BackToHome />
                </Body>

                <Right style={{ flex: 1 }}>
                    <TouchableOpacity onPress={closeThisScreen}>
                        <Icon type="MaterialIcons" name="close" style={{ color: 'white', marginLeft: 15 }} />
                    </TouchableOpacity>
                </Right>
            </Header>

            <Content style={{ padding: 10, marginBottom: 30 }}>
                <ListItem noBorder noIndent style={{ ...styles.flexColumn, marginTop: 10 }}>
                    <RedTitle>{t('MANANGEMENT & DEVELOPED BY')}</RedTitle>
                    <RedTitle>PAXCREATION CO., LTD</RedTitle>
                </ListItem>

                <View style={{ marginBottom: 10, marginTop: 10 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Address (Head office)')}</PangolinText>
                    <PangolinText>{t('about_us.jp_address')}</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Capital')}</PangolinText>
                    <PangolinText>{t('about_us.jp_capital')}</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Establishment')}</PangolinText>
                    <PangolinText>{t('2006')}</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Representative Director')}</PangolinText>
                    <PangolinText>{t('SHIGENORI SATO')}</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Phone')}</PangolinText>
                    <PangolinText>03-6420-0045</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>FAX</PangolinText>
                    <PangolinText>03-6420-0046</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>Website</PangolinText>
                    <PangolinText style={{color: '#007bff'}} onPress={() => OpenLinking('www.paxcreation.com')}>www.paxcreation.com</PangolinText>
                </View>

                <View style={{ marginBottom: 10, paddingTop: 20, marginTop: 10, borderTopWidth: 1 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Affiliated Company (Vietnam)')}</PangolinText>
                    <PangolinText>{t('about_us.company_name')}</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Address')}</PangolinText>
                    <PangolinText>{t('about_us.vn_address')}</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Capital')}</PangolinText>
                    <PangolinText>{t('about_us.vn_capital')}</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Establishment')}</PangolinText>
                    <PangolinText>{t('2013')}</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Representative Director')}</PangolinText>
                    <PangolinText>{t('SHIGENORI SATO')}</PangolinText>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <PangolinText style={_styles.titleHeader}>{t('Phone')}</PangolinText>
                    <PangolinText>(028)3847-6283</PangolinText>
                </View>
            </Content>
        </Container>
    )
}

AboutUs.navigationOptions = () => ({
    header: null
})