import React from "react";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    BackHandler,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Sizes } from "../../constants/styles";

export default class AccountScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <StatusBar translucent backgroundColor='#FA6400' />

                <View style={{ flex: 1, paddingHorizontal: Sizes.fixPadding * 2.0, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Profile</Text>
                </View>

            </SafeAreaView>
        )
    }
}


AccountScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}
