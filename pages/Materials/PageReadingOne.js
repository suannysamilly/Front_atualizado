import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PageReadingOne = ({ navigation }) => {

  const handlePressGoBack = () => {
    navigation.navigate('Tabs', { screen: 'Materials' });
  };
  const handlePressEnglish = () => {
    navigation.navigate('PageReadingTwo');
  };
  const handlePressSpanish = () => {
    navigation.navigate('PageReadingThree');
  };
  const handlePresTi = () => {
    navigation.navigate('PageReadingFour');
  };
  const handlePressMediation = () => {
    navigation.navigate('PageReadingFive');
  };
  const handlePressDesign = () => {
    navigation.navigate('PageReadingSix');
  };
  const handlePressMarketing = () => {
    navigation.navigate('PageReadingSeven');
  };

  const buttons = [
    { title: 'Livros em Inglês', onPress: handlePressEnglish },
    { title: 'Livros em Espanhol', onPress: handlePressSpanish },
    { title: 'Livros de Tecnologia e Programação', onPress: handlePresTi },
    { title: 'Livros de Comunicação e Mediação', onPress: handlePressMediation },
    { title: 'Livros de Design', onPress: handlePressDesign },
    { title: 'Livros de Marketing Digital', onPress: handlePressMarketing },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePressGoBack}>
          <Image source={require('../../images/GoBack.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.goBackText}>Materiais</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Image
            source={require('../../images/Reading.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Recomendação de Leitura</Text>
          <Text style={styles.subTitle}>Amplie seus horizontes e aprofunde seu conhecimento.</Text>
          <View style={styles.buttons}>
            {buttons.map((button, index) => (
              <TouchableOpacity key={index} style={styles.button} onPress={button.onPress}>
                <Text style={styles.buttonText}>{button.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
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
    width: '60%',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttons: {
    width: '98%',
    marginTop: 50,
  },
  button: {
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

export default PageReadingOne;
