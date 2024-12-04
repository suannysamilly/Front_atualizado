import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PageLoginOne = ({ navigation }) => {

  const handlePressSignUp = () => {
    navigation.navigate('PageLoginTwo');
  };
const handlePressCreateAccount = () => {
    navigation.navigate('PageLoginThree');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
      <Image
      source={require('../../images/Onboarding.png')} 
        style={styles.image}
      />
      <Text style={styles.title}>Nero Transforma</Text>
      <Text style={styles.subTitle}>Uma comunidade que promove inclusão e capacitação. Transforme seu futuro com oportunidades de crescimento pessoal e profissional.</Text>
      </View >

      <View style={styles.buttons}>
      <TouchableOpacity  style={styles.buttonSignUp} onPress={handlePressSignUp}>
      <Text style={styles.buttonTextSignUp}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCreateAccount} onPress={handlePressCreateAccount}>
      <Text style={styles.buttonTextCreateAccount}>Criar uma conta</Text>
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
  top: 140,
},
  image:{
    width: 247,
    height:265,
  },
  title: {
    color: '#151313',
    marginTop: 5,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 2,
  },
  buttons:{
    flexDirection: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginVertical: 15, 
    position: 'absolute', 
    bottom: 20, 
  },
  buttonSignUp: {
    width: '80%',
    padding: 15,
    backgroundColor:'#7B4921',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextSignUp: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonCreateAccount:{
    width: '80%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextCreateAccount:{
    color: '#482E1A',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default PageLoginOne;
