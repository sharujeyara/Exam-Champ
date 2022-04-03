import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { FlatList, } from 'react-native-gesture-handler';

import { COLORS, SIZES, FONTS, constants, icons, dummyData, images } from '../../constants';

import { VerticalExamCard } from "../../Components";

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"


const Home = () => {

    const navigation = useNavigation();

    function renderHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: 70,
                marginBottom: 10,
                paddingHorizontal: SIZES.padding,
                alignItems: 'center'
            }}>
                {/* Greetings */}
                <View style={{
                    flex: 1
                }}>
                    <Text style={{
                        ...FONTS.h2,
                        fontWeight: 'bold',
                        color: '#33354E'
                    }}>
                        Helloooo, ExamChampers!
                    </Text>

                    <Text style={{
                        color: COLORS.gray50,
                        ...FONTS.body3
                    }}>
                        Wednesday, 9th March 2022
                    </Text>
                </View>

                {/* Notifications */}
                <View>
                    <TouchableOpacity 
                     onPress={() => navigation.navigate("Notification")}

                    >
                        <View style={{
                            marginRight: 15
                        }}
                        >

                            <Ionicons name="md-notifications" size={24} color="black" />

                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function renderStartLearning() {
        return (
            <ImageBackground source={images.featured_bg_image}
                style={{
                    alignItems: 'flex-start',
                    padding: 15,
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}
                imageStyle={{ borderRadius: SIZES.radius }}
            >
                {/* Info */}
                <Text style={{
                    color: COLORS.white,
                    ...FONTS.body2
                }}>
                    How to
                </Text>

                <Text style={{
                    color: COLORS.white,
                    ...FONTS.h2
                }}>
                    Make your Exam more visible with our checklist
                </Text>

                <Text style={{
                    color: COLORS.white,
                    marginTop: SIZES.radius,
                    ...FONTS.body4,
                }}
                >
                    Sharu Jeyara
                </Text>

                {/* Image */}
                <Image source={images.start_learning}
                    style={{
                        width: '100%',
                        height: 110,
                        marginTop: SIZES.padding
                    }}
                />

                {/* Button */}
                <TouchableOpacity onPress={() => navigation.navigate("Search")}
                    style={{ borderRadius: 10, paddingVertical: 10, paddingHorizontal: 30, flexDirection: 'row', backgroundColor: '#fff' }}
                  >

                    <Text style={{ marginLeft: 10, color: '#33354E', fontWeight: 'bold' }}>
                        Start Learning
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }

    function renderExams() {
        return (
            <FlatList
                horizontal
                pagingEnabled
                data={dummyData.courses_list_1}
                listKey='Comments'
                keyExtractor={item => 'Comment-${item.id}'}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginTop: SIZES.padding }}
                renderItem={({ item, index }) => (
                    <VerticalExamCard
                        key={index}
                        containerStyle={{

                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.courses_list_1.length - 1 ? SIZES.padding : 0,
                            borderRadius: 50

                        }}
                        course={item}
                        onPress = {() =>navigation.navigate('ExamDetails', {course:item,  sharedElementPrefix:"ExamLisiting"})}

                    />
                )}
            />
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}>
            {/* Header */}
            {renderHeader()}

            {/* Content */}
            <ScrollView contentContainerStyle={{
                paddingBottom: 150
            }}
                showsVerticalScrollIndicator={false}
            >
                {/* Start Learning */}
                {renderStartLearning()}

                {/* Exams */}
                {renderExams()}
            </ScrollView>
        </View>
    )
}

export default Home;