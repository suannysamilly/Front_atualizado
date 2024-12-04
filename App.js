import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Dimensions, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PageOnboardingOne from './pages/Onboarding/PageOnboardingOne';
import PageOnboardingTwo from './pages/Onboarding/PageOnboardingTwo';
import PageOnboardingThree from './pages/Onboarding/PageOnboardingThree';
import PageOnboardingFour from './pages/Onboarding/PageOnboardingFour';
import PageOnboardingFive from './pages/Onboarding/PageOnboardingFive';

import PageLoginOne from './pages/Login/PageLoginOne';
import PageLoginTwo from './pages/Login/PageLoginTwo';
import PageLoginThree from './pages/Login/PageLoginThree';
import PageLoginFour from './pages/Login/PageLoginFour';

import PercentageTabScreen from './pages/Tabs/PercentageTabScreen';
import PageHealth from './pages/Percentage/PageHealth';
import PageEducation from './pages/Percentage/PageEducation';
import PageExactSciencesAndTechnology from './pages/Percentage/PageExactSciencesAndTechnology';
import PageHumanitiesAndSocialSciences from './pages/Percentage/PageHumanitiesAndSocialSciences';


import MaterialsTabScreen from './pages/Tabs/MaterialsTabScreen';
import PageClass from './pages/Class/PageClass';
import PageEnglish from './pages/Class/PageEnglish';
import PageMediation from './pages/Class/PageMediation';
import PageSpanish from './pages/Class/PageSpanish';
import PageTi from './pages/Class/PageTi';
import PagePDF from './pages/Materials/PagePDF';
import PageReadingOne from './pages/Materials/PageReadingOne';
import PageReadingTwo from './pages/Materials/PageReadingTwo';
import PageReadingThree from './pages/Materials/PageReadingThree';
import PageReadingFour from './pages/Materials/PageReadingFour';
import PageReadingFive from './pages/Materials/PageReadingFive';
import PageReadingSix from './pages/Materials/PageReadingSix';
import PageReadingSeven from './pages/Materials/PageReadingSeven';

import EnglishBasicOne from './pages/Iframes/EnglishBasicOne';
import EnglishBasicTwo from './pages/Iframes/EnglishBasicTwo';
import EnglishIntermediateOne from './pages/Iframes/EnglishIntermediateOne';
import EnglishIntermediateTwo from './pages/Iframes/EnglishIntermediateTwo';
import EnglishAdvancedOne from './pages/Iframes/EnglishAdvancedOne';
import EnglishAdvancedTwo from './pages/Iframes/EnglishAdvancedTwo';

import PageQuestionnairesOne from './pages/Questionnaires/PageQuestionnairesOne';
import PageQuestionnairesTwo from './pages/Questionnaires/PageQuestionnairesTwo';
import PageQuestionnairesThree from './pages/Questionnaires/PageQuestionnairesThree';
import PageQuestionnairesFour from './pages/Questionnaires/PageQuestionnairesFour';
import PageQuestionnairesFive from './pages/Questionnaires/PageQuestionnairesFive';
import PageQuestionnairesSix from './pages/Questionnaires/PageQuestionnairesSix';
import PageQuestionnairesSeven from './pages/Questionnaires/PageQuestionnairesSeven';
import PageQuestionnairesEight from './pages/Questionnaires/PageQuestionnairesEight';
import PageQuestionnairesNine from './pages/Questionnaires/PageQuestionnairesNine';
import PageQuestionnairesTen from './pages/Questionnaires/PageQuestionnairesTen';

import PageNotFound from './pages/Screens/PageNotFound';

const { height: maxHeight } = Dimensions.get('window');



export default function App() {

  const Stack = createStackNavigator();
  const Tab = createMaterialTopTabNavigator();

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Bom dia';
    } else if (currentHour < 18) {
      return 'Boa tarde';
    } else {
      return 'Boa noite';
    }
  };


  const [userName, setUserName] = useState('');

  // buscar o nome do usuário 
  useEffect(() => {
    const fetchUserName = async () => {
      const name = await AsyncStorage.getItem('userName');
      setUserName(name || 'Usuário'); 
    };
    fetchUserName();
  }, []);


  const Tabs = () => {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ padding: 15, marginTop: 5}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#482E1A',}}>
            {getGreeting()}, {userName}!
          </Text>
        </View>



        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#5C5353',
            tabBarLabelStyle: { fontSize: 15 , textTransform: 'none' },
            tabBarStyle: {
              backgroundColor: '#fff',
              paddingTop: maxHeight * 0.02,
              justifyContent: 'space-between',
              borderTopWidth: 0,
            },
            tabBarIndicatorStyle: { backgroundColor: '#AF6528' },
          }}>
          <Tab.Screen name="Percentage" component={PercentageTabScreen} options={{ tabBarLabel: 'Porcentagem' }} />
          <Tab.Screen name="Materials" component={MaterialsTabScreen} options={{ tabBarLabel: 'Materiais' }} />
        </Tab.Navigator>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="PageOnboardingOne" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PageOnboardingOne" component={PageOnboardingOne} />
          <Stack.Screen name="PageOnboardingTwo" component={PageOnboardingTwo} />
          <Stack.Screen name="PageOnboardingThree" component={PageOnboardingThree} />
          <Stack.Screen name="PageOnboardingFour" component={PageOnboardingFour} />
          <Stack.Screen name="PageOnboardingFive" component={PageOnboardingFive} />
          <Stack.Screen name="PageLoginOne" component={PageLoginOne} />
          <Stack.Screen name="PageLoginTwo" component={PageLoginTwo} />
          <Stack.Screen name="PageLoginThree" component={PageLoginThree} />
          <Stack.Screen name="PageLoginFour" component={PageLoginFour} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="MaterialsTabScreen" component={MaterialsTabScreen} />
          <Stack.Screen name="PageClass" component={PageClass} />
          <Stack.Screen name="PageEnglish" component={PageEnglish} />
          <Stack.Screen name="PageTi" component={PageTi} />
          <Stack.Screen name="PageMediation" component={PageMediation} />
          <Stack.Screen name="PageSpanish" component={PageSpanish} />
          <Stack.Screen name="PagePDF" component={PagePDF} />
          <Stack.Screen name="PageReadingOne" component={PageReadingOne} />
          <Stack.Screen name="PageReadingTwo" component={PageReadingTwo} />
          <Stack.Screen name="PageReadingThree" component={PageReadingThree} />
          <Stack.Screen name="PageReadingFour" component={PageReadingFour} />
          <Stack.Screen name="PageReadingFive" component={PageReadingFive} />
          <Stack.Screen name="PageReadingSix" component={PageReadingSix} />
          <Stack.Screen name="PageReadingSeven" component={PageReadingSeven} />
          <Stack.Screen name="PercentageTabScreen" component={PercentageTabScreen} />
          <Stack.Screen name="PageHealth" component={PageHealth} />
          <Stack.Screen name="PageEducation" component={PageEducation} />
          <Stack.Screen name="PageExactSciencesAndTechnology" component={PageExactSciencesAndTechnology} />
          <Stack.Screen name="PageHumanitiesAndSocialSciences" component={PageHumanitiesAndSocialSciences} />
          <Stack.Screen name="EnglishBasicOne" component={EnglishBasicOne} />
          <Stack.Screen name="EnglishBasicTwo" component={EnglishBasicTwo} />
          <Stack.Screen name="EnglishIntermediateOne" component={EnglishIntermediateOne} />
          <Stack.Screen name="EnglishIntermediateTwo" component={EnglishIntermediateTwo} />
          <Stack.Screen name="EnglishAdvancedOne" component={EnglishAdvancedOne} />
          <Stack.Screen name="EnglishAdvancedTwo" component={EnglishAdvancedTwo} />
          <Stack.Screen name="PageQuestionnairesOne" component={PageQuestionnairesOne} />
          <Stack.Screen name="PageQuestionnairesTwo" component={PageQuestionnairesTwo} />
          <Stack.Screen name="PageQuestionnairesThree" component={PageQuestionnairesThree} />
          <Stack.Screen name="PageQuestionnairesFour" component={PageQuestionnairesFour} />
          <Stack.Screen name="PageQuestionnairesFive" component={PageQuestionnairesFive} />
          <Stack.Screen name="PageQuestionnairesSix" component={PageQuestionnairesSix} />
          <Stack.Screen name="PageQuestionnairesSeven" component={PageQuestionnairesSeven} />
          <Stack.Screen name="PageQuestionnairesEight" component={PageQuestionnairesEight} />
          <Stack.Screen name="PageQuestionnairesNine" component={PageQuestionnairesNine} />
          <Stack.Screen name="PageQuestionnairesTen" component={PageQuestionnairesTen} />
          <Stack.Screen name="PageNotFound" component={PageNotFound} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
});