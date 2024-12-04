import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

const PageReadingFour = ({ navigation }) => {

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
    // Programação
    '1. Código Limpo: O Manual de Programação Ágil - Robert C. Martin (Iniciante/Intermediário)',
    '2. O Programador Pragmático - Andrew Hunt e David Thomas (Iniciante/Intermediário)',
    '3. Code Complete: A Practical Handbook of Software Construction - Steve McConnell (Intermediário)',
    '4. Padrões de Projeto - Erich Gamma et al. (Avançado)',
    '5. Você Não Sabe JS (série) - Kyle Simpson (Iniciante)',

    // Inteligência Artificial
    '6. Inteligência Artificial: Estruturas e Estratégias para a Solução Complexa de Problemas - Stuart Russell e Peter Norvig (Intermediário/Avançado)',
    '7. Deep Learning - Ian Goodfellow, Yoshua Bengio e Aaron Courville (Avançado)',
    '8. Machine Learning Yearning - Andrew Ng (Iniciante/Intermediário)',
    '9. Python Machine Learning - Sebastian Raschka e Vahid Mirjalili (Iniciante/Intermediário)',
    '10. Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow - Aurélien Géron (Intermediário)',

    // Design Centrado no Usuário
    '11. Não me Faça Pensar - Steve Krug (Iniciante)',
    '12. A Design de Coisas do Dia-a-Dia - Don Norman (Intermediário)',
    '13. About Face: The Essentials of Interaction Design - Alan Cooper (Intermediário/Avançado)',
    '14. Designing Interfaces: Patterns for Effective Interaction Design - Jenifer Tidwell (Intermediário)',
    '15. Lean UX: Applying Lean Principles to Improve User Experience - Jeff Gothelf e Josh Seiden (Intermediário)',

    // Scrum e Metodologias Ágeis
    '16. Scrum: A Arte de Fazer o Dobro de Trabalho na Metade do Tempo - Jeff Sutherland (Iniciante)',
    '17. Agile Estimating and Planning - Mike Cohn (Intermediário)',
    '18. A Startup Enxuta - Eric Ries (Iniciante)',
    '19. User Story Mapping - Jeff Patton (Intermediário)',
    '20. Coaching Agile Teams - Lyssa Adkins (Avançado)',

    // Back-end
    '21. Designing Data-Intensive Applications - Martin Kleppmann (Avançado)',
    '22. Node.js Design Patterns - Mario Casciaro e Luciano Mammino (Intermediário)',
    '23. The Complete Guide to ASP.NET Core - Andrew Lock (Avançado)',
    '24. Flask Web Development - Miguel Grinberg (Iniciante/Intermediário)',
    '25. Ruby on Rails Tutorial - Michael Hartl (Iniciante)',

    // Front-end
    '26. JavaScript: The Good Parts - Douglas Crockford (Intermediário)',
    '27. Eloquent JavaScript - Marijn Haverbeke (Iniciante)',
    '28. Learning React - Alex Banks e Eve Porcello (Iniciante/Intermediário)',
    '29. CSS: The Definitive Guide - Eric Meyer e Estelle Weyl (Intermediário)',
    '30. Responsive Web Design with HTML5 and CSS - Ben Frain (Iniciante)',

    // Banco de Dados
    '31. SGBD: Sistemas de Banco de Dados - Abraham Silberschatz, Henry Korth e S. Sudarshan (Intermediário)',
    '32. SQL: Para Leigos - Ben Forta (Iniciante)',
    '33. Designing Data-Intensive Applications - Martin Kleppmann (Avançado)',
    '34. NoSQL Distilled - Pramod J. Sadalage e Martin Fowler (Intermediário)',
    '35. PostgreSQL: Up and Running - Regina Obe e Leo Hsu (Intermediário)',

    // Tecnologia Geral
    '36. O Projeto Fênix - Gene Kim et al. (Intermediário)',
    '37. The DevOps Handbook - Gene Kim et al. (Intermediário)',
    '38. The Mythical Man-Month - Frederick P. Brooks Jr. (Intermediário)',
    '39. Continuous Delivery - Jez Humble e David Farley (Avançado)',
    '40. The Art of Software Security Assessment - Mark Dowd et al. (Avançado)',

    // Futuro da Tecnologia
    '41. The Innovators - Walter Isaacson (Iniciante)',
    '42. Homo Deus: Uma Breve História do Amanhã - Yuval Noah Harari (Iniciante)',
    '43. The Second Machine Age - Erik Brynjolfsson e Andrew McAfee (Intermediário)',
    '44. AI Superpowers - Kai-Fu Lee (Intermediário)',
    '45. 21 Lições para o Século 21 - Yuval Noah Harari (Iniciante)',

    // Empreendedorismo em Tecnologia
    '46. Do Zero ao Um - Peter Thiel (Iniciante)',
    '47. The Lean Product Playbook - Dan Olsen (Intermediário)',
    '48. Rework - Jason Fried e David Heinemeier Hansson (Iniciante)',
    '49. The Startup Owner\'s Manual - Steve Blank (Intermediário)',
    '50. Start with Why - Simon Sinek (Iniciante)',
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
          <Text style={styles.title}>Livros de Tecnologia e Programação</Text>

          {/* Mapear os títulos e os estados dos checkboxes */}
          {checkboxTitles.map((title, index) => (
            <CheckBox
              key={index}
              title={title}
              checked={checkedItems[index]}
              onPress={() => handleCheckboxChange(index)}
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

export default PageReadingFour;
