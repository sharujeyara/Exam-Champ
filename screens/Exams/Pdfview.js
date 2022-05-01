import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import PDFReader from 'rn-pdf-reader-js'


   


export default function Pdfview() {

   
    const navigation = useNavigation();
    const [SelectedFile, setSelectedFile] = useState()

  

    return (

        <>
            {
                SelectedFile &&
                <PDFReader style={{ flex: 1 }}
                    source={{
                        uri: SelectedFile.file
                    }}
                />
            }
        </>

    );

}