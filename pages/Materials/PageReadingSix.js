import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

const PageReadingSix = ({ navigation }) => {

  const handlePressGoBack = () => {
    navigation.navigate('PageReadingOne');
  };

  const [checkedItems, setCheckedItems] = useState(new Array(50).fill(false));

  const handleCheckboxChange = (index) => {
    let updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const checkboxTitles = [
    // Design Gráfico e Comunicação Visual
    '1. Design para Quem Não é Designer - Robin Williams (Iniciante)',
    '2. A Psicologia das Cores - Eva Heller',
    '3. Elementos do Estilo Tipográfico - Robert Bringhurst',
    '4. Gestalten: O Mundo do Design Gráfico - Julius Wiedemann',
    '5. Sistemas Gráficos - Kimberly Elam',
    '6. Fundamentos do Design Gráfico - Gavin Ambrose e Paul Harris',
    '7. O Design do Dia a Dia - Donald Norman',
    '8. Design Thinking: Uma Metodologia Poderosa para Decretar o Fim das Velhas Ideias - Tim Brown',
    '9. O Livro Negro do Design - Adrian Shaughnessy',
    '10. A História do Design Gráfico - Philip B. Meggs',

    // UX/UI Design
    '11. Não Me Faça Pensar - Steve Krug (Iniciante)',
    '12. Design Emocional - Donald Norman',
    '13. A Linguagem Secreta do Design - Tom May',
    '14. Lean UX - Jeff Gothelf e Josh Seiden',
    '15. Design para a Internet - Gonzalo Cordero e Pablo Díaz-Rubín',
    '16. O Design do Futuro - Don Norman',
    '17. Design de Interfaces Web - Jakob Nielsen',
    '18. UX Research - Brad Nunnally e David Farkas',
    '19. Design e Redesign: As Lições de uma Vida Inteira Dedicada ao Design - Richard Poulin',
    '20. Design Sprint: Como Resolver Problemas e Testar Novas Ideias em Apenas Cinco Dias - Jake Knapp',

    // Tipografia e Identidade Visual
    '21. Pensar com Tipos - Ellen Lupton',
    '22. Grid Systems - Josef Müller-Brockmann',
    '23. Manual do Design Editorial - Tim Samara',
    '24. Logotype - Michael Evamy',
    '25. Tipografia: Teoria, Prática e Mitos - Nely Utsumi',
    '26. Lettering & Modern Calligraphy - Paper Peony Press',
    '27. Os Pioneiros do Design Gráfico - Steven Heller',
    '28. Type: The Secret History of Letters - Simon Loxley',
    '29. O Livro do Design de Identidade Visual - Alina Wheeler',
    '30. Typographic Systems of Design - Kimberly Elam',

    // Design de Produto e Industrial
    '31. O Designer Humilde - Victor Papanek',
    '32. O que é Design de Produto? - Laura Slack',
    '33. Design como Atividade Social - Jorge Frascara',
    '34. Form Follows Function: A História do Design Industrial - Susan Yelavich',
    '35. O Design do Cotidiano - John Heskett',
    '36. Biônica no Design: O Impacto da Natureza no Design de Produtos - Antonio Mendoza',
    '37. Design Industrial: Materiais e Processos de Fabricação - Eduardo Alcântara Vasques',
    '38. Design Thinking na Prática - Tenny Pinheiro',
    '39. O Design Industrial Brasileiro - Adélia Borges',
    '40. Universal Principles of Design - William Lidwell, Kritina Holden, Jill Butler',

    // Outros Tópicos em Design
    '41. Design de Moda: Manual para Estilistas - Steven Faerm',
    '42. O Poder do Design Thinking - Idris Mootee',
    '43. Design para um Mundo Complexo - Rafael Cardoso',
    '44. O Design da Informação - Robert Jacobson',
    '45. Arte de Projetar em Arquitetura - Ernst Neufert',
    '46. Criatividade S.A. - Ed Catmull',
    '47. Design Total - Walter Longo',
    '48. Design Gráfico Sustentável - Eric Benson',
    '49. História do Design Moderno - David Raizman',
    '50. Sprint: O Método Usado no Google para Testar e Aplicar Novas Ideias em Apenas Cinco Dias - Jake Knapp',
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
          <Image source={require('../../images/Reading.png')} style={styles.image} />
          <Text style={styles.title}>Livros de Design</Text>

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

export default PageReadingSix;
