import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SharedElement } from "react-navigation-shared-element"

import { COLORS, SIZES, FONTS, icons } from '../constants';


const HorizontalExamCard = ({ containerStyle, course, onPress }) => {
    return (


        <TouchableOpacity style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            borderWidth: 1,
            borderRadius: 10,
            height: 90,
            borderColor: COLORS.white,
            paddingTop: 5,
            backgroundColor: '#FFFFFF',
            shadowColor: 'rgba(0, 0, 0, 0.8)',
            shadowOpacity: 0.8,
            elevation: 6,
            shadowRadius: 15,
            shadowOffset: { width: 1, height: 13 },
            ...containerStyle,
        }}
            onPress={onPress}
        >
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: COLORS.additionalColor11

            }}
            >
                <Ionicons name="book-sharp" size={24} color={COLORS.primary} />
            </View>

            {/* Title */}
            <SharedElement id={'${sharedElementPrefix}-HorizontalExamCard-Title-${course?.id}'}
                style={[StyleSheet.absoluteFillObject]}
            >
                <View style={{
                     flex: 1, marginLeft: 85, marginTop:15 
                   
                }}>
                    <Text style={{ color: COLORS.black, fontWeight: 'bold', fontSize: 18, lineHeight: 20 }}>
                        {course?.title}
                    </Text>


                   

                        <Text style={{ fontSize: 14, lineHeight: 22, color: COLORS.gray60, fontWeight: 'bold' }}>
                            {course?.abbreviation}
                        </Text>

                   
                </View>
            </SharedElement>




        </TouchableOpacity>

    )
}

export default HorizontalExamCard;