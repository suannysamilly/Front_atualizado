import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';

const PageQuestionnairesOne = ({ navigation }) => {

const handlePressJump = () => {
    navigation.navigate('Tabs');
  };
const handlePressNext = () => {
    navigation.navigate('PageQuestionnairesTwo');
  };

  return (
    <SafeAreaView style={styles.container}>
    
    <View style={styles.subContainer}>
       <Image
        source={require('../../images/Messaging.png')} 
        style={styles.image}
      />
    
    

      <Text style={styles.title}>Participe de um rápido questionário para melhorar experiência no app.</Text>
      <Text style={styles.subTitle}>Suas respostas nos ajudam a tornar o app mais alinhado às suas necessidades!</Text>

    </View>
      
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.buttonJump} onPress={handlePressJump}>
        <Text style={styles.buttonTextJump}>Pular</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonNext} onPress={handlePressNext}>
        <Text style={styles.buttonTextNext}>Continuar</Text>
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
  image:{
    width: 247,
    height:265,
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
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginVertical: 15, 
    position: 'absolute', 
    bottom: 20, 
  },
  buttonJump: {
    width: '30%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonTextJump: {
    color: '#482E1A',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonNext:{
    width: '30%',
    padding: 15,
    backgroundColor:'#7B4921',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextNext:{
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PageQuestionnairesOne;
