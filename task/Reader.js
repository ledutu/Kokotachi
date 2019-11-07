import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionItem from '../components/SectionItem';
import ReaderItem from '../components/ReaderItem';
import { withNavigation } from 'react-navigation';

function Reader({ title, data, }) {

    const handleNavigation = () => {
        this.props.navigation.navigate("Detail", {
            data: {
                title: 'Công việc',
                uri: 'https://kokotachi.com/images/assets/title-icon-01.png',
            }
        })
    }

    return (
        <View style={styles.container}>
            <SectionItem
                uri={{ uri: 'https://kokotachi.com/images/assets/title-icon-01.png' }}
                title={title}
                button="Xem thêm"
                // onPress={handleNavigation}
            />
            <View style={{ marginTop: 60 }}>
                {
                    data.map(item => {
                        return (
                            <ReaderItem
                                key={item.id}
                                data={item}
                                info={{}}  //data to navigater
                                screen={""}   //get screen to navigate
                            />
                        )
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 60,
    },

});

export default withNavigation(Reader);
