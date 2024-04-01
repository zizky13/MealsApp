import { StatusBar, View, Text,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    'poppins-reg': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semi-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-italic': require('./assets/fonts/Poppins-Italic.ttf'),
  });

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  if (error) {
    return <View><Text>Error loading fonts</Text></View>;
  }

  return (
    <>
      <StatusBar barStyle="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
  
  return (
    <>
      <StatusBar barStyle="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}