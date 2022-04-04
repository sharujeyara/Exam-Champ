
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { TextButton, IconButton, LineDivider, ProfileValue } from '../../Components';
import { COLORS, SIZES, FONTS, constants, icons, dummyData, images } from '../../constants';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native"


const Profile = () => {

    const navigation = useNavigation();

    const handlelogout = async (e) => {
        signOut(auth)
            .then((re) => { 
                console.log('The user signed out');
                navigation.push("SignIn");
            }

            )
            .catch((error) => {
                console.log(error)
            })

    }

    function renderHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: 50,
                paddingHorizontal: SIZES.padding,
                justifyContent: 'space-between'
            }}>
                <Text style={{ fontWeight: 'bold', lineHeight: 36, fontSize: 28 }}>
                    Profile
                </Text>

                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                    <MaterialIcons name="wb-sunny" size={24} color="black" />
                </TouchableOpacity>
            </View>
        )
    }

    function renderProfileCard() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.radius,
                paddingVertical: 20,
                borderRadius: 15,
                backgroundColor: COLORS.primary3
            }}
            >
                {/* Profile Imge */}
                <TouchableOpacity style={{ width: 80, height: 80 }}>
                    <Image source={images.profile}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: COLORS.white
                        }}
                    />

                    <View style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}
                    >
                        <View style={{
                            width: 30,
                            height: 30,
                            marginBottom: -15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 15,
                            backgroundColor: COLORS.primary
                        }}
                        >
                            <Image source={icons.camera}
                                resizeMode="contain"
                                style={{ width: 17, height: 17 }}
                            />

                        </View>

                    </View>
                </TouchableOpacity>

                {/* Details */}
                <View style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    alignItems: 'flex-start'
                }}
                >
                    <Text style={{ color: COLORS.white, fontWeight: 'bold', lineHeight: 30, fontSize: 18 }}>
                        Sharuha Jeyarajasingam
                    </Text>

                    <Text style={{ color: COLORS.white, lineHeight: 22, fontSize: 14 }}>
                        (Undergraduate)
                    </Text>

                </View>
            </View>
        )
    }

    function renderProfileSection1() {
        return (
            <View style={styles.profileSectionContainer}>
                <ProfileValue
                    icon={icons.profile}
                    label="Name"
                    // value={name || ""}
                    // onChange={(e) => setName(e.target.value)}
                />

                <LineDivider />

                <ProfileValue
                    icon={icons.email}
                    label="Email"
                    value= {auth.currentUser?.email}
                />

                <LineDivider />

                <ProfileValue
                    icon={icons.password}
                    label="Password"
                    value="Updated two weeks ago"
                />

                <LineDivider />

                <ProfileValue
                    icon={icons.call}
                    label="Contact Number"
                    value="+94770815478"
                />

            </View>
        )
    }

    function renderProfileSection2() {
        return(
            <View>
            <View style={styles.profileSectionContainer}>
                <ProfileValue
                    icon={icons.password}
                    label="Change password"
                    value="Tap to more details"
                />

                
            </View>

            <TextButton
                    label="Log Out"
                    labelStyle={{ fontSize: 24, lineHeight: 24 }}
                    
                    contentContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        
                    }}

                    onPress={handlelogout}

                />
            </View>


            
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>

            {/* Header */}
            {renderHeader()}

            <ScrollView contentContainerStyle={{
                paddingHorizontal: SIZES.padding,
                paddingBottom: 150
            }}>

                {/* Profile Card */}
                {renderProfileCard()}

                {/* Profile Section 1 */}
                {renderProfileSection1()}

                {/* Profile Section2 */}
                {renderProfileSection2()}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    profileSectionContainer: {
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.gray20
    }
})
export default Profile;