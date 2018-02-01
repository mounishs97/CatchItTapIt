import React,{ Component } from 'react';
import { View } from 'react-native';

class Card extends Component
{
     render()
     {
       return (
         <View style={cardStyles.cardContainer}>
            { this.props.children }
         </View>
       );
     }
};

const cardStyles = {
  cardContainer: {
    borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: '#DCDCDC',
    borderRadius: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    elevation: 1,
    margin: 5,
    padding: 3
  }
};

export { Card };
