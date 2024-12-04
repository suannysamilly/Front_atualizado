import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Image, ActivityIndicator,} from 'react-native';

const PageLoginFour = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePressRecover = () => {
    navigation.navigate('PageLoginTwo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Esqueceu a </Text>
        <Text style={styles.title}>Senha?</Text>

        <Image
          source={require('../../images/Onboarding.png')} 
          style={styles.image}
        />

        <Text style={styles.text}>Digite seu e-mail cadastrado, e enviaremos um e-mail para você informando como recuperá-la</Text>
        </View>

        <View style={styles.inputs}>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>
  
        </View>
      

      <View style={styles.buttons}>

        <TouchableOpacity style={styles.buttonRecover} onPress={handlePressRecover}>
          <Text style={styles.buttonTextRecover}>Recuperar senha</Text>
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
    top: 80,
  },
   title: {
    color: '#151313',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 201,
    height: 221,
    marginVertical: 20,
    position: 'absolute',
    top: 120,
  },
  text:{
    color: '#482E1A',
    fontSize: 16,
    textAlign: 'center',
    top: 310,
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 550,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AF6528',
    padding: 12,
    fontSize: 14,
  },
  buttons: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 60,
  },
  buttonRecover: {
    width: '80%',
    padding: 15,
    backgroundColor: '#7B4921',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextRecover: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PageLoginFour;
