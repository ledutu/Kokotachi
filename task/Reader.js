import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionItem from '../components/SectionItem';
import ReaderItem from '../components/ReaderItem';
import { ReaderData } from '../data/Data';
import { withNavigation } from 'react-navigation';

class Reader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    compare = button => {
        var screen = ""
        if (button === "Tuyển dụng") {
            screen = "Job"
        }
        else if (button === "Thông tin") {
            screen = "Apartment"
        }
        else if (button === "Xã hội") {
            screen = "Cosmetic"
        }
        else if (button === "Chia sẽ") {
            screen = "Cosmetic"
        }
        return screen;
    };

    handleNavigation = () => {
        this.props.navigation.navigate("Detail", {
            data: {
                title: 'Công việc',
                uri: 'https://kokotachi.com/images/assets/title-icon-01.png',
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionItem
                    uri={{ uri: 'https://kokotachi.com/images/assets/title-icon-01.png' }}
                    title="Nhiều người đọc"
                    button="Xem thêm"
                    onPress={this.handleNavigation}
                />
                <View style={{ marginTop: 60 }}>
                    {
                        ReaderData.map(item => {
                            return (
                                <ReaderItem
                                    key={item.id}
                                    data={item}
                                    info={item}
                                    screen={this.compare(item.button)}
                                />
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 60,
    },

});

export default withNavigation(Reader);
