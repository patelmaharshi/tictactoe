import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'
import Relay from 'react-relay'

class Profile extends Component {

  static defaultProps = {
    user: {
      email: 'USER_EMAIL',
      games: [
        {
          winner: true,
          guessed: true,
          correctly: true,
          createdAt: '07/28/2018',
          id: '0001'
        },
        {
          winner: true,
          guessed: false,
          correctly: false,
          createdAt: '07/28/2018',
          id: '0002'
        },
        {
          winner: false,
          guessed: true,
          correctly: true,
          createdAt: '07/29/2018',
          id: '0003'
        },
        {
          winner: true,
          guessed: true,
          correctly: false,
          createdAt: '07/30/2018',
          id: '0004'
        },
        {
          winner: true,
          guessed: true,
          correctly: true,
          createdAt: '07/30/2018',
          id: '0005'
        },
      ]
    }
  }

  get records() {
    return this.props.user.games.map( (game,index) => {
      return (
        <GameRecord
          key={index}
          index={index}
        >
          <Column>
            {(game.winner) ? 'Won!' : "Didn't win"}
          </Column>
          <Column>
            {(game.guessed) ? 'Robot!' : "Human"}
          </Column>
          <Column>
            {(game.correctly) ? 'Yes!' : "No"}
          </Column>
          <Column>
            {game.createdAt}
          </Column>
        </GameRecord>
      )
    })
  }

  render() {
    let {email} = this.props.user
    return (
      <Container>
        <Name>
          {email}
        </Name>
        <GameList>
          <GameListHeader>
            MyGames
          </GameListHeader>
          <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
          {this.records}
        </GameList>
      </Container>
    )
  }
}

export default Relay.createContainer(
  Profile, {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          user {
            id
          }
        }
      `,
    }
  }
)
