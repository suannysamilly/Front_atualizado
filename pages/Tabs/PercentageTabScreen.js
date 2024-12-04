import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

const PercentageTabScreen = ({ navigation }) => {

  const handlePressHealth = () => {
    navigation.navigate('PageHealth'); //saude
  };
  const handlePressEducation = () => {
    navigation.navigate('PageEducation');
  };
  const handlePressExactSciencesAndTechnology = () => {
    navigation.navigate('PageExactSciencesAndTechnology');
  };
  const handlePressHumanitiesAndSocialSciences = () => {
    navigation.navigate('PageHumanitiesAndSocialSciences');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>

        <Text style={styles.text}>Mapeie sua área e entenda como ela está se transformando!</Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handlePressHealth} >
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Saúde</Text>
              <Text style={styles.buttonText}>Você é da área de saúde? Explore os dados, inspire mudanças e valorize a diversidade que transforma o cuidado e o bem-estar! 🌱🩺</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Medicine.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlePressEducation}>
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Educação</Text>
              <Text style={styles.buttonText}>Você é da área de educação?Explore os dados e contribua para uma educação ainda mais inclusiva e transformadora! 📚✨</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Teacher.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlePressExactSciencesAndTechnology}>
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Exatas e Tecnologia</Text>
              <Text style={styles.buttonText}>Você é do universo de exatas e tecnologia? Explore os dados, inspire mudanças e valorize a quebra de barreiras no mundo tecnológico! 💻⚙️</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Product.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlePressHumanitiesAndSocialSciences}>
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Humanas e Sociais</Text>
              <Text style={styles.buttonText}>Você é da área de humanas e sociais? Explore e mapeie sua área e contribua para a construção de um futuro mais equitativo e consciente! 🌍💬</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Team.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  text:{
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    color: '#151313'
  },
  buttons: {
    alignItems: 'stretch', 
    flexDirection: 'column',
    width: '100%',
  },
  button: {
    flex: 1, 
    height: 180,
    flexDirection: 'row',
    borderWidth: 1, 
    borderColor: '#7B4921', 
    borderRadius: 20, 
    marginBottom: 50,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  buttonLeft: {
    flexDirection: 'column', 
    width: '55%', 
  },
  buttonRight: {
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    width: '45%', 
  },
  image: {
    width: 150,
    height: 128,
  },
  buttonTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#482E1A',
  },
  buttonText: {
    fontSize: 14,
    color: '#482E1A',
  },
});

export default PercentageTabScreen;
