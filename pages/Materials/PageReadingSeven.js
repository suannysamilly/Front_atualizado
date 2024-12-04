import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

const PageReadingSeven = ({ navigation }) => {

  const handlePressGoBack = () => {
    navigation.navigate('PageReadingOne');
  };

  const [checkedItems, setCheckedItems] = useState(new Array(50).fill(false));

  const handleCheckboxChange = (index) => {
    let updatedCheckedItems = [...checkedItems]; // Cria uma cópia do array atual
    updatedCheckedItems[index] = !updatedCheckedItems[index]; // Inverte o valor do checkbox específico
    setCheckedItems(updatedCheckedItems); // Atualiza o estado
  };

  const checkboxTitles = [
    '1. Marketing 4.0 - Philip Kotler (Iniciante)',
    '2. A Bíblia do Marketing Digital - Claudio Torres (Iniciante)',
    '3. SEO 2020 - Adam Clarke (Iniciante)',
    '4. Jab, Jab, Jab, Right Hook - Gary Vaynerchuk (Iniciante)',
    '5. A Arte de SEO - Eric Enge',
    '6. Como o Google Funciona - Eric Schmidt',
    '7. Epic Content Marketing - Joe Pulizzi',
    '8. This is Marketing - Seth Godin',
    '9. Marketing de Conteúdo Épico - Joe Pulizzi',
    '10. Os 8 Ps do Marketing Digital - Conrado Adolpho',
    '11. Hacking Growth - Sean Ellis e Morgan Brown',
    '12. Contágio - Jonah Berger',
    '13. As Armas da Persuasão - Robert Cialdini',
    '14. Tração - Gabriel Weinberg e Justin Mares',
    '15. A Estratégia do Oceano Azul - W. Chan Kim e Renée Mauborgne',
    '16. Previsivelmente Irracional - Dan Ariely',
    '17. Marketing de Permissão - Seth Godin',
    '18. O Futuro do Marketing - Walter Longo',
    '19. O Mito do Empreendedor - Michael E. Gerber',
    '20. Cross-Channel Marketing - Elizabeth Avery',
    '21. Como Fazer Amigos e Influenciar Pessoas - Dale Carnegie',
    '22. A Cauda Longa - Chris Anderson',
    '23. Buyer Personas - Adele Revella',
    '24. Conteúdo S.A. - Ann Handley e C.C. Chapman',
    '25. Top of Mind - John Hall',
    '26. Growth Hacking - Ryan Holiday',
    '27. Copywriting: O Método Centenário Para Ser Persuasivo - Victor Ricciardi',
    '28. A Estratégia de Conteúdo - Kristina Halvorson',
    '29. Conversas que Vendem - Jeb Blount',
    '30. Mídias Sociais na Prática - Camila Porto',
    '31. Estrat. de Marketing Digital - Philip Kotler',
    '32. O Poder do Hábito - Charles Duhigg',
    '33. Traffic Secrets - Russell Brunson',
    '34. Digital Marketing Strategy - Simon Kingsnorth',
    '35. Email Marketing: O Método Definitivo - Stephanie Diamond',
    '36. Marketing para Mídias Sociais - Dave Evans',
    '37. Neuromarketing - Martin Lindstrom',
    '38. Estratégia Digital - Ray Wang',
    '39. Marketing de Busca - André Sasaki',
    '40. As Regras de Conteúdo - Ann Handley',
    '41. Web Analytics 2.0 - Avinash Kaushik',
    '42. O Novo Marketing Digital - Guilherme Lito',
    '43. Branding: A Arte de Construir Marcas - João Branco',
    '44. Você Precisa de Marketing - Ray Junior',
    '45. Optimize - Lee Odden',
    '46. ROI em Marketing Digital - Ricardo Almeida',
    '47. Invisible Selling Machine - Ryan Deiss',
    '48. Como Construir uma História de Sucesso no Instagram - Ana Tex',
    '49. Métricas de Marketing Digital - Mark Jeffery',
    '50. Marketing Digital na Prática - Thiago Tesche',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePressGoBack}>
          <Image source={require('../../images/GoBack.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.goBackText}>Recomendação de Leitura</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Image source={require('../../images/Onboarding.png')} style={styles.image} />
          <Text style={styles.title}>Livros de Marketing Digital</Text>

          {/* Mapear os títulos e os estados dos checkboxes */}
          {checkboxTitles.map((title, index) => (
            <CheckBox
              key={index}
              title={title}
              checked={checkedItems[index]}
              onPress={() => handleCheckboxChange(index)} // Alterna o estado quando clicado
              checkedColor="#7B4921"
              uncheckedColor="gray"
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
            />
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
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  checkboxContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    padding: 8,
    marginBottom: 2,
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default PageReadingSeven;
