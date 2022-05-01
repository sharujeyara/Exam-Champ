import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
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

import { COLORS, SIZES, FONTS, icons, dummyData, images } from '../../constants';
import { FormInput, TextButton } from '../../Components';
import { collection, setDoc, doc,serverTimestamp,onSnapshot} from 'firebase/firestore';
import { db } from '../../firebase';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const HEADER_HEIGHT = 250;

const Feedback = ({ navigation }) => {

    const [feedback, setFeedback] = useState([]);
    const [User, setUser] = useState()


    // const getuser = async () =>
    // {
    //   try {
    
    //     const ref = doc(db, "users")
    //     onSnapshot(ref, (snapshot) => {
    //         // console.log(snapshot.data())
    
    //         setUser(snapshot.data())
                   
    //         })
    //     console.log(User)
        
    //   }
    //   catch (error) {
    //     console.log(error)
    //   }
      
    // }
      
    

    const submitFeedback = async () => {
   
        const Ref = collection(db, "Feedback")
        
        await setDoc(doc(Ref),
          {
            
            review: feedback,
            
          }).then(
          navigation.goBack()
            
          ).catch((error) =>
            console.log(error))
        
      }
    //   useEffect(() => {
    //    getuser()
       
       
    //   }, [])

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
                    <Image source={require("../../assets/images/bg_1.png")}
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
                            fontSize: 40,
                            lineHeight: 40
                        }}
                        >
                            Feedback
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
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 320,
                marginBottom: SIZES.base
            }}
            >
                <View style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2,
                    marginRight: SIZES.padding,
                    marginLeft: SIZES.padding
                }}
                >


                    <TextInput
                        style={{
                            fontSize: 18,
                            color: COLORS.black,
                            marginTop: 15,
                            paddingBottom: 10,
                            borderBottomWidth: 0.7,
                            borderColor: "#b6b6b6",
                            height: 150,
                            margin: 5,
                            padding: 10,
                            flexDirection: 'row',
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.white,
                            shadowColor: COLORS.gray90,
                            shadowOpacity: 0.8,
                            elevation: 6,
                            shadowRadius: 15,
                            shadowOffset: { width: 1, height: 13 },
                        }}
                        pointerEvents="none" 
                        value={feedback}
                        onChangeText={(value) => setFeedback(value)}
                        multiline
                        autoCapitalize='characters'
                        placeholder='Give feedback about this app'
                        keyboardType='default'
                        
                        appendComponent={
                            <View style={{
                                justifyContent: 'center',
                                marginHorizontal: SIZES.padding,


                            }}
                            >

                            </View>
                        }
                    />

                    <TextButton
                        label="Submit"
                        labelStyle={{ fontSize: 24, lineHeight: 24 }}
                        contentContainerStyle={{
                            height: 55,
                            alignItems: 'center',
                            marginTop: SIZES.padding,
                            borderRadius: SIZES.radius,

                        }}
                        onPress={() => submitFeedback()}


                    />

                </View>

            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>

            {/* Title */}
            {renderResults()}

            {/* Header */}
            {renderHeader()}
        </View>
    )
}


export default Feedback;
