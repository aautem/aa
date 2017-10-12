import React from 'react';
import { Modal, Picker, Slider, Switch, Button, Text, View, StyleSheet } from 'react-native';

export default class GameOptionsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boardSize: 4,
      gameSeries: 7,
      timeLimit: true,
    };

    this.startGameWithSettings = this.startGameWithSettings.bind(this);
  }

  startGameWithSettings() {
    this.props.startGame(this.state.boardSize, this.state.gameSeries, this.state.timeLimit);
  }

  render() {
    return (
      <Modal
        animationType='fade'
        transparent={false}
        visible={this.props.visible}
        onRequestClose={this.props.closeGameOptionsModal}
      >
        <View style={{
          flex: 1,
          flexDirection: 'row',
        }}>
          <View style={{flex: 1}} />

          <View style={{flex: 4, flexDirection: 'column'}}>
            <View style={{flex: 1}}>
              <View style={{flex: 1}} />

              <View style={{flex: 1, alignContent: 'center'}}>
                <Text>Select Game Options</Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignContent: 'center'}}>
                <View style={{flex: 1, alignContent: 'center'}}>
                  <Text>BOARD SIZE:</Text>
                </View>
                <View style={{flex: 1, alignContent: 'center'}}>
                  <Picker
                    selectedValue={this.state.boardSize}
                    onValueChange={(size, index) => this.setState({boardSize: size})}>
                    <Picker.Item label='4 x 4' value={4} />
                    <Picker.Item label='5 x 5' value={5} />
                    <Picker.Item label='6 x 6' value={6} />
                  </Picker>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignContent: 'center'}}>
                <View style={{flex: 1, alignContent: 'center'}}>
                  <Text>{this.state.gameSeries} GAME SERIES</Text>
                  <Slider
                    maximumValue={11}
                    minimumValue={3}
                    step={4}
                    value={7}
                    onSlidingComplete={(series) => this.setState({gameSeries: series})}
                  />
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignContent: 'center'}}>
                <View style={{flex: 1, alignContent: 'center'}}>
                  <Text>TIME LIMIT:</Text>
                </View>
                <View style={{flex: 1, alignContent: 'center'}}>
                  <Switch
                    value={this.state.timeLimit}
                    onValueChange={(timeLimit) => this.setState({timeLimit: timeLimit})}
                  />
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Button
                    onPress={this.startGameWithSettings}
                    title='Play'
                    color="#841584"
                    accessibilityLabel="Play"
                  />
                </View>

                <View style={{flex: 1}}>
                  <Button
                    onPress={this.props.closeGameOptionsModal}
                    title='Cancel'
                    color="#841584"
                    accessibilityLabel="Cancel"
                  />
                </View>
              </View>

              <View style={{flex: 1}} />
            </View>
          </View>

          <View style={{flex: 1}} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  gameOptionsModal: {
    marginTop: 25,
  },
});
