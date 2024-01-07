import { createStackNavigator } from '@react-navigation/stack';
import Maps from '../screens/Maps';
import VideoScreen from '../screens/VideoScreen';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={VideoScreen} options={{headershown:false}}/>
    </Stack.Navigator>
  );
}

export default MainStack;