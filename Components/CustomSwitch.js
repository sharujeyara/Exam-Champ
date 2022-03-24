import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS, icons, dummyData, images, constants } from '../constants';

const CustomSwitch = (value, onChange) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => onChange(!value)}
        >
            <View style={{ flexDirection: 'row' }}>

                {/* Switch */}
                <View style={value ? styles.switchOnContainer : styles.switchOffContainer}>
                    <View style={{
                        ...styles.dots,
                        backgroundColor:value? COLORS.white: COLORS.gray30
                    }}
                    />

                </View>

                {/* Text */}
                <Text style={{
                    color:value ?COLORS.primary:COLORS.gray30,
                    marginLeft:SIZES.base,
                    fontSize:16,
                    lineHeight:22
                }}
                >
                    Save Me

                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    switchOnContainer: {
        width: 40,
        height: 20,
        paddingRight: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 10,
        backgroundColor: COLORS.primary
    },
    switchOffContainer: {
        width: 40,
        height: 20,
        paddingLeft: 2,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray10,
        borderRadius: 10
    },
    dots: {
        width: 12,
        height: 12,
        borderRadius: 6
    }
})
export default CustomSwitch;
