
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PageQuestionnairesFour = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (selectedOption) {
            const timer = setTimeout(() => {
                navigation.navigate('PageQuestionnairesFive');
            }, 1300);

            return () => clearTimeout(timer); // Limpar timeout caso o componente seja desmontado
        }
    }, [selectedOption]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Image
                    source={require('../../images/Questions-cuate.png')}
                    style={styles.image}
                />

                <View style={styles.dotsContainer}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>

                <Text style={styles.title}>Qual é a sua escolaridade?</Text>

                <View style={styles.radioContainer}>
                    {['Ensino fundamental incompleto ', 'Ensino fundamental completo  ', 'Ensino médio incompleto', 'Ensino médio completo', 'Ensino superior incompleto ', 'Ensino superior completo ', 'Pós-graduação ou mais'].map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.radioOption,
                                selectedOption === option && styles.selectedOption,
                            ]}
                            onPress={() => setSelectedOption(option)}
                        >
                            <Text style={styles.radioText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%',

    },
    subContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 110,
    },
    image: {
        width: 247,
        height: 265,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
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
    title: {
        color: '#151313',
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    radioContainer: {
        marginTop: 40,
        width: '100%',

    },
    radioOption: {
        borderWidth: 1,
        borderColor: '#7B4921',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal:30,
        marginVertical: 5,
        alignItems: 'center',
    },
    selectedOption: {
        borderColor: '#482E1A',
        backgroundColor: '#F5F5F5',
    },
    radioText: {
        fontSize: 16,
        color: '#151313',
    },
});

export default PageQuestionnairesFour;
