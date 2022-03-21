import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES, FONTS, icons } from '../constants';


const ExamDetailsCard = ({ containerStyle, course, onPress }) => {
    return (
        

            <TouchableOpacity style={{
                flexDirection: "row",
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                borderWidth: 1,
                borderRadius: 10,
                height: 100,
                borderColor: COLORS.white,
                paddingTop: 5,
                backgroundColor: '#FFFFFF',
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowOpacity: 0.8,
                elevation: 6,
                shadowRadius: 15 ,
                shadowOffset : { width: 1, height: 13},
                ...containerStyle,
            }}
            onPress={onPress }
            >
               <View style={{marginTop: 5 }}>
                <View >
                    <Ionicons name="book-sharp" size={24} color={COLORS.primary} />
                </View>

                <View 
                >
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                       Details
                    </Text>  
                </View>

                

                </View>
                
            </TouchableOpacity>
       
    )
}

export default ExamDetailsCard;