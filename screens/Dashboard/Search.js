import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView
} from 'react-native';

import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native"
import Animated from 'react-native-reanimated';
// import { Animated, Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import { TextButton, CategoryCard } from '../../Components';
import { COLORS, SIZES, FONTS, constants, icons, dummyData, images } from '../../constants';
import { collection, onSnapshot ,orderBy, query} from "firebase/firestore";
import { db } from "../../firebase"


const Search = () => {


    const [category, setCategory] = useState(null)

    const getCategory = () => {
        try {
            const ref = collection(db, "Categories")
            const q = query(ref,  orderBy("C_Name", "desc"));
            onSnapshot(q, (snapshot) =>
                setCategory((snapshot.docs.map((cat) => ({ id: cat.id, ...cat.data() }))))
            )

        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getCategory()
        // console.log(category[0])
    }, [])

    const navigation = useNavigation();

    const scrollViewRef = React.useRef()

    function renderTopSearchers() {
        return (
            <View style={{ marginTop: SIZES.padding }}>
                <Text style={{
                    marginHorizontal: SIZES.padding,
                    lineHeight: 30,
                    fontWeight: 'bold',
                    fontSize: 28
                }}>
                    Top Searches

                </Text>

                <FlatList horizontal
                    data={dummyData.top_searches}
                    pagingEnabled
                    listKey='TopSearches'
                    keyExtractor={item => 'TopSearches-${item.id}'}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: SIZES.radius }}
                    renderItem={({ item, index }) => (
                        <TextButton key={index}
                            label={item.label}
                            contentContainerStyle={{
                                paddingVertical: SIZES.radius,
                                paddingHorizontal: SIZES.padding,
                                marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                                marginRight: index == dummyData.top_searches.length - 1 ? SIZES.padding : 0,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.gray10
                            }}
                            labelStyle={{
                                color: COLORS.gray50,
                                fontWeight: 'bold',
                                lineHeight: 22
                            }}
                        />
                    )}
                />
            </View>
        )
    }

    function renderBrowseCategories() {
        return (
            <View style={{ marginTop: SIZES.padding }}>
                <Text style={{
                    marginHorizontal: SIZES.padding,
                    lineHeight: 30,
                    fontWeight: 'bold',
                    fontSize: 24
                }}>
                    Browse Categories
                </Text>

                {/* {category && category.map((item, index) => (
                    <CategoryCard key={item.id}
                        sharedElementPrefix="Search"
                        category={item}
                        containerStyle={{
                            height: 130,
                            width: 350,
                            marginTop: SIZES.radius,
                            marginLeft: SIZES.padding
                        }}
                        onPress={() => navigation.navigate("ExamListing", { category: item, sharedElementPrefix: "Search", otherParam: 'anything you want here' })}
                    />
                ))
                } */}


                < FlatList
                    data = {category }
                    numColumns = {0}
                    scrollEnabled = { false}
                    // listKey="BrowseCategories"
                    keyExtractor = { item => 'examitem.id..toString()'}
                contentContainerStyle={{ marginTop: SIZES.radius }}
                renderItem={({ item, index }) => (
                    <CategoryCard key={index}
                        sharedElementPrefix="Search"
                        category={item}
                        containerStyle={{
                            height: 130,
                            width: 350,
                            marginTop: SIZES.radius,
                            marginLeft: SIZES.padding,
                            marginRight:SIZES.padding
                        }}
                        onPress={() => navigation.navigate("ExamListing", { category: item, sharedElementPrefix: "Search", otherParam: 'anything you want here' })}
                    />
                )}

                />
            </View>
        )
    }

    function renderSearchBar() {
        return (
            <Animated.View style={{
                position: 'absolute',
                top: 50,
                left: 0,
                right: 0,
                paddingHorizontal: SIZES.padding,
                height: 50
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: SIZES.width - (SIZES.padding * 2),
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    borderWidth: 2,
                    borderColor: COLORS.gray10
                }}
                >
                    <Image source={icons.search}
                        style={{ width: 25, height: 25, tintColor: COLORS.gray50 }}
                    />

                    <TextInput style={{
                        flex: 1,
                        marginLeft: SIZES.base,
                        lineHeight: 22,
                        fontWeight: 'bold',

                    }}
                        value=""
                        placeholder='Search for Exams'
                        placeholderTextColor={COLORS.gray20}
                    />
                </View>
            </Animated.View>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{ marginTop: 100, paddingBottom: 300 }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                KeyboardDDismissMode='on-drag'
            // onScroll
            // onScrollEndDrag
            >
                {/* TopSearchers */}
                {renderTopSearchers()}

                {/* Browse Categories */}
                {renderBrowseCategories()}

            </ScrollView>

            {/* SearchBar */}
            {renderSearchBar()}
        </View>
    )
}

export default Search;