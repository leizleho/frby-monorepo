import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export class RegisterConnector extends React.PureComponent {
  onPress = () => {
    console.log('button pressed');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="BUTTON" onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
