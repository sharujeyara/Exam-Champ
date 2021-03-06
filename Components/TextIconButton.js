import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Styles } from 'react-native-dots-pagination/styles';
import { FONTS, COLORS } from "../constants";


const TextIconButton = ({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    onPress,
    onSubmit
}) => {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            ...containerStyle
        }}
            onPress={onPress}
            onSubmit={onSubmit}
        >

            {iconPosition == "LEFT" &&
                <Image source={icon}
                    style={{
                        ...styles.image,
                        ...iconStyle
                    }}
                />
            }

            <Text style={{
                fontSize: 16,
                ...labelStyle
            }}
            >
                {label}
            </Text>

            {iconPosition == "RIGHT" &&
                <Image source={icon}
                    style={{
                        ...styles.image,
                        ...iconStyle
                    }}
                />
            }

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 5,
        width: 20,
        height: 20,
        tintColor: COLORS.black
    }
})
export default TextIconButton;
