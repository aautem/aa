export default function getInitialState() {
  return {
    auth: {
      authenticated: true,
      email: null,
      password: null,
      loading: false,
      loaded: true,
      error: null,
    },
    app: {
      page: 'menu',
      loading: false,
      loaded: false,
      error: null,
    },
    user: {
      id: 'abc-def-ghi-jkl',
      username: 'aautem',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      color: 'powderblue',
      inGame: false,
      showModal: false,
      loading: false,
      loaded: true,
      error: null,
    },
    stats: {
      wins: 0,
      losses: 0,
      ties: 0,
      totalPoints: 0,
      gamesPlayed: 0,
    },
    series: {
      players: {}, // Two player ID keys
      '$PLAYER ID': {
        id: 'abc-def-ghi-jkl',
        username: 'aautem',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        color: 'powderblue',
        wins: 0,
        losses: 0,
        ties: 0,
        totalScore: 0,
      },
      length: 7,
      size: 4,
      timer: false,
      showModal: false,
      gamesPlayed: 0,
      games: [], // Array of game objects { gameId: 1, winner: $PID, $PID: { score }, $PID: { score } }
      loading: false,
      loaded: false,
      error: null,
    },
    game: {
      players: {
        'abc-def-ghi-jkl': {
          id: 'abc-def-ghi-jkl',
          username: 'aautem',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          score: 0,
          color: 'powderblue',
        },
        'zyx-wvu-tsr-qpo': {
          id: 'zyx-wvu-tsr-qpo',
          username: 'cdturner',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
          score: 0,
          color: 'steelblue',
        }
      },
      turn: 'abc-def-ghi-jkl',
      board: [],
      boardPoints: [],
      timer: null,
      winner: null,
      loading: false,
      loaded: false,
      error: null,
    },
    settings: {
      size: 4,
      length: 7,
      timer: false,
      showModal: false,
      loading: false,
      loaded: false,
      error: null,
    },
    opponent: {
      profile: {},
      stats: {},
      socketId: null,
      inGame: false,
      loading: false,
      loaded: false,
      error: null,
    },
    leaderboard: {
      data: [], // Array of stats objects
      loading: false,
      loaded: false,
      error: null,
    },
    messages: {
      data: [], // Array of message objects
      loading: false,
      loaded: false,
      error: null,
    },
    friends: {
      data: [], // Array of user objects
      loading: false,
      loaded: false,
      error: null,
    },
    history: {
      data: [], // Array of game result objects
      loading: false,
      loaded: false,
      error: null,
    },
  };
}