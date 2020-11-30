import React from 'react'
import {View,Text} from 'react-native'

const Login = (props) =>{
   // console.warn(props)
    return(
        <View>
        <Text> Login Screen 1 {props.data}</Text>
        </View>
    )
}

export default Login;