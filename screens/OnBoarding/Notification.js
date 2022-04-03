import React from 'react'
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';

import { COLORS, images, SIZES } from '../../constants';


const Notification = ({ navigation }) => {

    // Back Handler
    function backHandler() {
        navigation.goBack()
    }

    function renderHeader() {

        return (
            <Animated.View style={{
                flex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 300,
                overflow: 'hidden'

            }}
            >
                {/* Background Image */}

                <Image source={images.bg_1}
                    resizeMode='cover'
                    style={{
                        position: 'absolute',
                        height: 110,
                        width: "100%",
                        borderBottomLeftRadius: 50
                    }}
                />


                {/* Title */}
                <Animated.View style={{
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    right: 0
                }}
                >
                    <Text style={{ textAlign: 'center', color: COLORS.primary3, fontWeight: "bold", fontSize: 26 }}>
                        Notifications
                    </Text>

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


            </Animated.View>
        )
    }

    function renderResults() {
        return (
            <View>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding,
                    borderWidth: 1,
                    borderRadius: 10,
                    height: 70,
                    borderColor: COLORS.white,
                    paddingTop: 5,
                    backgroundColor: '#FFFFFF',
                    shadowColor: 'rgba(0, 0, 0, 0.8)',
                    shadowOpacity: 0.8,
                    elevation: 6,
                    shadowRadius: 15,
                    shadowOffset: { width: 1, height: 13 },
                    marginRight: SIZES.radius,
                    marginLeft: SIZES.radius

                }}
                    onPress={() => { }}
                >


                    {/* Title */}


                    <View style={{
                        flex: 1, marginTop: 10

                    }}>
                        <Text style={{ color: COLORS.black, fontWeight: '500', fontSize: 18, lineHeight: 20 }}>
                            Applications are open for SLAS
                        </Text>

                        <Text style={{ fontSize: 14, lineHeight: 22, color: COLORS.gray60, fontWeight: 'bold' }}>
                            Closing Date: 24.04.2022
                        </Text>

                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: "row",
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    borderWidth: 1,
                    borderRadius: 10,
                    height: 70,
                    borderColor: COLORS.white,
                    paddingTop: 5,
                    backgroundColor: '#FFFFFF',
                    shadowColor: 'rgba(0, 0, 0, 0.8)',
                    shadowOpacity: 0.8,
                    elevation: 6,
                    shadowRadius: 15,
                    shadowOffset: { width: 1, height: 13 },
                    marginRight: SIZES.radius,
                    marginLeft: SIZES.radius

                }}
                    onPress={() => { }}
                >


                    {/* Title */}

                    <View style={{
                        flex: 1, marginTop: 10

                    }}>
                        <Text style={{ color: COLORS.black, fontWeight: '500', fontSize: 18, lineHeight: 20 }}>
                            Find new model papers for boc exam
                        </Text>

                        <Text style={{ fontSize: 14, lineHeight: 22, color: COLORS.gray60, fontWeight: 'bold' }}>
                            Banking Exam
                        </Text>

                    </View>


                </TouchableOpacity>

            </View>

        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>


            {/* Header */}
            {renderHeader()}

            {/* Results */}
            {renderResults()}
        </View>
    )
}


export default Notification;
