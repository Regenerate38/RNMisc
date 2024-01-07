import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Maps from './src/screens/Maps';
import MapView from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
