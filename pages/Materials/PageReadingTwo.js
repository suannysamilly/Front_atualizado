import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';



const PageReadingTwo = ({ navigation }) => {

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
    '1. Gramática de Uso da Língua Inglesa – Raymond Murphy (Versão em Português)',
    '2. Como Melhorar Seu Inglês Sozinho – Michael Jacobs',
    '3. Inglês para Leigos – Gail Brenner',
    '4. Inglês na Ponta da Língua: Como Falar Inglês Mais Fluente – Denilso de Lima',
    '5. 500 Palavras, Frases e Expressões em Inglês que Você Precisa Saber – Denilso de Lima',
    '6. Green Eggs and Ham - Dr. Seuss',
    '7. Fantastic Mr. Fox – Roald Dahl',
    "8. Charlotte's Web - E.B. White",
    '9. Matilda – Roald Dahl',
    '10. The Gruffalo - Julia Donaldson',
    '11. Where the Wild Things Are - Maurice Sendak',

    '12. The Wind in the Willows - Kenneth Grahame',
    '13. The Giver – Lois Lowry',
    '14. Little Prince – Antoine de Saint-Exupéry',
    "15. Harry Potter and the Sorcerer's Stone – J.K. Rowling",
    '16. The Outsiders - S.E. Hinton',
    '17. Anne of Green Gables - L.M. Montgomery',
    '18. The Secret Garden - Frances Hodgson Burnett',
    '19. Holes - Louis Sachar',
    '20. Wonder - R.J. Palacio',
    '21. The Diary of a Young Girl - Anne Frank',
    '22. The Chronicles of Narnia: The Lion, the Witch and the Wardrobe - C.S. Lewis',
    '23. The Catcher in the Rye - J.D. Salinger',
    '24. The Kite Runner - Khaled Hosseini',
    '25. The Alchemist - Paulo Coelho',
    '26. The Fault in Our Stars - John Green',
    '27. Life of Pi - Yann Martel',
    '28. The Help - Kathryn Stockett',
    '29. The Night Circus - Erin Morgenstern',
    '30. The Goldfinch - Donna Tartt',

    '31. Pride and Prejudice - Jane Austen',
    '32. To Kill a Mockingbird - Harper Lee',
    '33. Brave New World - Aldous Huxley',
    '34. The Great Gatsby - F. Scott Fitzgerald',
    '35. Fahrenheit 451 - Ray Bradbury',
    '36. The Picture of Dorian Gray - Oscar Wilde',
    '37. Ulysses - James Joyce',
    '38. The Sound and the Fury - William Faulkner',
    '39. One Hundred Years of Solitude - Gabriel García Márquez',
    '40. Beloved - Toni Morrison',
    '41. The Brothers Karamazov - Fyodor Dostoevsky',
    "42. Gravity's Rainbow - Thomas Pynchon",
    '43. Infinite Jest - David Foster Wallace',
    '44. The Road - Cormac McCarthy',
    '45. Atonement - Ian McEwan',
    '46. The Bell Jar - Sylvia Plath',
    '47. Their Eyes Were Watching God - Zora Neale Hurston',
    '48. A Tale of Two Cities - Charles Dickens',
    '49. Catch-22 - Joseph Heller',
    "50. The Handmaid's Tale - Margaret Atwood",


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
          <Text style={styles.title}>Livros em Inglês</Text>

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

export default PageReadingTwo;
