import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

class Product extends Component {
  render() {
    return (
      <Card
        image={{
          uri: 'https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg',
        }}>
        <Text style={{marginBottom: 10, marginTop: 20}} h2>
          Kid shoes
        </Text>
        <Text style={styles.price} h4>
          $ 200
        </Text>
        <Text h6 style={styles.description}>
          added 2h ago
        </Text>
        <Button
          type="clear"
          title="Buy now"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    color: '#5a647d',
    fontWeight: 'bold',
    fontSize: 30,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: '#c1c4cd',
  },
});

export default Product;
