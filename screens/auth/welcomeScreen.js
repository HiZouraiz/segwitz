import React, { Component, useState } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
    BackHandler,
} from "react-native";
import { withNavigation } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Sizes, Fonts } from "../../constants/styles";
import IntlPhoneInput from 'react-native-intl-phone-input';

class LoginScreen extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        BackHandler.exitApp();
        return true;
    };

    render() {
        return (
            <Login navigation={this.props.navigation} />
        )
    }
}

const Login = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../../assets/images/bg2.jpg')}
                resizeMode="cover"
            >
                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    colors={['black', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0)',]}
                    style={styles.pageStyle}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        {title()}
                        {description()}

                    </ScrollView>

                    {loginWithFacebookButton()}
                    {loginWithEmailButton()}
                    {joinTitle()}

                </LinearGradient>
            </ImageBackground>
        </SafeAreaView >
    );

    function title() {
        return (
            <View>
                <Text style={styles.title}>
                    We are your travel partner
                </Text>
            </View>
        )
    }

    function description() {
        return (
            <Text style={styles.description}>
                A large number of partners allows us to provide all kind of services around the world
            </Text>
        )
    }

    function loginWithEmailButton() {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.loginWithEmailButtonStyle}>
                <Image
                    source={require('../../assets/images/email.png')}
                    style={{ height: 35, width: 35, marginLeft: -80 }}
                    resizeMode="cover"
                />
                <Text style={{ ...Fonts.blackColor17Regular, marginLeft: Sizes.fixPadding + 5.0 }}>
                    Log in with Email
                </Text>
            </TouchableOpacity>
        )
    }

    function loginWithFacebookButton() {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.loginWithFacebookButtonStyle}>
                <Image
                    source={require('../../assets/images/facebook.png')}
                    style={{ height: 30.0, width: 30.0, marginLeft: -50 }}
                    resizeMode="cover"
                />
                <Text style={{ ...Fonts.whiteColor17Regular, marginLeft: Sizes.fixPadding + 5.0 }}>
                    Log in with Facebook
                </Text>
            </TouchableOpacity>
        )
    }

    function joinTitle() {
        return (
            <TouchableOpacity>
                <Text style={styles.joinTitle}>
                    Haven't registered yet? <Text style={{ fontWeight: 'bold' }}>Join Now</Text>
                </Text>
            </TouchableOpacity>
        )
    }


}

const styles = StyleSheet.create({
    pageStyle: {
        flex: 1,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding * 5.0,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: 'NotoSans_Regular',
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 30,
    },
    description: {
        fontFamily: 'NotoSans_Regular',
        color: '#ffffff',
        fontSize: 15,
        marginTop: Sizes.fixPadding + 5.0
    },
    loginWithEmailButtonStyle: {
        borderRadius: Sizes.fixPadding * 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor,
        flexDirection: 'row',
        height: 55.0,
        marginBottom: Sizes.fixPadding * 2.0,
        borderColor: '#FA6400',
        borderWidth: 1
    },
    loginWithFacebookButtonStyle: {
        borderRadius: Sizes.fixPadding * 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 6,
        marginBottom: Sizes.fixPadding * 1,
        backgroundColor: '#FA6400',
        flexDirection: 'row',
        height: 55.0,
    },
    joinTitle: {
        color: '#ffffff',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 10

    }
})

LoginScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(LoginScreen);