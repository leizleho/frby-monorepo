import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Petal from './Petal';

const { width } = Dimensions.get('window');

// tslint:disable-next-line: no-empty-interface
interface FlowerProps {}

export default class Flower extends React.PureComponent<FlowerProps> {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={StyleSheet.absoluteFill}>
          <Petal width={width * 1.5} duration={120} />
        </View>
        <View style={styles.rotate30d}>
          <Petal width={width} duration={80} reverse />
        </View>
        <View style={styles.rotate45d}>
          <Petal width={width * 0.5} duration={60} />
        </View>
        <View style={styles.rotate60d}>
          <Petal width={width * 0.2} duration={30} reverse />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden'
  },
  rotate30d: {
    ...StyleSheet.absoluteFillObject,
    transform: [{ rotate: '30deg' }]
  },
  rotate45d: {
    ...StyleSheet.absoluteFillObject,
    transform: [{ rotate: '45deg' }]
  },
  rotate60d: {
    ...StyleSheet.absoluteFillObject,
    transform: [{ rotate: '60deg' }]
  }
});
