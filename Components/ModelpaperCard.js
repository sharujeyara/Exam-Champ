import React, {useEffect} from 'react';
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


const ModelpaperCard = ({ containerStyle, exam, onPress }) => {

   

    return (

        <TouchableOpacity style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            borderWidth: 1,
            borderRadius: 10,
            height: 80,
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
                marginTop: 14,
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
                    flex: 1, marginLeft: 85, marginTop: 30

                }}>
                    <Text style={{ color: COLORS.black, fontWeight: 'bold', fontSize: 18, lineHeight: 20 }}>
                        Modelpaper - 01
                    </Text>

                </View>
            </SharedElement>




        </TouchableOpacity>

    )
}

export default ModelpaperCard;