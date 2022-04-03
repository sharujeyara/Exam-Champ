import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    COLORS, SIZES, FONTS, icons
} from '../constants';

const VerticalExamCard = ({ containerStyle, course, onPress}) => {
    return (
        <TouchableOpacity style={{
            width: 180,
            ...containerStyle
        }}
        onPress={onPress}>

            {/* Thumbnail */}
            <Image source={course.thumbnail}
                resizeMode='cover'
                style={{
                    width: '100%',
                    height: 170,
                    marginBottom: 10,
                    borderRadius: SIZES.radius
                }}
            />

            {/* Details */}
            <View style={{
               
                flex:1
            
            }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:20,
                        color:'#33354E'
                    }}>
                        {course.title}
                    </Text>


                </View>

            </View>

        </TouchableOpacity>
    )
}

export default VerticalExamCard;
