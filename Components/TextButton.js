import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

import {
    COLORS, FONTS
} from '../constants';

const TextButton = ({ contentContainerStyle, disabled, label, labelStyle, onPress, onClick, onSubmit }) => {
    return (
        <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            ...contentContainerStyle
        }}
            disabled={disabled}
            onPress={onPress}
            onClick={onClick}
            onSubmit={onSubmit}
        >
            <Text style={{
                color: COLORS.white,
                fontWeight:'bold',
                lineHeight:22,
                ...labelStyle
            }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton;