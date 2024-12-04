import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PageNotFound = ({ navigation }) => {
    const handlePressClass = () => {
        navigation.navigate('PageClass');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../images/NotFound.png')}
                    style={styles.image}
                />
                <Text style={styles.title}>Ops!</Text>
                <Text style={styles.subTitle}>Ainda não temos cursos disponíveis nessa área, confira os cursos disponíveis no botão abaixo.</Text>
                <TouchableOpacity style={styles.button} onPress={handlePressClass}>
                    <Text style={styles.buttonText}>Ver Cursos Disponíveis</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    content: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: '#482E1A',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#482E1A',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#7B4921',
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PageNotFound;
