import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const PageEnglish = ({ navigation }) => {

  const handlePressGoBack = () => {
    navigation.navigate('PageClass');
  };
  const handleEnglishBasicOne = () => {
    navigation.navigate('EnglishBasicOne');
  };
  const handleEnglishBasicTwo = () => {
    navigation.navigate('EnglishBasicTwo');
  };
  const handleEnglishIntermediateOne = () => {
    navigation.navigate('EnglishIntermediateOne');
  };
  
  const handleEnglishIntermediateTwo = () => {
    navigation.navigate('EnglishIntermediateTwo');
  };
  const handleEnglishAdvancedOne = () => {
    navigation.navigate('EnglishAdvancedOne');
  };
  const handleEnglishAdvancedTwo = () => {
    navigation.navigate('EnglishAdvancedTwo');
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
        <Image source={require('../../images/Onboarding.png')} style={styles.image} />
        <Text style={styles.textTitle}>Inglês</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEnglishBasicOne}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Inglês Básico I</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleEnglishBasicTwo}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Inglês Básico II</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleEnglishIntermediateOne}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Inglês Intermédiario I</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={handleEnglishIntermediateTwo}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Inglês Intermédiario II</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleEnglishAdvancedOne}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Inglês Avançado I</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleEnglishAdvancedTwo}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Inglês Avançado II</Text>
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
   width: 100,
   height: 100,
  },
  buttonLeft: {
    flex: 1,
  },
  buttonTextTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRight: {
    paddingLeft: 10,
  },
});

export default PageEnglish;
