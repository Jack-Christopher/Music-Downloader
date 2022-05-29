import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';
import { GetStyles } from '../styles/GetStyles.js';
import { Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation }) => {

    const styles = GetStyles(["container", "appTitle", "button", "icon", "message", "link"]);

    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>
                Music Downloader
            </Text>
            
            
            <View style={styles.icon}>
                <Icon
                    reverse
                    size={64}
                    name='download'
                    type='ant-design'
                    color='#517fa4'
                />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}


export default HomeScreen;