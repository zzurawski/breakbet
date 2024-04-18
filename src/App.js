import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Betting from './pages/Betting';


const Stack = createStackNavigator();


function App() {
  const [loggedIn, setLogIn] = useState(false);

  const handleLogIn = () => {
    setLogIn(true);
  }

  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {loggedIn ? (
            <Stack.Screen name='Home' component={Betting} /> 
            ) : (
            <Stack.Screen name='Login'>
              {(props) => <Login {...props} onLogin={handleLogIn} />}
            </Stack.Screen>
            )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
