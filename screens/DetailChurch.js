import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Content, View, Button, Label } from 'native-base'
import OpenLinking from '../utils/OpenLinking';
import MapView, { Marker } from 'react-native-maps';
import { Row } from '../utils/commons';
import { ASPECT_RATIO, width, height } from '../utils/constants';

const LATITUDE_DELTA = 0.03

export default function DetailChurch({ navigation }) {
    const church = navigation.getParam('data')
    const map_only = navigation.getParam('map_only')
    const styles = StyleSheet.create({
        heading: {
            fontSize: 18,
            fontWeight: '500',
        }
    })

    return (
        <Container>
            <Content>
                {!map_only && (
                    <React.Fragment>
                        <Row padder>
                            <Label style={styles.heading}>Address</Label>
                            <Text>{church.address}</Text>
                        </Row>

                        <Row padder>
                            <Label style={styles.heading}>Misa by English</Label>
                            <Text>{church.english_ceremony ? "Yes" : "No"}</Text>
                        </Row>

                        <Row padder>
                            <Label style={styles.heading}>Misa by Vietnamese</Label>
                            <Text>{church.vietnamese_ceremony ? 'Yes' : 'No'}</Text>
                        </Row>

                        <Row padder>
                            <Label style={styles.heading}>Sunday Misa</Label>
                            <Text>{church.sunday_ceremony}</Text>
                        </Row>

                        <Row padder>
                            <Label style={styles.heading}>Weekday Misa</Label>
                            <Text>{church.normal_day_ceremony}</Text>
                        </Row>

                        {church.sunday_school && (
                            <Row padder>
                                <Label style={styles.heading}>Sunday school</Label>
                                <Text>{church.sunday_school}</Text>
                            </Row>
                        )}

                        {church.volunteer_activity && (
                            <Row padder>
                                <Label style={styles.heading}>Volunteer activity</Label>
                                <Text>{church.volunteer_activity}</Text>
                            </Row>
                        )}

                        {church.article.description && (
                            <Row padder>
                                <Label style={styles.heading}>Description</Label>
                                <Text>{church.article.description}</Text>
                            </Row>
                        )}

                        {church.website && (
                            <Row padder>
                                <Label style={styles.heading}>Website</Label>
                                <Button small transparent onPress={() => OpenLinking(church.website)}>
                                    <Text style={{ paddingLeft: 0 }}>{church.website}</Text>
                                </Button>
                            </Row>
                        )}

                        <Row padder>
                            <Label style={styles.heading}>Source</Label>
                            <Button small transparent onPress={() => OpenLinking('http://tokyo.catholic.jp')}>
                                <Text style={{ paddingLeft: 0 }}>http://tokyo.catholic.jp</Text>
                            </Button>
                        </Row>
                    </React.Fragment>
                )}

                {church.lat && church.lng && (
                    <View>
                        {!map_only && (
                            <View padder>
                                <Text style={styles.heading}>Map</Text>
                            </View>
                        )}

                        <MapView
                            initialRegion={{
                                latitude: parseFloat(church.lat),
                                longitude: parseFloat(church.lng),
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
                            }}
                            style={{ width, height: map_only ? height : width * 0.8 }}
                        >
                            <Marker coordinate={{
                                latitude: parseFloat(church.lat),
                                longitude: parseFloat(church.lng),
                            }} />
                        </MapView>
                    </View>
                )}
            </Content>
        </Container>
    );
};

const HeaderTitle = ({ title }) => {
    const styles = StyleSheet.create({
        title: {
            fontSize: 20,
            paddingBottom: 2,
        }
    })

    return <Text style={styles.title}>{title}</Text>
}

DetailChurch.navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('data');
    return {
        headerTitle: <HeaderTitle title={title.title} />
    }
}
