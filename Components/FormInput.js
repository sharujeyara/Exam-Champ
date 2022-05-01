import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { COLORS, SIZES, FONTS, icons, dummyData, images, constants } from '../constants';

const FormInput = ({
    containerStyle,
    label,
    multiline,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = 'default',
    autoCompleteType = "off",
    autoCapitalize = 'none',
    errorMsg = ""
}) => {
    return (
        <View style={{ ...containerStyle }}>
            {/* Label & Error msg */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
            >
                <Text style={{
                    fontSize: 14,
                    lineHeight: 22,
                    color: COLORS.gray50,
                }}>
                    {label}
                </Text>

                <Text style={{
                    fontSize: 14,
                    lineHeight: 22,
                    color: COLORS.secondary,
                }}>
                    {errorMsg}
                </Text>


            </View>

            {/* Text Input */}
            <View style={{
                flexDirection: 'row',
                height: 55,
                paddingHorizontall: SIZES.padding,
                marginTop: SIZES.base,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                shadowColor: COLORS.gray90,
                shadowOpacity: 0.8,
                elevation: 6,
                shadowRadius: 15,
                shadowOffset: { width: 1, height: 13 },
            }}
            >
                {prependComponent}

                <TextInput style={{
                    flex: 1,
                    ...inputStyle
                }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray20}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}


                />

                {appendComponent}

            </View>
        </View>
    )
}

export default FormInput;
