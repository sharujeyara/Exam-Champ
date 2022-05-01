import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
    runOnJS
} from 'react-native-reanimated';

import { SharedElement } from "react-navigation-shared-element"

import { Ionicons } from '@expo/vector-icons';

import { IconButton, DetailsCard, DescriptionCard } from '../../Components'

import { COLORS, SIZES, FONTS, icons, dummyData, images } from '../../constants';
import Description from './Description';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase"

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const HEADER_HEIGHT = 250;

const ExamDetails = ({ navigation, route }) => {
    const [detail, setDetail] = useState(null)

    const getDetail = () => {
        try {
            const ref = collection(db, "Categories", exam.id, 'Exams')
            // const q = query(ref, where('category.id', isEqualTo=='Exams'))
            onSnapshot(ref, (snapshot) =>
                setDetail((snapshot.docs.map((de) => ({ id: de.id, ...de.data() }))))
            )

        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getDetail()
    }, [])



    const { course, exam, sharedElementPrefix } = route.params;

    const flatListRef = React.useRef()
    const scrollY = useSharedValue(0)
    const onScroll = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    })

    const headerSharedValue = useSharedValue(80)

    // Back Handler
    function backHandler() {
        navigation.goBack()
    }

    function renderHeader() {

        const inputRange = [0, HEADER_HEIGHT - 50]

        headerSharedValue.value = withDelay(900, withTiming(0, { duration: 900 }))

        // Show popup mobile image
        const headerFadeAnimatedStyle = useAnimatedStyle(() => {
            return {
                opacity: interpolate(headerSharedValue.value, [80, 0], [0, 1])
            }
        })

        // Show fade in Animation in pop up image
        const headerTranslateAnimatedStyle = useAnimatedStyle(() => {
            return {
                transform: [
                    {
                        translateY: headerSharedValue.value
                    }
                ]
            }
        })

        // After Scroll low header height
        const headerHeightAnimatedStyle = useAnimatedStyle(() => {
            return {
                height: interpolate(scrollY.value, inputRange, [HEADER_HEIGHT, 120], Extrapolate.CLAMP)
            }
        })

        // Hide Title and mobile image while scroll
        const headerHideOnScrollAnimatedStyle = useAnimatedStyle(() => {
            return {
                opacity: interpolate(scrollY.value, [80, 0], [0, 1], Extrapolate.CLAMP),
                transform: [
                    {
                        translateY: interpolate(scrollY.value, inputRange, [0, 200], Extrapolate.CLAMP)
                    }
                ]
            }
        })

        // Show title after scroll the page
        const headerShowOnScrollAnimatedStyle = useAnimatedStyle(() => {
            return {
                opacity: interpolate(scrollY.value, [80, 0], [1, 0], Extrapolate.CLAMP),
                transform: [
                    {
                        translateY: interpolate(scrollY.value, inputRange, [50, 130], Extrapolate.CLAMP)
                    }
                ]
            }
        })

        return (
            <Animated.View style={[{
                flex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 300,
                overflow: 'hidden'

            }, headerHeightAnimatedStyle]}
            >
                {/* Background Image */}
                <SharedElement id={'${sharedElementPrefix}-HorizontalExamCard-Bg-${course?.id}'}
                    style={[StyleSheet.absoluteFillObject]}
                >
                    <Image source={{ uri: exam.Bg }}
                        resizeMode='cover'
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: "100%",
                            borderBottomLeftRadius: 60
                        }}
                    />

                </SharedElement>

                {/* Title */}
                {/* After scrolling Title */}
                <Animated.View style={[{
                    position: 'absolute',
                    top: -80,
                    left: 0,
                    right: 0
                }, headerShowOnScrollAnimatedStyle]}
                >
                    <Text style={{ textAlign: 'center', color: COLORS.primary3, fontWeight: "bold", fontSize: 22 }}>
                        {exam.Abbre}
                    </Text>

                </Animated.View>

                {/* Firstshow title */}
                <Animated.View style={[{
                    position: 'absolute',
                    bottom: 70,
                    left: 30
                }, headerHideOnScrollAnimatedStyle]}
                >
                    <SharedElement id={'${sharedElementPrefix}-HorizontalExamCard-Abbreviation-${course?.id}'}
                        style={[StyleSheet.absoluteFillObject]}
                    >
                        <Text style={{
                            position: 'absolute',
                            color: COLORS.primary3,
                            fontWeight: 'bold',
                            fontSize: 36,
                            lineHeight: 40
                        }}
                        >
                            {exam.Abbre}
                        </Text>

                    </SharedElement>

                </Animated.View>

                {/* Back button */}

                <View>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 40,
                            left: 20,
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25,

                        }}
                        onPress={() => { backHandler() }}
                    >

                        <Ionicons name="arrow-back-circle-outline" size={40} color={COLORS.primary3} />

                    </TouchableOpacity>
                </View>

                {/* Popup Image */}
                <Animated.Image source={images.mobile_image}
                    resizeMode="contain"
                    style={[{
                        position: "absolute",
                        right: 40,
                        bottom: -40,
                        width: 100,
                        height: 200
                    },
                        headerFadeAnimatedStyle,
                        headerTranslateAnimatedStyle,
                        headerHideOnScrollAnimatedStyle
                    ]}
                >

                </Animated.Image>

            </Animated.View>
        )
    }

    function renderResults() {
        return (
            <View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 300,
                    marginBottom: SIZES.base
                }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: COLORS.primary3,
                        marginBottom: SIZES.padding,
                        lineHeight: 36,
                        marginLeft: SIZES.padding
                    }}
                    >
                        {exam.Title}
                    </Text>
                </View>

                {/* {detail && detail.map((item, index) => ( */}
                    <DetailsCard 
                    sharedElementPrefix="ExamDetails"
                        // detail={item}
                        containerStyle={{
                            marginVertical: SIZES.padding,
                            marginTop: 5,
                            marginLeft: SIZES.padding,
                            marginRight: SIZES.padding
                        }}
                        onPress={() => navigation.navigate('Description', { sharedElementPrefix: "ExamDetails" })}
                    />
                {/* ))
                } */}

                <DetailsCard
                    detail={Description}
                    containerStyle={{
                        marginVertical: SIZES.padding,
                        marginTop: 5,
                        marginLeft: SIZES.padding,
                        marginRight: SIZES.padding
                    }}
                    onPress={() => navigation.navigate('Pastpaper', { detail: Description, sharedElementPrefix: "ExamDetails" })}
                />

                <DetailsCard
                    detail={Description}
                    containerStyle={{
                        marginVertical: SIZES.padding,
                        marginTop: 5,
                        marginLeft: SIZES.padding,
                        marginRight: SIZES.padding
                    }}
                    onPress={() => navigation.navigate('ModelPaper', { detail: Description, sharedElementPrefix: "ExamDetails" })}
                />

                <DetailsCard
                    detail={Description}
                    containerStyle={{
                        marginVertical: SIZES.padding,
                        marginTop: 5,
                        marginLeft: SIZES.padding,
                        marginRight: SIZES.padding
                    }}
                    onPress={() => navigation.navigate('Guidance', { detail: Description, sharedElementPrefix: "ExamDetails" })}
                />


            </View>

            // <AnimatedFlatList

            //     ref={flatListRef}
            //     data={dummyData.details}
            //     listKey='Details'
            //     keyExtractor={item => 'Details-${item.id}'}
            //     contentContainerStyle={{ paddingHorizontal: SIZES.padding }}
            //     showsHorizontalScrollIndicator={false}
            //     scrollEventThrottle={16}
            //     keyboardDismissMode="on-drag"
            //     onScroll={onScroll}
            //     ListHeaderComponent={
            //         <View style={{
            //             flexDirection: 'row',
            //             alignItems: 'center',
            //             justifyContent: 'center',
            //             marginTop: 300,
            //             marginBottom: SIZES.base
            //         }}>
            //             <Text style={{
            //                 flex: 1,
            //                 fontSize: 22,
            //                 fontWeight: 'bold',
            //                 color: COLORS.primary3,
            //                 marginBottom: SIZES.padding,
            //                 lineHeight: 36
            //             }}>
            //                 {exam.Title}
            //             </Text>
            //         </View>
            //     }
            //     renderItem={({ item, index }) => (
            //         <DetailsCard
            //             sharedElementPrefix="ExamDetails"
            //             detail={item}
            //             containerStyle={{
            //                 marginVertical: SIZES.padding,
            //                 marginTop: 5
            //             }}
            //             onPress={() => navigation.navigate('Description', { detail: item, sharedElementPrefix: "ExamDetails" })}
            //         />


            //         )}

            //         />

        )
    }

    // function renderDescription() {
    //     return (
    //         <View>
    //             {detail && detail.map((item, index) => (
    //                 <DescriptionCard key={item.id}
    //                     sharedElementPrefix="ExamDetails"
    //                     detail={item}
    //                     containerStyle={{
    //                         marginVertical: SIZES.padding,
    //                         marginTop: 5
    //                     }}
    //                     onPress={() => navigation.navigate("Description", { detail: item, sharedElementPrefix: "ExamDetails", otherParam: 'anything you want here' })}
    //                 />
    //             ))
    //             }

    //         </View>
    //     )
    // }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>

            {/* Title */}
            {renderResults()}

            {/* {renderDescription()} */}


            {/* Header */}
            {renderHeader()}
        </View>
    )
}

ExamDetails.sharedElements = (route, otherRoute, showing) => {
    const { courses_list_2, sharedElementPrefix } = route.params;
    return [
        {
            id: '${sharedElementPrefix}-HorizontalExamCard-Bg-${course?.id}'
        },

        {
            id: '${sharedElementPrefix}-HorizontalExamCard-Title-${course?.id}'
        }
    ]
}
export default ExamDetails;
