import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Container, Content, Icon } from 'native-base';
import { PangolinText } from '../utils/commons';
import ProfileForm from '../components/ProfileForm';
import { saveProfile } from '../utils/api';
import { setUser } from '../actions/user';
import { useTranslation } from 'react-i18next';
import styles from '../styles';

let contentComponent = null

function Profile({ dispatch }) {
    const { t } = useTranslation()
    const [state, setState] = useState({
        form_status: '',
        randomly: null,
        form_errors: []
    })
    const { form_status, randomly, form_errors } = state;

    const saveChanges = async formData => {
        
        console.log(profileRes);
        try {
            const profileRes = await saveProfile(formData);
            console.log(profileRes);
            if (profileRes.data._data) {
                dispatch(setUser(profileRes.data._data.user))
            }
            setState({
                ...state,
                form_status: profileRes.data._data ? 'success' : 'error',
                form_errors: [],
                randomly: Math.random()
            })
        } catch (error) {
            setState({
                ...state,
                form_status: 'error',
                form_errors: error.response.data && error.response.data.errors,
                randomly: Math.random()
            })
        }
    }

    // Scroll to top
    useEffect(() => {
        if (randomly && contentComponent) {
            contentComponent._root.scrollToPosition(0, 0)
        }

        console.log(form_errors);

    }, [randomly])


    return (
        <Container>
            <Content ref={c => contentComponent = c}>
                <View padder>
                    {form_status == 'error' && (
                        <View padder style={styles.flexRowCenter}>
                            <Icon style={{ color: '#ff2a30', marginRight: 5 }} type="FontAwesome" name="warning" />
                            <PangolinText style={{ color: '#ff2a30' }}>{t('Saving failed')}</PangolinText>
                        </View>
                    )}

                    {form_status == 'success' && (
                        <View padder style={styles.flexRowCenter}>
                            <Icon style={{ color: 'green', marginRight: 5 }} type="FontAwesome" name="info" />
                            <PangolinText style={{ color: 'green' }}>{t('Saving successful')}</PangolinText>
                        </View>
                    )}
                </View>

                <ProfileForm submitForm={saveChanges} errors={form_errors} />
            </Content>
        </Container>
    )
}

Profile.navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title')

    return {
        title,
    }
}

export default connect()(Profile);