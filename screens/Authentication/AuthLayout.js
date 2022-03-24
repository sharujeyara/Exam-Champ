import React from 'react'
import { View, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { sub } from 'react-native-reanimated';
import { COLORS, SIZES, FONTS, icons} from '../../constants';

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
    return (
        <View style={{
            flex: 1,
            paddingVertical: SIZES.padding,
            backgroundColor: COLORS.white
        }}>
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{ flex: 1, paddingHorizontal: SIZES.padding }}
            >
                {/* App Name */}
                <View style={{ alignItems: 'center' }}>

                    <Text style={{
                        fontWeight: "bold",
                        color: COLORS.primary,
                        fontSize: 42,
                        lineHeight: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: SIZES.padding*2
                    }}>
                        ExamChamp
                    </Text>

                </View>

                {/* Title & Subtitle */}
                <View style={{
                    marginTop: SIZES.padding,
                    ...titleContainerStyle
                }}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 24,
                        color: COLORS.black,
                        fontWeight: '600'
                    }}>
                        {title}
                    </Text>

                    <Text style={{
                        textAlign: 'center',
                        color: COLORS.gray70,
                        marginTop: SIZES.base,
                        fontSize: 16,
                        lineHeight: 22
                    }}>
                        {subtitle}
                    </Text>

                </View>

                {/* Content/ Children */}
                {children}

            </KeyboardAwareScrollView>

        </View>
    )
}

export default AuthLayout
