import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';

const PageOnboardingTwo = ({ navigation }) => {

const handlePressJump = () => {
    navigation.navigate('PageLoginOne');
  };
const handlePressNext = () => {
    navigation.navigate('PageOnboardingThree');
  };

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.subContainer}>
       <Image
        source={require('../../images/Onboarding.png')} 
        style={styles.image}
      />
    
    <View style={styles.dotsContainer}>
          
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

      <Text style={styles.title}>Aulas Online e Presenciais</Text>
      <Text style={styles.subTitle}>Enquanto aguarda vagas em nossos cursos presenciais, acesse os cursos online e aprenda no seu ritmo.</Text>

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
  maxWidth: '80%',
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

export default PageOnboardingTwo;
