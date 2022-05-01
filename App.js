import React from "react";
import { Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
    MainLayout,
    ExamListing,
    ExamDetails,
    OnBOarding,
    SignIn,
    SignUp,
    ForgotPassword,
    Description,
    Pastpaper,
    ModelPaper,
    Guidance,
    Notification,
    Feedback,
    Pdfview

} from "./screens";


const Stack = createSharedElementStackNavigator();

const options = {
    gestureEnabled: false,
    transitionSpec: {
        open: {
            animation: 'timing',
            config: { duration: 400, easing: Easing.inOut(Easing.ease) }
        },
        close: {
            animation: 'timing',
            config: { duration: 400, easing: Easing.inOut(Easing.ease) }
        }
    },
    cardStyleInterpolator: ({ current: { progress } }) => {
        return {
            cardStyle: { opacity: progress }
        }
    }

}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    useNativeDriver: true,
                    headerShown: false
                }}
                initialRouteName={'OnBoarding'}
                detachInactiveScreens={false}
            >
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBOarding}
                />

                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />

                <Stack.Screen
                    name="Dashboard"
                    component={MainLayout}
                />

                <Stack.Screen
                    name="Notification"
                    component={Notification}
                />



                <Stack.Screen
                    name="ExamListing"
                    component={ExamListing}
                    options={() => options}
                />

                <Stack.Screen
                    name="ExamDetails"
                    component={ExamDetails}
                />

                <Stack.Screen
                    name="Description"
                    component={Description}
                />

                <Stack.Screen
                    name="Pastpaper"
                    component={Pastpaper}
                />

                <Stack.Screen
                    name="ModelPaper"
                    component={ModelPaper}
                />

                <Stack.Screen
                    name="Guidance"
                    component={Guidance}
                />

                <Stack.Screen
                    name="Feedback"
                    component={Feedback}
                />

                <Stack.Screen
                    name="Pdfview"
                    component={Pdfview}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App