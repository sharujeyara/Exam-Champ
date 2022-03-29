import React from 'react'
import { View, Text, Alert, Image } from 'react-native'
import { AuthLayout } from "../";
import { COLORS, SIZES, FONTS, icons, dummyData, images, constants } from '../../constants';
import { FormInput, CustomSwitch, TextButton, TextIconButton } from "../../Components"
import { utils } from "../../utils"
import { auth } from '../../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';


const ForgotPassword = ({ navigation }) => {

    const handleSubmit = async (e) => {
        sendPasswordResetEmail(auth, email)

            .then((re) => { Alert.alert('Hey!!', "Email sent, Check your mail") },
            )
            .then((re) => { navigation.navigate("SignIn") }
            )
            .catch((error) => {
                Alert.alert('Hey!!', "Email provided is incorrect")
            })

    }

    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")


    function isEnableSendEmail() {
        return email != "" && emailError == ""
    }

    return (
        <AuthLayout
            title="Password Recovery"
            subtitle="Please enter your email addressto recover your password"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2,
                marginBottom: SIZES.padding
            }}
        >

            {/* Form Input */}
            <View style={{
                flex: 1,
                marginTop: SIZES.padding * 2
            }}>
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

            </View>

            {/* Button */}
            <TextButton
                label="Send Email"
                labelStyle={{ fontSize: 24, lineHeight: 24 }}
                disabled={isEnableSendEmail() ? false : true}
                contentContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimary
                }}
                onPress={handleSubmit}

            />

        </AuthLayout>
    )
}

export default ForgotPassword
