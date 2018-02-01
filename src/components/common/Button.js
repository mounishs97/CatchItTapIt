import React,{ Component } from 'react';
import { Text,TouchableOpacity } from 'react-native';

class Button extends Component
{
  render()
   {
     return (
      <TouchableOpacity style={buttonStyles.buttonContainer}
      disabled={this.props.inactive} 
      onPress={()=>{this.props.onPress()}}>
      <Text style={buttonStyles.textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
     );
   }
}

const buttonStyles = {
  buttonContainer: {
    backgroundColor: '#0085c3',
    borderWidth: 2,
    borderColor: '#0085c3',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  textStyle: {
    fontSize: 20,
    textAlign:'center',
    color:'#FFFFFF'
  }
};

export { Button };
