import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AuthLayout } from "../";
import { COLORS, SIZES, FONTS, icons, dummyData, images, constants } from '../../constants';
import { FormInput, CustomSwitch, TextButton, TextIconButton } from "../../Components"
import { utils } from "../../utils"

const SignIn = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == ""
    }


    return (
        <AuthLayout
            title="Let's Sign You In"
            subtitle="Welcome, back, you've been missed"
        >
            <View style={{
                flex: 1,
                marginTop: SIZES.padding * 2
            }}
            >
                {/* Form Inputs */}
                <FormInput
                    label="Email"
                    keyboardType='email-address'
                    autoCompleteType='email'
                    onChange={(value) => {
                        // validate email
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View style={{ justifyContent: 'center', marginHorizontal: SIZES.padding, }}>
                            <Image source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == "" ? COLORS.gray30 : (email != "" && emailError == "") ? COLORS.primary : COLORS.secondary
                                }}
                            />
                        </View>
                    }
                />

                <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{ marginTop: SIZES.radius }}
                    onChange={(value) => setPassword(value)}
                    appendComponent={
                        <TouchableOpacity style={{
                            width: 40,
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}
                            onPress={() => setShowPass(!showPass)}
                        >

                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: password == "" ? COLORS.gray30 : (password !== "") ? COLORS.primary : COLORS.secondary,
                                    marginHorizontal: SIZES.padding
                                }}
                            />

                        </TouchableOpacity>
                    }

                />

                {/* Saveme & Forgot Password */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    justifyContent: 'space-between'
                }}
                >
                    <CustomSwitch
                        value={saveMe}
                        onChange={(value) => setSaveMe(value)}
                    />

                    <TextButton
                        label="Forgot Password"
                        contentContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.gray20,
                            fontSize: 16
                        }}
                        onPress={() => navigation.navigate("ForgotPassword")}

                    />

                </View>

                {/* Sign In */}
                <TextButton
                    label="Sign In"
                    labelStyle={{ fontSize: 24, lineHeight: 24 }}
                    disabled={isEnableSignIn() ? false : true}
                    contentContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary
                    }}
                    onPress={() => navigation.navigate("Dashboard")}

                />

                {/* Sign Up */}
                <View style={{
                    flexDirection: "row",
                    marginTop: SIZES.radius,
                    justifyContent: 'center'
                }}
                >
                    <Text style={{
                        color: COLORS.gray40,
                        fontSize: 16
                    }}
                    >
                        Don't have an account?
                    </Text>

                    <TextButton
                        label="Sign Up"
                        contentContainerStyle={{ backgroundColor: null, marginLeft: 3 }}
                        labelStyle={{
                            color: COLORS.primary,
                            fontWeight: 'bold',
                            fontSize: 16,
                            lineHeight: 22
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                    />

                </View>
            </View>

            {/* Footer */}
            <View>
                {/* FaceBook */}
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: "#1967F9"
                    }}
                    icon={icons.fb}
                    iconPosition='LEFT'
                    iconStyle={{
                        tintColor: COLORS.white,
                        height: 25
                    }}
                    label="Continue With Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => console.log("FB")}
                />

                {/* Google */}
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.gray10

                    }}
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        color: COLORS.secondary
                    }}
                    label="Continue With Google"
                    labelStyle={{
                        marginLeft: SIZES.radius
                    }}
                    onPress={() => console.log("Google")}

                />

            </View>
        </AuthLayout>

    )
}

export default SignIn
