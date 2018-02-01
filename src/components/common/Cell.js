import React,{ Component } from 'react';
import { View,Text } from 'react-native';

class Cell extends Component
{
  render()
  {
    return(
      <View style={styles.CellContainer}>
          <Text style={styles.TextContainer}>{this.props.text}</Text>
      </View>
    );
  }
}

var styles = {
  CellContainer: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: 5
  },
  TextContainer: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FF0045'
  }
};

export { Cell };
