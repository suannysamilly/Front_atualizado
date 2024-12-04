import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const PagePDF = ({ navigation }) => {

  const [text, setText] = useState('');

  const handlePressGoBack = () => {
    navigation.navigate('Tabs', { screen: 'Materials' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePressGoBack}>
          <Image source={require('../../images/GoBack.png')} style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.goBackText}>Materiais</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Image
            source={require('../../images/PDF.png')}
            style={styles.image}
          />
          <Text style={styles.title}>PDF'S</Text>
          <Text style={styles.subTitle}>Baixe aqui o conteúdo das matérias e organize seus estudos.</Text>

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

          {/* Botões */}
          {['Inglês Básico I', 'Inglês Básico II', 'Inglês Intermediário I', 'Inglês Intermediário II', 'Inglês Avançado I', 'Inglês Avançado II', 'Espanhol Básico I'].map((title) => (
            <TouchableOpacity key={title} style={styles.button}>
              <Text style={styles.buttonText}>{title}</Text>
              <Image source={require('../../images/download.png')} style={styles.buttonImage}/>
            </TouchableOpacity>
          ))}
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
  button: {
    width: '98%',
    height: 37,
    backgroundColor: '#7B4921',
    justifyContent: 'space-between', 
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
  buttonImage: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default PagePDF;
