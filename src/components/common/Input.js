import React,{ Component } from 'react';
import { View,TextInput,Text } from 'react-native';

class Input extends Component
{
   render()
   {
     return(
       <View style={styles.viewContainer}>
          <Text style={styles.textContainer}>{this.props.label}</Text>
          <TextInput
          secureTextEntry={this.props.isHide}
          placeholder = { this.props.placeholder }
          placeholderTextColour={"#AAA"}
          value={ this.props.value }
          onChangeText= { this.props.onChangeText }/>
       </View>
     );
   }
}

const styles = {
  viewContainer:{
    flexDirection:'column',
    padding: 2
  },
  textContainer:{
    fontSize: 15,
    marginLeft: 15
  }
}

export { Input };
