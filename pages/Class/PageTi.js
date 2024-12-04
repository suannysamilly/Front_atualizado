import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const PageTi = ({ navigation }) => {

  const handlePressGoBack = () => {
    navigation.navigate('PageClass');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePressGoBack}>
          <Image source={require('../../images/GoBack.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.goBackText}>Aulas</Text>
      </View>

      <View style={styles.content}>
        <Image source={require('../../images/Code.png')} style={styles.image} />
        <Text style={styles.textTitle}>Tecnologia e Programação</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Fundamentos da Tecnologia e Programação</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Primeiros Passos com Linguagens de Programação</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Programação Orientada a Objetos (POO)</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Desenvolvimento Web - Front-End</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Desenvolvimento Back-End e Integração</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Projetos Integrados e Metodologias Ágeis</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Introdução à Inteligência Artificial e Machine Learning</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Projetos Avançados de IA e Machine Learning</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 50,
    justifyContent: 'flex-start', 
  },
  backIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
  goBackText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7B4921',
    textAlign: 'left', 
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle:{
    color: "#482E1A",
    fontSize: 16,
    marginBottom: 15,
  },
  image: {
    width: 182,
    height: 192,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#7B4921',
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonImage:{
   width: 150,
   height: 100,
  },
  buttonLeft: {
    flex: 1,
  },
  buttonTextTitle: {
    width:'80%',
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRight: {
    paddingLeft: 10,
  },
});

export default PageTi;
