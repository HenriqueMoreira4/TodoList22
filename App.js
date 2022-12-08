import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Atividades from "./src/pages/Atividades";
import NovaAtividade from './src/pages/NovaAtividade';
import Detalhes from './src/pages/Desc';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Atividades">
        <Stack.Screen 
          name="Atividades" 
          component={Atividades}
          options={{
            headerTintColor: "#ffd900"
          }}
        />
        <Stack.Screen 
          name="NovaAtividade" 
          component={NovaAtividade}
          options={{
            headerTintColor: "#ffd900"
          }}
        />
        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes}
          options={{
            headerTintColor: "#ffd900"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
