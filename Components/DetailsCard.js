import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SharedElement } from "react-navigation-shared-element"

import { COLORS, SIZES, FONTS, icons } from '../constants';


const DetailsCard = ({ containerStyle, detail, onPress }) => {
    return (

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
                <MaterialIcons name="description" size={24} color={COLORS.primary} />

            </View>

            {/* Title */}
            <SharedElement id={'${sharedElementPrefix}-DetailsCard-Title-${detail?.id}'}
                style={[StyleSheet.absoluteFillObject]}
            >
                <View style={{
                    flex: 1, marginLeft: 85, marginTop: 23

                }}>
                    <Text style={{ color: COLORS.black,fontWeight:'500', fontSize: 18, lineHeight: 20 }}>
                        {detail.title}
                    </Text>

                </View>
            </SharedElement>

            <View style={{
                flexDirection:'row', 
                marginLeft: 220, 
                marginTop: 15,
            
            }}>
                <MaterialCommunityIcons name="greater-than" size={24} color="black" />
            </View>


        </TouchableOpacity>
    )
}
export default DetailsCard
