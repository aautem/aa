import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameRow from './game-row';
import { Col, Row } from 'react-native-easy-grid';
const _appSS = require('../../../styles/app');

function mapStateToProps(state) {
  return {
    //
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    //
  }, dispatch);
};

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps(nextProps) {
  //   // check for game over, etc.
  // }

  render() {
    if (!this.props.game) {
      return null;
    }

    const rows = [];
    for (let count = 0; count < this.props.game.boardSize; count ++) {
      rows.push(
        <GameRow
          key={`row-${count}`}
          rowId={count}
          game={this.props.game}
        />
      );
    }

    return (
      <Row size={12/14}>
        <Col style={{ paddingBottom: 20 }}>
          { rows }
        </Col>
      </Row>
    );
  }
}

GameContainer.propTypes = {
  game: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);