import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'

import { Foundation } from '@expo/vector-icons';
import Search from './Search';
import Profile from './Profile';



const BottomTab = () => {
    const Tab = createBottomTabNavigator();


    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { height: 60 }
        }} >

            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <View style={{
                        padding: 5,
                        alignItems: "center",
                        justifyContent: "center"

                    }}>
                        <Foundation name="home" size={37}
                            color={focused ? "#19B4BF" : "#9b9b99"} />

                        {/* <Text style={[Styles.bottomText, { color: focused ? "#19B4BF" : "#9b9b99" }]}>Home</Text> */}


                        <Text>Home</Text>
                    </View>

                )
            }} />

            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <View style={{
                        padding: 5,
                        alignItems: "center",
                        justifyContent: "center"

                    }}>
                        <Foundation name="home" size={37}
                            color={focused ? "#19B4BF" : "#9b9b99"} />

                        {/* <Text style={[Styles.bottomText, { color: focused ? "#19B4BF" : "#9b9b99" }]}>Home</Text> */}


                        <Text>Home</Text>
                    </View>

                )
            }} />

            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <View style={{
                        padding: 5,
                        alignItems: "center",
                        justifyContent: "center"

                    }}>
                        <Foundation name="home" size={37}
                            color={focused ? "#19B4BF" : "#9b9b99"} />

                        {/* <Text style={[Styles.bottomText, { color: focused ? "#19B4BF" : "#9b9b99" }]}>Home</Text> */}


                        <Text>Home</Text>
                    </View>

                )
            }} />

        </Tab.Navigator>

    )
}

export default BottomTab




