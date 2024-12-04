import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

const PageReadingThree = ({ navigation }) => {

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
    // Iniciante
    
    '1. Gramática Prática da Língua Espanhola - Nélio D. de Oliveira',
    '2. Espanhol para Leigos - Julie Gutin',
    '3. Aprenda Espanhol em 30 Dias - Ricardo G. G. de Souza',
    '4. Conversação em Espanhol - Célia Ferreira',
    '5. Espanhol Sem Fronteiras - Débora De Sousa',
    '6. El Principito - Antoine de Saint-Exupéry',
    '7. El gato con botas - Charles Perrault',
    '8. El pez arcoíris - Marcus Pfister',
    '9. La oruga muy hambrienta - Eric Carle',
    '10. El niño con el pijama de rayas - John Boyne',
    '11. La tortuga gigante - Daria Bignardi',
    '12. El pequeño Nicolás - René Gijo',
    '13. Cuentos de hadas - Vários autores',
    '14. El árbol generoso - Shel Silverstein',
    '15. Cuentos de la Selva - Horacio Quiroga',

    // Intermediário
    
    '16. La Casa de la Pradera - Laura Ingalls Wilder',
    '17. Los ojos del perro siberiano - Antonio P. M. de la Torre',
    '18. Frida - Ana Alonso',
    '19. Mariposas - Jorge Francisco',
    '20. La historia interminable - Michael Ende',
    '21. La sombra del viento - Carlos Ruiz Zafón',
    '22. El túnel - Ernesto Sabato',
    '23. Crónica de una muerte anunciada - Gabriel García Márquez',
    '24. Como agua para chocolate - Laura Esquivel',
    '25. El alquimista - Paulo Coelho',
    '26. La casa de los espíritus - Isabel Allende',
    '27. El amor en los tiempos del cólera - Gabriel García Márquez',
    '28. El retrato de Dorian Gray - Oscar Wilde',
    '29. El guardián entre el centeno - J.D. Salinger',
    '30. La vida es sueño - Pedro Calderón de la Barca',
    '31. Las chicas - Mariana Enriquez',
    '32. Ficciones - Jorge Luis Borges',
    '33. La tregua - Mario Benedetti',
    '34. El camino - Miguel Delibes',
    '35. El coronel no tiene quien le escriba - Gabriel García Márquez',

    // Avançado
    
    '36. Cien años de soledad - Gabriel García Márquez',
    '37. Don Quijote de la Mancha - Miguel de Cervantes',
    '38. Rayuela - Julio Cortázar',
    '39. La muerte de Artemio Cruz - Carlos Fuentes',
    '40. Pedro Páramo - Juan Rulfo',
    '41. El lobo estepario - Hermann Hesse',
    '42. La invención de Morel - Adolfo Bioy Casares',
    '43. El siglo de las luces - Alejo Carpentier',
    '44. 2666 - Roberto Bolaño',
    '45. La ciudad y los perros - Mario Vargas Llosa',
    '46. El otoño del patriarca - Gabriel García Márquez',
    '47. Los detectives salvajes - Roberto Bolaño',
    '48. El ruido y la furia - William Faulkner',
    '49. Crónica del pájaro que da cuerda al mundo - Haruki Murakami',
    '50. La casa verde - Mario Vargas Llosa',
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
          <Text style={styles.title}>Livros em Espanhol</Text>

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
    width: '100%', // Deixa os checkboxes com a mesma largura
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    padding: 8,
    marginBottom: 2, // Espaçamento entre os checkboxes
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default PageReadingThree;
