import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Page1 from './Navigation/Page1';
import Page2 from './Navigation/Page2';

export default function App() {
  const Stack= createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Page1}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        // truyền dữ liệu
        navigation.navigate('Profile', {name: 'Jane', age: 20, daTotNghiep: 'true'})
      }
    />
  );
};


const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile\n
  Tuoi: {route.params.age}\n
  DaTotNghiep: {route.params.daTotNghiep}  </Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
