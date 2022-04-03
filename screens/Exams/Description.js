import React from 'react'
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
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

import { IconButton, LineDivider, DetailsCard, HorizontalExamCard, TextButton } from '../../Components'

import { COLORS, SIZES, FONTS, icons, dummyData, images } from '../../constants';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const HEADER_HEIGHT = 250;

const Description = ({ navigation, route }) => {

    const { course, detail, sharedElementPrefix } = route.params;

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

        headerSharedValue.value = withDelay(800, withTiming(0, { duration: 500 }))

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
                <SharedElement id={'${sharedElementPrefix}-DetailsCard-Bg-${detail?.id}'}
                    style={[StyleSheet.absoluteFillObject]}
                >
                    <Image source={detail?.thumbnail}
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
                    <Text style={{ textAlign: 'center', color: COLORS.primary3, fontWeight: "bold", fontSize: 28 }}>
                        {detail?.title}
                    </Text>

                </Animated.View>
                {/* 
                {/* Firstshow title */}
                <Animated.View style={[{
                    position: 'absolute',
                    bottom: 70,
                    left: 30
                }, headerHideOnScrollAnimatedStyle]}
                >
                    <SharedElement id={'${sharedElementPrefix}-DetailsCard-Abbreviation-${course?.id}'}
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
                            {detail?.title}
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

    function renderDescription() {
        return (

            <AnimatedFlatList

                ref={flatListRef}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                keyboardDismissMode="on-drag"
                onScroll={onScroll}
                ListHeaderComponent={
                    <ScrollView

                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: SIZES.padding
                        }}>
                        <View style={{ marginTop: 300 }}>
                            <Text style={{
                                color: COLORS.primary3,
                                textAlign: 'justify',
                                marginBottom: 10,
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}>
                                What is SLAS?
                            </Text>
                        </View>

                        <View >
                            <Text style={{
                                color: COLORS.black,
                                textAlign: 'justify',
                                lineHeight: 24,
                                fontSize: 18
                            }}>
                                The administration of coastal areas of Ceylon was carried out by the officers of East India Company operated from Madras since the coastal areas of the island was brought under the control of British in 1796.
                            </Text>
                            <Text style={{
                                color: COLORS.black,
                                textAlign: 'justify',
                                lineHeight: 24,
                                fontSize: 18
                            }}
                            >
                                Further, it has been established as Sri Lanka Administrative Service in 1972 after Sri Lanka became a republic. At present Sri Lanka Administrative Service is implemented as the major civil service of the country.
                            </Text>

                        </View>

                        <View>
                            <Text style={{
                                color: COLORS.primary3,
                                textAlign: 'justify',
                                marginBottom: 10,
                                marginTop: 20,
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}>
                                Qualifications for requirements
                            </Text>
                        </View>

                        <View >
                            <Text style={{
                                color: COLORS.black,
                                textAlign: 'justify',
                                lineHeight: 24,
                                fontSize: 18
                            }}>
                                Shall be a citizen of Sri Lanka, Shall have a excellent moral character
                                and  Shall be physically and mentally fit to serve in any part of the Island.
                                {'\n'}{'\n'}
                                (b) Educational qualifications
                                {'\n'}
                                Shall have possessed a degree from a university recognized by the University Grants
                                Commission or an institution recognized by the University Grants Commission as an
                                institution for awarding degrees.
                                {'\n'}{'\n'}
                                Note: Effective date of the degree shall be a date on or before the application closing
                                date.
                                {'\n'}{'\n'}
                                (c) Age
                                {'\n'}
                                Shall not be less than twenty two (22) years of age and not have reached 28 years of age
                                on the application closing date.
                                {'\n'} {'\n'}
                                (d) Restrictions regarding qualifications
                                {'\n'}
                                i. No person is allowed to sit the open competitive examination for more than two (2)
                                sittings. (Number of sittings at the examinations to recruit Grade III of Sri Lanka
                                Administrative Service under previous service minutes will not be considered)
                                {'\n'} {'\n'}
                                ii. Requisite qualifications for this examination shall have been completed in every
                                aspect by on or before the application closing date.
                                {'\n'} {'\n'}
                                iii. No person ordained in any religious sect shall be permitted to apply or sit for this
                                competitive examination.

                            </Text>
                        </View>

                        <View>
                            <Text style={{
                                color: COLORS.primary3,
                                textAlign: 'justify',
                                marginBottom: 10,
                                marginTop: 10,
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}>
                                Open for the application
                            </Text>

                            <TextButton
                                label="Apply"
                                labelStyle={{ fontSize: 24, lineHeight: 24 }}
                               
                                contentContainerStyle={{
                                    height: 55,
                                    alignItems: 'center',
                                
                                    borderRadius: SIZES.radius,
                                    marginBottom:SIZES.padding
                                  
                                }}

                                onPress={() => {}}

                            />
                        </View>


                    </ScrollView>
                }


            />








        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>

            {/* Description */}
            {renderDescription()}

            {/* Header */}
            {renderHeader()}
        </View>
    )
}


export default Description;

