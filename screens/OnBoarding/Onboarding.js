import React from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground,
    Animated
} from 'react-native'
import { TextButton } from '../../Components';
import { useNavigation } from '@react-navigation/native';


import { COLORS, SIZES, FONTS, icons, dummyData, images, constants } from '../../constants';

const OnBOarding = () => {

    const navigation = useNavigation(); 

    const scrollX = new Animated.Value(0)
    const flatListRef = React.useRef()

    // const [currentIndex, setCurrentIndex] = React.useState(0)

    // const onViewChangeRef = React.useRef(({ viewableItems, changed }) => {
    //     setCurrentIndex(viewableItems[0].index)
    // })

    const Dots = () => {
        const dotPosition = Animated.divide(scrollX, SIZES.width)
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {
                    constants.onboarding_screens.map((item, index) => {
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.additionalColor11, COLORS.primary, COLORS.additionalColor11],
                            extrapolate: 'clamp'
                        })

                        const dotWidth = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: 'clamp'
                        })



                        return (
                            <Animated.View
                                key={'dot-${index}'}
                                style={{
                                    borderRadius: 5,
                                    marginHorizontal: 6,
                                    width: dotWidth,
                                    height: 10,
                                    BackgroundColor: dotColor
                                }}
                            />

                        )
                    })
                }
            </View>
        )
    }



    function renderFooter() {
        return (
            <View style={{ height: 160 }} >

                {/* Pagination/Dots */}
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Dots />
                </View>

                {/* Buttons */}
                {/* {currentIndex > constants.onboarding_screens.length + 1 && */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: SIZES.padding,
                        marginVerticalL: SIZES.padding,
                        marginBottom: SIZES.padding
                    }}>
                        <TextButton
                            label='Skip'
                            contentContainerStyle={{ backgroundColor: null }}
                            labelStyle={{ color: COLORS.gray60 }}
                            onPress={() => navigation.navigate("SignIn")}

                        />
                        <TextButton
                            label='Next'
                            contentContainerStyle={{ height: 60, width: 200, borderRadius: SIZES.radius }}
                            onPress={() => {
                                let index = Math.ceil(Number(scrollX._value / SIZES.width))

                                if (index < constants.onboarding_screens.length - 1) {
                                    // Scroll to the next item
                                    flatListRef?.current?.scrollToIndex({
                                        index: index + 1,
                                        animated: true
                                    })
                                }
                                else {
                                    navigation.navigate('SignIn')
                                }
                            }}
                        />
                    </View>

                
                {/* {currentIndex == constants.onboarding_screens.length - 1 &&
                    <View style={{
                        paddingHorizontal: SIZES.padding,
                        marginVertical: SIZES.padding
                    }}
                    >
                        <TextButton
                            label="Let's Get Started"
                            contentContainerStyle={{ height: 60, borderRadius: SIZES.radius }}
                            onPress={() => navigation.replace("SignIn")}
                        />

                    </View>
                } */}
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>


            <Animated.FlatList
                ref={flatListRef}
                horizontal
                pagingEnabled
                data={constants.onboarding_screens}
                scrollEventThrottle={16}
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                // pagination dots
                onScroll={Animated.event(
                    [
                        { nativeEvent: { contentOffset: { x: scrollX } } }
                    ],
                    { useNativeDriver: false }
                )}
             
                keyExtractor={(item) => '${item.id}'}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ width: SIZES.width }}>

                            {/* Header */}
                            <View style={{ flex: 3 }}>

                                <ImageBackground
                                    source={item.backgroundImage}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                >
                                    <View style={{
                                        position: 'absolute',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        left: 0,
                                        right: 0,
                                        top: 100

                                    }}
                                    >
                                        <Text style={{
                                            fontSize: 42,
                                            color: COLORS.primary,
                                            fontWeight: 'bold',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontStyle: 'italic'


                                        }}>
                                            Exam Champ
                                        </Text>

                                    </View>


                                    <Image source={item.bannerImage}
                                        resizeMode='contain'
                                        style={{
                                            width: SIZES.width * 0.8,
                                            height: SIZES.width * 0.8,
                                            marginBottom: -SIZES.padding,
                                            alignItems: 'center',
                                            justifyContent: 'center',

                                        }}
                                    />
                                </ImageBackground>
                            </View>

                            {/* Detail */}
                            <View style={{
                                flex: 1,
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: SIZES.radius
                            }}
                            >
                                <Text style={{
                                    fontSize: 25,
                                    fontWeight: 'bold'
                                }}
                                >
                                    {item.title}
                                </Text>

                                <Text style={{
                                    fontSize: 20,
                                    marginTop: SIZES.radius,
                                    textAlign: 'center',
                                    color: COLORS.gray70,
                                    paddingHorizontal: SIZES.padding,
                                }}
                                >
                                    {item.description}
                                </Text>

                            </View>
                        </View>
                    )
                }}
            />

            {renderFooter()}


        </View>
    )
}

export default OnBOarding;
