
import React from 'react';
import Login from './components/Login';
import ClassCompo from './components/ClassCompo';
import {
  View,
  Text
} from 'react-native';


const App = () => {

  const email = "abc@gamil.com";


  return (
<View>
<Text>Hello World  snehankit</Text>
<Login data = {email}></Login>
<ClassCompo/>
</View>


  );
};


export default App;
