import React, {useState} from "react";
import {View, TextInput, Button, Alert} from 'react-native';
import axios from 'axios';
import '../styles/login.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/login', {
            username,
            password
          });
          Alert.alert('Success', response);
        } catch (error) {
          Alert.alert('Error', error);
        }
      };

    const handleSignup = async () => {

      console.log(username, password)
      try {
        const response = await axios.post('http://127.0.0.1:5000/signup', {
          username,
          password
        });
          window.alert('Success', response);
          console.log(response)
        } catch (error) {
          window.alert('Error', error);
          console.log(error)
        }
      };
    
    return (
      <>
      <div className="header">
        <h2>Dimes on Company Time</h2>
      </div>

      <div className="image-container">
        <div className="image">
          
        </div>
      </div>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1c130D', }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ margin: 20, color: '#ede0d4', fontSize: 'large', textAlign: 'center', letterSpacing: '2px', borderBottomWidth: '1px', borderBottomColor: 'white' }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ margin: 20, color: '#ede0d4', fontSize: 'large', textAlign: 'center', letterSpacing: '2px', borderBottomWidth: '1px', borderBottomColor: 'white' }}
      />
      <Button color='#b08968' title="Flush" onPress={handleLogin} />
      
      <Button title="Sign Up" onPress={handleSignup} />
    
    </View>
    
    </>
    );
  }
  
  export default Login;