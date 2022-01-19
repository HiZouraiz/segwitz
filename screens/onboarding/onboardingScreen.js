import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    BackHandler,
    AsyncStorage
} from "react-native";
import { withNavigation } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Sizes, Fonts } from "../../constants/styles";
import BottomTabBarScreen from "./../../components/bottomTabBarScreen";

class OnboardingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        };
    }

    componentDidMount = async () => {

        const TOKEN = await AsyncStorage.getItem('TOKEN');

        this.setState({
            token: TOKEN
        })

        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        this.props.navigation.pop();
        return true;
    };

    render() {
        if (this.state.token == 123456) {
            return (
                <BottomTabBarScreen />
            )
        } else {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
                    <ImageBackground
                        style={{ flex: 1 }}
                        source={require('../../assets/images/bg.jpg')}
                        resizeMode="cover"
                    >
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                            colors={['black', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)',]}
                            style={styles.pageStyle}
                        >
                            {this.title()}
                            {this.description()}
                            {this.start()}
                        </LinearGradient>
                    </ImageBackground>
                </SafeAreaView >
            )
        }

    }

    description() {
        return (
            <Text style={styles.description}>
                This is a new level of impressions and discoveries for you and your friends
            </Text>
        )
    }

    title() {
        return (
            <View>
                <Text style={styles.title}>
                    Find new{'\n'}places
                </Text>
            </View>
        )
    }

    start() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('Welcome')}
                style={styles.startButtonStyle}>
                <Text style={styles.buttonText}>Explore</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    pageStyle: {
        flex: 1,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'flex-end',
    },
    startButtonStyle: {
        width: 320,
        height: 50,
        borderRadius: 37.5,
        backgroundColor: '#FA6400',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 8.0,
        marginBottom: Sizes.fixPadding * 4.0
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontFamily: 'NotoSans_Regular',
    },
    title: {
        fontFamily: 'NotoSans_Regular',
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    description: {
        fontFamily: 'NotoSans_Regular',
        color: '#ffffff',
        fontSize: 15,
        marginTop: Sizes.fixPadding + 5.0
    }
})

OnboardingScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(OnboardingScreen);