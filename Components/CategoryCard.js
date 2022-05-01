import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';

import { SharedElement } from "react-navigation-shared-element"
import {
    COLORS, SIZES, FONTS, icons
} from '../constants';

const CategoryCard = ({ sharedElementPrefix, category, containerStyle, onPress }) => {

    useEffect(() => {
        console.log(category)
    }, [])
    
    return (


        <TouchableOpacity onPress={onPress}
            style={{ height: 150, width: 200, ...containerStyle }}
        >
            {/* Image Background */}
            <SharedElement id={'${sharedElementPrefix}-CategoryCard-Bg-${category?.id}'}
                style={[StyleSheet.absoluteFillObject]}
            >
                <Image source={{ uri: category.Bg }}
                    resizeMode='cover'
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: SIZES.radius
                    }}
                    imageStyle={{ borderRadius: SIZES.radius }}
                />

            </SharedElement>

            {/* Title */}
            <SharedElement id={'${sharedElementPrefix}-CategoryCard-Title-${category?.id}'}
                style={[StyleSheet.absoluteFillObject]}
            >
                <View style={{ position: 'absolute', bottom: 45, left: 20 }}>
                    <Text style={{
                        position: 'absolute',
                        color: COLORS.white,
                        fontWeight: 'bold', fontSize: 26,
                        lineHeight: 26
                    }}>
                        {category.C_Name}
                    </Text>
                </View>

            </SharedElement>

        </TouchableOpacity>
    )
}

export default CategoryCard;