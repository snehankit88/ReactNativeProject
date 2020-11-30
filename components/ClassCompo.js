import React,{Component} from 'react';

import {View,Text,Button} from 'react-native';

class ClassCompo extends Component {

    constructor(){
        super();
        this.state={
            data:"data of State in class component "
        }
    }

    test(){
    this.setState({data:"New data for state"})
    }

    render(){
        return(
            <View>
            <Text style={{fontSize:60}}>
            {this.state.data}
            </Text>
            <Button onPress={() =>{this.test()}}  title="change text using states"/>
            </View>

        )
    }

}

export default ClassCompo