import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { AuthLayout } from "../";
import { COLORS, SIZES, FONTS, icons, dummyData, images, constants } from '../../constants';
import { FormInput, CustomSwitch, TextButton, TextIconButton } from "../../Components"
import { utils } from "../../utils"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


const SignUp = ({ navigation }) => {


    const handleSubmit = async (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then
            ((re) => {
                navigation.navigate("Dashboard") 
                console.log(re)
                // setDoc(doc(db, "users", re.user.uid), {
                //     uid: re.user.uid,
                //     username: username,
                //     email: email,
                //     follower: [],
                //     following: [],
                //     pic: "https://firebasestorage.googleapis.com/v0/b/plannetic-sample.appspot.com/o/profile-img.jpg?alt=media&token=06f86d6b-fa96-41e9-a079-0a56f140768e"
                // });
            })
            .catch((error) => {
                Alert.alert('Hey!!', "email exists")
                console.log(error)
            })

    }



    // createUserWithEmailAndPassword(auth, email, password)
    //         .then((re) => {
    //             // console.log(re);
    //             console.log("Sucessfully signed up");
    //              setDoc(doc(db, "users", re.user.uid), {
    //                 uid: re.user.uid,
    //                 username: username,
    //                  email: email,
    //                  follower: [],
    //                  following: [],
    //                 pic:"https://firebasestorage.googleapis.com/v0/b/plannetic-sample.appspot.com/o/profile-img.jpg?alt=media&token=06f86d6b-fa96-41e9-a079-0a56f140768e"
    //               });
    //         })
    //         .catch((re) => {
    //             console.log(re );
    //     })



    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)

    const [emailError, setEmailError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")

    function isEnableSignUp() {
        return email != "" && username != "" && password != "" && emailError == "" && passwordError == "" && usernameError == ""
    }

    return (
        <AuthLayout
            title="Getting Started"
            subtitle="Create an account to continue!"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >
            {/* From Input And Sign Up */}
            <View style={{
                flex: 1,
                marginTop: SIZES.radius
            }}
            >
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

                    label="Username"
                    containerStyle={{ marginTop: SIZES.radius }}
                    onChange={(value) => {
                        setUsername(value)

                    }}

                    errorMsg={usernameError}
                    appendComponent={
                        <View style={{ justifyContent: 'center', marginHorizontal: SIZES.padding, }}>
                            <Image
                                source={username == "" || (username != "" && usernameError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: username == "" ? COLORS.gray20 : (username != "" && usernameError == "") ? COLORS.primary : COLORS.secondary

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
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)

                    }}
                    errorMsg={passwordError}
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

                {/* Sign UP section */}
                <TextButton
                    label="Sign Up"
                    labelStyle={{ fontSize: 24, lineHeight: 24 }}
                    disabled={isEnableSignUp() ? false : true}
                    contentContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary
                    }}

                    onPress={handleSubmit}

                />

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
                        Already have an account?
                    </Text>

                    <TextButton
                        label="Sign In"
                        contentContainerStyle={{ backgroundColor: null, marginLeft: 3 }}
                        labelStyle={{
                            color: COLORS.primary,
                            fontWeight: 'bold',
                            fontSize: 16,
                            lineHeight: 22
                        }}
                        onPress={() => navigation.goBack()}

                    />

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
                        label="Continue With Google"
                        labelStyle={{
                            marginLeft: SIZES.radius
                        }}
                    // onPress={handleGoogle}

                    />

                </View>


            </View>
            {/* Footer */}

        </AuthLayout>
    )
}

export default SignUp
