import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainMenuContainer extends React.Component {
  render() {
    return (
      <View style={styles.mainMenuContainer}>
        <Text style={styles.text} onPress={this.props.startNewGame}>NEW GAME</Text>
        <Text style={styles.text}>HOW TO PLAY</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainMenuContainer: {
    flex: 9,
    backgroundColor: 'steelblue',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 40,
    fontSize: 28,
  },
});
