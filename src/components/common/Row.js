import React,{ Component } from 'react';
import { View } from 'react-native';
import { Cell } from './Cell';

class Row extends Component
{
  render()
  {
    return(
      <View style={styles.RowContainer}>
       <View style={{flex:1,padding:2}}><Cell text={this.props.id}/></View>
       <View style={{flex:2,padding:2}}><Cell text={this.props.subject}/></View>
       <View style={{flex:1,padding:2}}><Cell text={this.props.marks}/></View>
      </View>
    );
  }
}

const styles = {
  RowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    position: 'relative'
  }
}

export { Row };
