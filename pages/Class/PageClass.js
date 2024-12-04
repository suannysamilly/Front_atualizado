import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image, TextInput } from 'react-native';

const PageClass = ({ navigation }) => {

    const handlePressEnglish = () => {
        navigation.navigate('PageEnglish');
    };
    const handlePressSpanish = () => {
        navigation.navigate('PageSpanish');
    };
    const handlePressTi = () => {
        navigation.navigate('PageTi');
    };
    const handlePressMediation = () => {
        navigation.navigate('PageMediation');
    };
    const handlePressGoBack = () => {
        navigation.navigate('Tabs', { screen: 'Materials' });
    };

    const [text, setText] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressGoBack}>
                    <Image source={require('../../images/GoBack.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.goBackText}>Materiais</Text>
            </View>
            <View style={styles.content}>
                    <Image
                        source={require('../../images/Opinion.png')}
                        style={styles.image}
                    />
                    <Text style={styles.title}>Escolha o curso ideal para você!</Text>
                    <Text style={styles.subTitle}>Expanda seus conhecimentos e aprenda habilidades práticas e aplicáveis ao mercado de trabalho.</Text>
                </View>

                {/* Campo de pesquisa */}
          <View style={styles.search}>
            <TextInput
              placeholder=""
              value={text}
              onChangeText={setText}
              style={styles.input}
            />
            <Image
              source={require('../../images/search.png')}
              style={styles.searchImage}
            />
          </View>

            <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={handlePressEnglish}>
                        <Text style={styles.buttonText}>Inglês</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handlePressSpanish}>
                        <Text style={styles.buttonText}>Espanhol</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handlePressTi}>
                        <Text style={styles.buttonText}>Tecnologia e Programação</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handlePressMediation}>
                        <Text style={styles.buttonText}>Comunicação e Mediação</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        marginBottom: 100,
    },
    backIcon: {
        marginRight: 15,
        width: 24,
        height: 24,
    },
    goBackText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7B4921',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 14,
        width: '80%',
        textAlign: 'center',
        marginBottom: 20,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#7B4921',
        borderRadius: 30,
        padding: 5,
        marginBottom: 40,
        width: '98%',
        height: 40,
      },
      input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
        color: '#000',
      },
      searchImage: {
        width: 24,
        height: 24,
        marginRight: 10,
      },
    buttonsContainer: {
        width: '100%',
    },
    button: {
        width: '98%',
        height: 37,
        backgroundColor: '#7B4921',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 15,
        flexDirection: 'row',
        paddingHorizontal: 15,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default PageClass;
