import React,{ Component } from 'react';
import { Text,View } from 'react-native';

class Header extends Component
{
  render()
  {
    return (
      <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
};

const styles =
{
  viewStyle:
            {
              backgroundColor: '#323754',
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              //shadowOffset: { width: 0, height: 20 },
              //shadowOpacity: 0.9,
              //shadowRadius: 10,
              elevation: 10,
              position: 'relative'
            },
  textStyle:
            {
              textAlign: 'center',
              color: '#FFFFFF',
              fontSize:20
            }
};

export { Header };
