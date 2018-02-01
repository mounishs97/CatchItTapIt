import React,{ Component } from 'react';
import { View } from 'react-native';
import { Row } from './Row';

class MarkCard extends Component
{
  renderRows()
  {
    return this.props.table.map(ele =>
      <Row id={ele.id} marks={ele.marks} subject={ele.subject}/>
    );
  }
  render()
  {
    return(
      <View style={styles.CardContainer}>
         {this.renderRows()}
      </View>
    );
  }
}

const styles = {
  CardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    elevation: 10
  }
}

export { MarkCard };
