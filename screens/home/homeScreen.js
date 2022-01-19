import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity, FlatList, Dimensions, AsyncStorage } from "react-native";
import { withNavigation } from "react-navigation";
import { Sizes, Colors, Fonts } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const categoryList = [
    {
        id: '1',
        categoryImage: require('../../assets/images/icons/bus.png'),
        categoryName: 'Bus',
    },

    {
        id: '2',
        categoryImage: require('../../assets/images/icons/location.png'),
        categoryName: 'Tour',
    },

    {
        id: '3',
        categoryImage: require('../../assets/images/icons/car.png'),
        categoryName: 'Car',
    },

];
const popularPlacesList = [
    {
        id: '1',
        placeImage: require('../../assets/images/popular_places/miami.jpg'),
        placeName: 'Miami',
    },
    {
        id: '2',
        placeImage: require('../../assets/images/popular_places/singapore.jpg'),
        placeName: 'Singapore',
    },
    {
        id: '3',
        placeImage: require('../../assets/images/popular_places/newyork.jpg'),
        placeName: 'New York',
    },
    {
        id: '4',
        placeImage: require('../../assets/images/popular_places/venice.jpg'),
        placeName: 'Venice',
    },
    {
        id: '5',
        placeImage: require('../../assets/images/popular_places/vietnam.jpg'),
        placeName: 'Vietnam',
    }
];

const { width } = Dimensions.get('screen');

class HomeScreen extends Component {

    state = {
        isSearch: false,
    }

    logout = async () => {
        AsyncStorage.removeItem('TOKEN');
        this.props.navigation.navigate('Welcome')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    ListHeaderComponent={
                        <>
                            {this.userWelcome()}
                            {this.searchTextField()}
                            <View style={{ marginVertical: Sizes.fixPadding * 3.0 }}>
                                {this.title({ title: 'Categories' })}
                                {this.categories()}
                            </View>
                            {this.title({ title: 'Popular Places' })}
                            {this.popularPlaces()}
                            <View style={{ marginVertical: Sizes.fixPadding * 2.0 }}>
                                {this.title({ title: 'Top Trips' })}
                                {this.popularPlaces()}
                            </View>
                        </>
                    }
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={this.renderItem}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 8.0 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    categories() {
        const renderItem = ({ item }) => (
            <TouchableOpacity style={styles.categoryRow} activeOpacity={0.9}>
                <View style={{ width: '30%' }}>
                    <Image
                        source={item.categoryImage}
                        style={{
                            height: 30,
                            width: 30,
                            padding: 10,
                            alignSelf: 'center'
                        }}
                    />
                </View>
                <View style={{ width: '70%' }}>
                    <Text style={styles.categoryText}>{item.categoryName}</Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <View>
                <FlatList
                    horizontal
                    data={categoryList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingLeft: Sizes.fixPadding * 2.0,
                        paddingRight: Sizes.fixPadding
                    }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    popularPlaces() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
            >

                <ImageBackground
                    source={item.placeImage}
                    style={styles.placesImageWrapStyle}
                    borderRadius={Sizes.fixPadding + 7.0}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            'transparent',
                            'transparent',
                            'transparent',
                            'rgba(0,0,0,0.4)',
                            'rgba(0,0,0,0.6)',
                            'rgba(0,0,0,0.7)',
                        ]}
                        style={styles.placesImageShadowWrapStyle}
                    >
                        <Text style={{ ...Fonts.whiteColor17Regular }}>
                            {item.placeName}
                        </Text>

                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        )
        return (
            <View>
                <FlatList
                    horizontal
                    data={popularPlacesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingLeft: Sizes.fixPadding * 2.0,
                        paddingRight: Sizes.fixPadding
                    }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    title({ title }) {
        return (
            <View style={styles.titleWrapStyle}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subTitle}>
                    Explore More
                </Text>
            </View>
        )
    }

    searchTextField() {
        return (
            <View>
                <Text style={styles.whereText}>Where do {'\n'}you want to go<Text style={{ color: '#FA6400' }}>?</Text></Text>
                <View style={styles.searchFieldWrapStyle}>
                    <View style={{ width: '80%' }}>
                        <TextInput
                            placeholder="Search for places..."
                            placeholderTextColor={'#EAEAEA'}
                            style={{
                                flex: 1,
                                ...Fonts.blackColor18Regular
                            }}
                            selectionColor={'#FA6400'}
                            onFocus={() => this.setState({ isSearch: true })}
                            onBlur={() => this.setState({ isSearch: false })}
                        />
                    </View>
                    <View style={{ width: '20%' }}>
                        <MaterialIcons
                            name="search"
                            size={24}
                            color={this.state.isSearch ? "#FA6400" : "#2C2C2C"}
                            style={{ alignSelf: 'center' }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    userWelcome() {
        return (
            <View style={styles.userWelcomeWrapStyle}>
                <View style={{ width: '20%' }}>
                    <Image
                        source={require('../../assets/images/user.png')}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: Sizes.fixPadding + 50.0,
                        }}
                    />
                </View>
                <View style={{ width: '70%' }}>
                    <Text style={styles.username}>Hi, Jhonny!</Text>
                </View>
                <View style={{ width: '10%' }}>
                    <TouchableOpacity onPress={()=> this.logout()}>
                        <Image
                            source={require('../../assets/images/off.png')}
                            style={{
                                height: 25,
                                width: 25,
                                alignSelf: 'flex-end',
                                marginTop: 10
                            }}
                        />
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    categoryRow: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#FA6400',
        padding: 10,
        borderRadius: 50,
        width: 200,
        marginRight: Sizes.fixPadding * 1,
    },
    categoryText: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    username: {
        alignSelf: 'flex-start',
        fontSize: 20,
        paddingTop: 10
    },
    whereText: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        fontSize: 35,
        color: '#2C2C2C',
        fontWeight: 'bold',
        marginVertical: Sizes.fixPadding * 1.0,
        marginBottom: 30
    },
    searchFieldWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        backgroundColor: '#ffffff',
        borderRadius: Sizes.fixPadding + 50,
        height: 55.0,
        borderColor: '#FA6400',
        borderWidth: 1.0,
        paddingLeft: Sizes.fixPadding * 3.0,
    },
    userWelcomeWrapStyle: {
        flexDirection: 'row',
        marginVertical: Sizes.fixPadding * 3.0,
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    title: {
        color: '#000000',
        fontSize: 22,
        fontFamily: 'NotoSans_Bold',
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#9E9E9E',
        fontSize: 15.0,
        fontFamily: 'NotoSans_Regular',
    },
    titleWrapStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: Sizes.fixPadding * 2.0,
    },
    placesImageWrapStyle: {
        width: 155.0,
        height: 180.0,
        justifyContent: 'flex-end',
        marginRight: Sizes.fixPadding,
    },
    placesImageShadowWrapStyle: {
        width: 155.0,
        height: 180.0,
        justifyContent: 'flex-end',
        borderRadius: Sizes.fixPadding + 7.0,
        paddingVertical: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
    },

})

export default withNavigation(HomeScreen);