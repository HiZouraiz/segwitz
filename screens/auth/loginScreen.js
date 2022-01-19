import React from "react";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    AsyncStorage,
    ScrollView,
    TouchableOpacity,
    Image,
    BackHandler,
    TextInput,
} from "react-native";
import { Sizes, Fonts } from "../../constants/styles";

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    login = async () => {
        const { email, password } = this.state;
        if (email == 'demo@gmail.com' || password == '123456') {

            let TOKEN = `${123456}`;
            AsyncStorage.setItem('TOKEN', TOKEN);

            this.props.navigation.navigate('BottomTabBar');

        } else {
            alert('Invalid Email & Password!');
            return;
        }
    }


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        this.props.navigation.goBack(null);
        return true;
    };


    fields() {
        return (
            <View style={{ padding: 10, marginVertical: Sizes.fixPadding * 5.0, marginBottom: 20 }}>

                <Text style={[styles.inputLabel, { marginBottom: 10 }]}>Email</Text>

                <TextInput
                    style={{ ...Fonts.whiteColor17Regular, ...styles.textFieldContentStyle, color: '#000000' }}
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder="mail@mail.com"
                    placeholderTextColor="#EAEAEA"
                />

                <Text style={styles.inputLabel}>Password</Text>

                <TextInput
                    style={{ ...Fonts.whiteColor17Regular, ...styles.textFieldContentStyle, color: '#000000', marginTop: 10 }}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder="**********"
                    placeholderTextColor="#EAEAEA"
                    secureTextEntry={true}
                />
            </View >
        )
    }

    button() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.login()}
                style={styles.startButtonStyle}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <StatusBar translucent backgroundColor='#ffffff' />

                <View style={{ flex: 1, paddingHorizontal: Sizes.fixPadding * 2.0 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <Image style={styles.logo} source={require('../../assets/logo_text.jpg')} />

                        {this.fields()}
                        {this.button()}

                        <TouchableOpacity>
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

            </SafeAreaView>
        )
    }
}



const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 60,
        marginTop: 130,
        marginBottom: 20,
        alignSelf: 'center'
    },
    textFieldContentStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        backgroundColor: "#ffffff",
        borderRadius: Sizes.fixPadding * 2.5,
        borderColor: '#FA6400',
        borderWidth: 1,
        marginBottom: Sizes.fixPadding * 0,
        fontSize: 15,
    },
    inputLabel: {
        color: '#2C2C2C',
        fontSize: 17,
        padding: 10,
        marginTop: 10
    },
    startButtonStyle: {
        width: 300,
        height: 50,
        borderRadius: 37.5,
        backgroundColor: '#FA6400',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: Sizes.fixPadding * 4.0
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontFamily: 'NotoSans_Regular',
    },
    forgotText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#2C2C2C',
        fontSize: 17
    }
})

LoginScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}
