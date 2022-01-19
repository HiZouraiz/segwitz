import React from "react";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    BackHandler,
} from "react-native";
import { Sizes } from "../../constants/styles";

export default class NewsScreen extends React.Component {
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
        return true;
    };


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <StatusBar translucent backgroundColor='#FA6400' />

                <View style={{ flex: 1, paddingHorizontal: Sizes.fixPadding * 2.0, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>News</Text>
                </View>

            </SafeAreaView>
        )
    }
}


NewsScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}
