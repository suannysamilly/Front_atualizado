import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import YoutubeIframe from "react-native-youtube-iframe";

const EnglishIntermediateOne = ({ navigation }) => {

    const handlePressGoBack = () => {
        navigation.navigate('PageEnglish');
    };

    const [text, setText] = useState('');

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressGoBack}>
                    <Image source={require('../../images/GoBack.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.goBackText}>Inglês</Text>
            </View>
            <View style={styles.iframe}>
                <YoutubeIframe
                    videoId="fVZhgNAXMd0"
                    height={220}
                />
            </View>
            <View style={styles.dotsContainer}>
                <View style={styles.dot} />
                <View style={[styles.dot, styles.activeDot]} />
            </View>
            <View>
                <Text style={styles.text}>Suas Anotações</Text>
                <TextInput
                    placeholder="Escreva seu resumo aqui..."
                    value={text}
                    onChangeText={setText}
                    style={styles.input}
                />
            </View>
            <View style={styles.buttons}>

                <TouchableOpacity style={styles.buttonNext} onPress={handlePressGoBack}>
                    <Text style={styles.buttonTextNext}>Concluir Modulo Básico</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingTop: 10,
            marginBottom: 40,
            justifyContent: 'flex-start',
        },
        backIcon: {
            marginRight: 10,
            width: 24,
            height: 24,
        },
        goBackText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#7B4921',
            textAlign: 'left',
        },
        iframe: {
            padding: 10,
        },
        dotsContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            marginBottom:40,
        },
        dot: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#D3D3D3',
            marginHorizontal: 5,
        },
        activeDot: {
            backgroundColor: '#7B4921',
        },
        text: {
            fontSize: 20,
            color: '#482E1A',
            marginBottom: 5,
            paddingLeft: 20,
        },
        input: {
            height: 200,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
            marginVertical: 10,
            width: '90%',
            alignSelf: 'center',
            textAlignVertical: 'top',
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            marginVertical: 15,
            top: 70,
        },
        buttonNext: {
            width: '50%',
            padding: 15,
            backgroundColor: '#7B4921',
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonTextNext: {
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
        },
    });

export default EnglishIntermediateOne;