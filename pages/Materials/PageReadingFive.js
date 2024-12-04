import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

const PageReadingFive = ({ navigation }) => {

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
    // Comunicação Não-Violenta e Empática
    '1. Comunicação Não-Violenta: Uma Linguagem de Vida - Marshall B. Rosenberg (Iniciante)',
    '2. O Livro da Comunicação Não-Violenta - Marshall B. Rosenberg',
    '3. A Comunicação Empática - Marshall B. Rosenberg',
    '4. O Poder da Escuta - Richard Cohen',
    '5. A Arte da Comunicação - Thich Nhat Hanh',

    // Mediação de Conflitos
    '6. A Arte de Mediar Conflitos - Rui Gomes (Iniciante)',
    '7. Mediação de Conflitos: Teoria e Prática - Maria Helena Diniz',
    '8. O Livro da Mediação - Pedro F. de Castro',
    '9. A Linguagem da Mediação - Rosangela D. Santos',
    '10. Mediação Familiar - Patricia A. L. de Souza',

    // Técnicas e Estratégias de Comunicação
    '11. Como Fazer Amigos e Influenciar Pessoas - Dale Carnegie (Iniciante)',
    '12. Fale Como um Líder - R. S. C. D. de L. e M. L. Schreiber',
    '13. A Arte da Negociação - Roger Fisher e William Ury',
    '14. A Magia da Comunicação - Augusto Cury',
    '15. Comunicação Clara - Patricia Frick',

    // Resolução e Gerenciamento de Conflitos
    '16. Resolvendo Conflitos - Andrew K. Lee',
    '17. Gerenciamento de Conflitos - William A. Donohue',
    '18. A Resolução de Conflitos na Prática - João Carlos de Oliveira',
    '19. Resolução Criativa de Conflitos - Michael R. D. e C. F. A. Brown',
    '20. Mediação: A Arte de Resolver Conflitos - Miguel de Souza',

    // Escuta e Diálogo
    '21. A Arte de Escutar - Erich Fromm (Iniciante)',
    '22. A Escuta Ativa - Michael P. e N. A. L. B.',
    '23. Mediação e Diálogo - V. C. e S. M. S. L.',
    '24. Conversas Difíceis: Como Discutir o que Importa - Douglas Stone, Bruce Patton e Sheila Heen',
    '25. Conversas que Transformam - Susan Scott',

    // Aspectos Interculturais e de Poder
    '26. A Comunicação Intercultural e Mediação - K. A. F. e J. P. R.',
    '27. Comunicação e Poder - José Carlos de Lima',
    '28. O Conflito e a Mediação - R. M. T. e A. C. M. A.',
    '29. O Conflito da Comunicação - Marjorie L. R. e Eric H. T.',
    '30. A Importância da Comunicação - Robert H. D. e Patricia L. A. F. Rodrigues',

    // Práticas de Mediação
    '31. Práticas de Mediação - R. S. e F. M. S. (Iniciante)',
    '32. O Processo de Mediação - Isabel M. C. e Paulo A. F. R.',
    '33. A Mediação e suas Aplicações - L. S. S. e F. A. S. R.',
    '34. Mediação e Gestão de Conflitos - T. F. e J. P. R.',
    '35. Mediação e Conflitos no Trabalho - T. A. M. e R. J. S. L.',

    // Persuasão e Influência
    '36. A Arte da Persuasão - Jay Heinrichs',
    '37. O Desafio da Comunicação - Robert M. e L. C. R. Santos',
    '38. A Arte da Persuasão - Jay Heinrichs',
    '39. A Mediação e o Conflito - J. D. M. e M. D. F. Almeida',
    '40. A Arte de Mediar - John S. D. e K. E. R. Souza',

    // Referências e Estudos
    '41. O Livro da Mediação e Resolução de Conflitos - Pedro N. e André F.',
    '42. O Estilo de Comunicação e Conflito - Joan A. F. e Thomas C. W.',
    '43. Mediação: A Prática no Dia a Dia - Ana M. C. de Sousa',
    '44. A Comunicação e a Resolução de Conflitos - C. S. H. e J. M. R. da Luz',
    '45. Conflito e Mediação - J. B. e D. A. M. R.',

    // Outros
    '46. A Mediação e o Conflito - J. D. M. e M. D. F. Almeida',
    '47. A Mediação e suas Aplicações - L. S. S. e F. A. S. R.',
    '48. Mediação como Instrumento de Resolução de Conflitos - S. M. C. e C. P. da Silva',
    '49. O Coração da Mediação - R. A. e M. J. S.',
    '50. O Livro da Mediação - Pedro F. de Castro',
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
          <Text style={styles.title}>Livros de Comunicação e Mediação</Text>

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

export default PageReadingFive;
