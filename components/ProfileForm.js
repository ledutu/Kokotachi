import React, { useState, useEffect } from 'react';
import { Dimensions, Platform, Alert, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { View, Button, Item, Icon, Input, Grid, Col, Picker, Thumbnail, Left, Body, Right } from "native-base";
import ImagePicker from 'react-native-image-picker';
import { useTranslation } from 'react-i18next';
import { format, parseISO } from 'date-fns';
import { PangolinText, PangolinLabel, RedButton, AppIndicator, CustomPicker, Row, ErrorText, WhiteText } from '../utils/commons';
import { avatarSource } from '../utils/pureFunction';
import styles from '../styles';
import { fetchCities, uploadFile } from '../utils/api';
import { navigate, pushNavigate } from '../utils/navigation';

const width = Dimensions.get('window').width;

import { openStaticPage } from '../actions/staticPage'

const days = [...Array(31).keys()].map(x => x + 1)
var months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
let years = [];

const date = new Date

for (let i = date.getFullYear(); i > 1900; i--) {
    years.push(i)
}

const stylesProfile = StyleSheet.create({
    passingPassword: Platform.OS === 'ios' ? { paddingTop: 10, paddingBottom: 10 } : { paddingTop: 0, paddingBottom: 0 },
});

var marginIconEye = Platform.OS === 'ios' ? 0 : 15

const mapStateToProps = state => ({
    user: state.user,
    prefectures: state.prefectures,
    nationalities: state.nationalities,
    jlpt_levels: state.jlpt_levels,
    situations: state.situations,

    periods: state.periods,
    working_types: state.working_types,
    occupations: state.occupations,
    resident_methods: state.resident_methods
})

const ProfileForm = connect(mapStateToProps)(function ({
    user,
    prefectures,
    nationalities,
    jlpt_levels,
    situations,
    periods,
    working_types,
    occupations,
    resident_methods,
    submitForm,
    dispatch,
    errors = {}
}) {
    const { t } = useTranslation()
    const birthday = user && user.birthday
    const birthday_date = format(parseISO(birthday || "1990-01-01"), 'yyyy-MM-dd');

    const [state, setState] = useState({
        id: user && user.id,
        avatar: user && user.avatar,
        avatarSource: null,
        name: user && user.name,
        gender: user ? user.gender : 0,
        birthday_day: birthday ? birthday_date.getDate() : '',
        birthday_month: birthday ? birthday_date.getMonth() + 1 : '',
        birthday_year: birthday ? birthday_date.getFullYear() : '',
        birthday,
        email: user && user.email,
        password: null,
        password_confirm: null,
        prefecture_id: user && user.prefecture_id,
        city_id: user && user.city_id,
        nationality_id: user && user.nationality_id,
        jlpt_level_id: user && user.jlpt_level_id,
        situations_id: user && user.situations_id,
        periods_id: user && user.periods_id,
        resident_methods_id: user && user.resident_methods_id,
        working_types_id: user && user.working_types_id,
        occupations_id: user && user.occupations_id,
        securePassword: true,
        termOfUse: false
    })
    const { birthday_day, birthday_month, birthday_year } = state
    const [staticState, setStaticState] = useState({
        cities: [],
        loading: prefectures.length == 0,
        uploading: false
    })

    // Fetch city based on selected prefecture
    useEffect(() => {
        if (state.prefecture_id && !staticState.loading) {
            getCities(state.prefecture_id)
        }
    }, [state.prefecture_id])

    // Update birthday
    useEffect(() => {
        if (birthday_day || birthday_month || birthday_year) {
            setState({
                ...state,
                birthday: `${birthday_year}-${birthday_month}-${birthday_day}`
            })
        }
    }, [birthday_day, birthday_month, birthday_year])

    const chooseImage = () => {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, async response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                const data = new FormData
                data.append('file', {
                    name: response.fileName,
                    type: response.type,
                    uri: Platform.OS === "android" ? response.uri : response.uri.replace("file://", "")
                })

                try {
                    setStaticState({ ...staticState, uploading: true })

                    const res = await uploadFile(data)

                    setState({
                        ...state,
                        avatar: res.data._data && res.data._data.pathTmpFile,
                        avatarSource: source
                    });
                    setStaticState({ ...staticState, uploading: false })
                } catch (error) {
                    setStaticState({ ...staticState, uploading: false })
                    if (error.response.status === 413) {
                        Alert.alert(t("IMAGE_TOO_LARGE"))
                    }
                    else {
                        Alert.alert(t("COULD_NOT_UPLOAD_IMAGE"))
                    }
                }
            }
        });
    }

    /**
     * Get cities from API
     * @param {number} prefecture_id 
     */
    async function getCities(prefecture_id) {
        try {
            const response = await fetchCities(prefecture_id)
            setStaticState({ ...staticState, cities: response.data._data.cities })
        }
        catch (error) {
            console.log("Error when fetching cities", error)
        }
    }

    if (prefectures.length > 0 && staticState.loading) {
        setStaticState({
            ...staticState,
            loading: false
        })
    }

    if (staticState.loading) {
        return AppIndicator
    }

    const toggleTermsOfUse = () => setState({
        ...state,
        termOfUse: !state.termOfUse
    })

    return (
        <View>
            <Row>
                <Left />
                <Body>
                    <TouchableOpacity onPress={chooseImage}>
                        <Thumbnail source={state.avatarSource || avatarSource(user && user.avatar)} style={{ width: width * 0.6, height: width * 0.6 }} />
                    </TouchableOpacity>

                    <Text style={{ padding: 10, textAlign: 'center' }}>
                        {t('Please select images in the format')}
                    </Text>

                    <View style={{ alignItems: 'center' }}>
                        {staticState.uploading ? (
                            <PangolinText>{t('Uploading...')}</PangolinText>
                        ) : (
                                <Button style={styles.btnBlue} transparent onPress={chooseImage}>
                                    <WhiteText>{t(user ? 'Change your avatar' : 'Choose your avatar')}</WhiteText>
                                </Button>
                            )}
                    </View>
                </Body>
                <Right />
            </Row>

            <Row padder>
                {/* Full name */}
                <View style={styles.itemForm} error={errors.name && true}>
                    <Text>{t('Full name')}*</Text>
                    <TextInput style={styles.textInput} value={state.name}
                        onChangeText={name => setState({ ...state, name })}
                    />
                    {errors.name && (
                        <ErrorText>{errors.name[0]}</ErrorText>
                    )}
                </View>

                {/* Gender */}
                <View style={styles.itemForm} error={errors.gender && true}>
                    <Text>{t('Gender') + '*'}</Text>
                    <View style={styles.flexRow}>
                        <Button small transparent iconLeft onPress={() => setState({ ...state, gender: 0 })}>
                            <Icon type="FontAwesome" name={state.gender === 0 ? 'check-circle' : 'circle-o'} style={{ color: 'black', marginLeft: 0, marginRight: 10 }} />
                            <Text style={{ marginLeft: -5, color: 'black' }}>{t('Male')}</Text>
                        </Button>

                        <Button small transparent iconLeft onPress={() => setState({ ...state, gender: 1 })}>
                            <Icon type="FontAwesome" name={state.gender === 1 ? 'check-circle' : 'circle-o'} style={{ color: 'black', marginRight: 10 }} />
                            <Text style={{ marginLeft: -5, color: 'black' }}>{t('Female')}</Text>
                        </Button>
                    </View>

                    {errors.gender && (
                        <ErrorText>{errors.gender[0]}</ErrorText>
                    )}
                </View>

                {/* Birthday */}
                <View style={styles.itemForm} error={errors.birthday && true}>
                    <Text>{t('Birthday')}</Text>
                    <Grid>
                        <Col size={2}>
                            <CustomPicker
                                placeholder={t('Day')}
                                selectedValue={state.birthday_day}
                                onValueChange={birthday_day => setState({ ...state, birthday_day })}
                            >
                                {days.map((day, index) => <Picker.Item key={index} label={day.toString()} value={day} />)}
                            </CustomPicker>
                        </Col>
                        <Col size={4}>
                            <CustomPicker
                                placeholder={t('Month')}
                                selectedValue={state.birthday_month}
                                onValueChange={birthday_month => setState({ ...state, birthday_month })}
                            >
                                {months.map((month, index) => <Picker.Item key={index} label={t(month)} value={index + 1} />)}
                            </CustomPicker>
                        </Col>
                        <Col size={3}>
                            <CustomPicker
                                placeholder={t('Year')}
                                selectedValue={state.birthday_year}
                                onValueChange={birthday_year => setState({ ...state, birthday_year })}
                            >
                                {years.map((year, index) => <Picker.Item key={index} label={year.toString()} value={year} />)}
                            </CustomPicker>
                        </Col>
                    </Grid>
                    {errors.birthday && (
                        <ErrorText>{errors.birthday[0]}</ErrorText>
                    )}
                </View>

                {/* Email */}
                <View style={styles.itemForm} error={errors.email && true}>
                    <Text>{t('Email')}*</Text>
                    <TextInput style={styles.textInput} value={state.email}
                        onChangeText={email => setState({ ...state, email })}
                        placeholder="example@gmail.com"
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    {errors.email && (
                        <ErrorText>{errors.email[0]}</ErrorText>
                    )}
                </View>

                {!user && (
                    <>

                        <View style={styles.itemForm} error={errors.password && true}>
                            <Text>{t('Password')}*</Text>

                            <View style={[styles.textInputIcon, stylesProfile.passingPassword]}>
                                <TextInput style={{ flex: 1 }} value={state.password}
                                    onChangeText={password => setState({ ...state, password })}
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                />
                                <TouchableOpacity style={{ flex: 1, marginTop: marginIconEye }} onPress={() => setState({ ...state, securePassword: !state.securePassword })}>
                                    <Icon style={{ paddingRight: 15, fontSize: 15 }} name={state.securePassword ? 'eye-off' : 'eye'} />
                                </TouchableOpacity>
                            </View>

                            {errors.password && (
                                <ErrorText>{errors.password[0]}</ErrorText>
                            )}
                        </View>

                        <View style={styles.itemForm} error={errors.password_confirm && true}>
                            <Text>{t('Password confirm')}*</Text>

                            <View style={[styles.textInputIcon, stylesProfile.passingPassword]}>
                                <TextInput style={{ flex: 1 }} value={state.password_confirm}
                                    onChangeText={password_confirm => setState({ ...state, password_confirm })}
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                />
                                <TouchableOpacity style={{ flex: 1, marginTop: marginIconEye }} onPress={() => setState({ ...state, securePassword: !state.securePassword })}>
                                    <Icon style={{ paddingRight: 15, fontSize: 15 }} name={state.securePassword ? 'eye-off' : 'eye'} />
                                </TouchableOpacity>
                            </View>

                            {errors.password_confirm && (
                                <ErrorText>{errors.password_confirm[0]}</ErrorText>
                            )}
                        </View>
                    </>
                )}

                {/* Address at Japan */}
                <View style={styles.itemForm} error={errors.prefecture_id && true}>
                    <Text>{t('Address at Japan')}</Text>

                    <Grid>
                        <Col>
                            <CustomPicker
                                placeholder={t('Choose prefecture')}
                                selectedValue={state.prefecture_id}
                                onValueChange={prefecture_id => setState({ ...state, prefecture_id })}
                            >
                                {prefectures.map(prefecture => (
                                    <Picker.Item key={prefecture.id} label={prefecture.title} value={prefecture.id} />
                                ))}
                            </CustomPicker>
                            {errors.prefecture_id && (
                                <ErrorText>{errors.prefecture_id[0]}</ErrorText>
                            )}
                        </Col>
                    </Grid>

                    <Grid>
                        <Col>
                            <CustomPicker
                                placeholder={t('Choose city')}
                                selectedValue={state.city_id}
                                onValueChange={city_id => setState({ ...state, city_id })}
                            >
                                {staticState.cities.map(city => (
                                    <Picker.Item key={city.id} label={city.title} value={city.id} />
                                ))}
                            </CustomPicker>
                            {errors.city_id && (
                                <ErrorText>{errors.city_id[0]}</ErrorText>
                            )}
                        </Col>
                    </Grid>
                </View>

            </Row>

            <Row padder>
                <PangolinLabel>{t('Nationality') + '*'}</PangolinLabel>
                <CustomPicker
                    placeholder={t('Choose Nationality')}
                    selectedValue={state.nationality_id}
                    onValueChange={nationality_id => setState({ ...state, nationality_id })}
                >
                    {nationalities.map(nationality => (
                        <Picker.Item key={nationality.id} label={nationality.title} value={nationality.id} />
                    ))}
                </CustomPicker>
                {errors.nationality_id && (
                    <ErrorText>{errors.nationality_id[0]}</ErrorText>
                )}
            </Row>

            <Row padder>
                <PangolinLabel>{t('JLPT level') + '*'}</PangolinLabel>

                <CustomPicker
                    placeholder={t('Choose JLPT level')}
                    selectedValue={state.jlpt_level_id}
                    onValueChange={jlpt_level_id => setState({ ...state, jlpt_level_id })}
                >
                    {jlpt_levels.map(jlptlevel => (
                        <Picker.Item key={jlptlevel.id} label={jlptlevel.title} value={jlptlevel.jlpt_level_id} />
                    ))}
                </CustomPicker>
                {errors.jlpt_level_id && (
                    <ErrorText>{errors.jlpt_level_id[0]}</ErrorText>
                )}
            </Row>

            <Row padder>
                <PangolinLabel>{t('Situation')}</PangolinLabel>
                <CustomPicker
                    placeholder={t('Choose situation')}
                    selectedValue={state.situations_id}
                    onValueChange={situations_id => setState({ ...state, situations_id })}
                >
                    {situations.map(situation => (
                        <Picker.Item key={situation.id} label={situation.title} value={situation.ref_id} />
                    ))}
                </CustomPicker>
                {errors.situations_id && (
                    <ErrorText>{errors.situations_id[0]}</ErrorText>
                )}
            </Row>

            {state.situations_id == 4 && (
                <React.Fragment>
                    <Row padder>
                        <PangolinLabel>{t('Period') + '*'}</PangolinLabel>
                        <CustomPicker
                            placeholder={t('Choose period')}
                            selectedValue={state.periods_id}
                            onValueChange={periods_id => setState({ ...state, periods_id })}
                        >
                            {periods.map(period => (
                                <Picker.Item key={period.id} label={period.title} value={period.ref_id} />
                            ))}
                        </CustomPicker>
                        {errors.periods_id && (
                            <ErrorText>{errors.periods_id[0]}</ErrorText>
                        )}
                    </Row>

                    <Row padder>
                        <PangolinLabel>{t('Resident method') + '*'}</PangolinLabel>
                        <CustomPicker
                            placeholder={t('Choose resident method')}
                            selectedValue={state.resident_methods_id}
                            onValueChange={resident_methods_id => setState({ ...state, resident_methods_id })}
                        >
                            {resident_methods.map(resident_method => (
                                <Picker.Item key={resident_method.id} label={resident_method.title} value={resident_method.ref_id} />
                            ))}
                        </CustomPicker>
                        {errors.resident_methods_id && (
                            <ErrorText>{errors.resident_methods_id[0]}</ErrorText>
                        )}
                    </Row>

                    <Row padder>
                        <PangolinLabel>{t('Occupation') + '*'}</PangolinLabel>
                        <CustomPicker
                            placeholder={t('Choose occupation')}
                            selectedValue={state.occupations_id}
                            onValueChange={occupations_id => setState({ ...state, occupations_id })}
                        >
                            {occupations.map(occupation => (
                                <Picker.Item key={occupation.id} label={occupation.title} value={occupation.ref_id} />
                            ))}
                        </CustomPicker>
                        {errors.occupations_id && (
                            <ErrorText>{errors.occupations_id[0]}</ErrorText>
                        )}
                    </Row>

                    <Row padder>
                        <PangolinLabel>{t('Working type') + '*'}</PangolinLabel>
                        <CustomPicker
                            placeholder={t('Choose working type')}
                            selectedValue={state.working_types_id}
                            onValueChange={working_types_id => setState({ ...state, working_types_id })}
                        >
                            {working_types.map(working_type => (
                                <Picker.Item key={working_type.id} label={working_type.title} value={working_type.ref_id} />
                            ))}
                        </CustomPicker>
                        {errors.working_types_id && (
                            <ErrorText>{errors.working_types_id[0]}</ErrorText>
                        )}
                    </Row>
                </React.Fragment>
            )}

            {
                !user && (
                    <Row padder style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={toggleTermsOfUse}>
                            <Icon style={{ fontSize: 18, marginRight: 5 }} type="FontAwesome" name={state.termOfUse ? 'check-square-o' : 'square-o'} />
                            <PangolinText>{t('Đồng ý với')}</PangolinText>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => dispatch(openStaticPage('terms_and_conditions'))}>
                            <PangolinText style={{ marginLeft: 5, color: 'red' }}>{t('Điều khoản sử dụng')}</PangolinText>
                        </TouchableOpacity>
                    </Row>
                )
            }

            <Row style={{ position: 'relative', bottom: 10, flexDirection: 'row', justifyContent: 'center' }}>
                <RedButton rounded onPress={() => submitForm(state)}>
                    <PangolinText>{user ? t('Save changes') : t('Sign Up')}</PangolinText>
                </RedButton>
            </Row>
        </View>
    )
})

export default ProfileForm;