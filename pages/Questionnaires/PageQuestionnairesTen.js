import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PageQuestionnairesTen = ({ navigation }) => {

  const handlePressGoHome = () => {
    navigation.navigate('Tabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={require('../../images/Messaging.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Obrigado por completar o questionário!</Text>
        <Text style={styles.subTitle}>Suas respostas nos ajudam a melhorar a experiência no app. Agradecemos sua contribuição!</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonNext} onPress={handlePressGoHome}>
          <Text style={styles.buttonTextNext}>Ir para a página home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  subContainer: {
    maxWidth: '90%',
    alignItems: 'center',
    position: 'absolute',
    top: 110,
  },
  image: {
    width: 247,
    height: 265,
  },
  title: {
    color: '#151313',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 2,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 15,
    position: 'absolute',
    bottom: 20,
  },
  buttonNext: {
    width: '60%',
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

export default PageQuestionnairesTen;
