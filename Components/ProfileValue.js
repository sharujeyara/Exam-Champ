import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    COLORS, FONTS, SIZES, icons
} from '../constants';

const ProfileValue = ({ icon, label, value, onPress }) => {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            height: 80,
            alignItems: 'center'
        }}
            onPress={onPress}
        >
            {/* Icon */}
            <View style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: COLORS.additionalColor11
            }}
            >
                <Image source={icon}
                    resizeMode="contain"
                    style={{ width: 25, height: 25, tintColor: COLORS.primary }}
                />

            </View>

            {/* Label & Value */}
            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                {label &&
                    <Text style={{ color: COLORS.gray30, lineHeight: 22 }}>
                        {label}
                    </Text>
                }

                <Text style={{ fontWeight: 'bold' }}>
                    {value}
                </Text>
            </View>

            {/* Arrow icon */}
            <Image source={icons.right_arrow}
                style={{ width: 15, height: 15 }} />


        </TouchableOpacity>
    )
}

export default ProfileValue;