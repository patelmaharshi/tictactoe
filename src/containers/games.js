import React, {Component} from 'react'
import {Container, Picholder, Picture} from '../styled/games'
import Relay from 'react-relay'
import {Link} from 'react-router'

class games extends Component {

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
      ]
    }
  }

  

  render() {
    
    return (
      <Container>
        <Picholder>
          <Picture>
          <img src={require('./chess.png')} alt={'tictac'}/>
            Chess
          </Picture>
        </Picholder>
         <Picholder>
         <Link
              to={'http://localhost:3000/'}
            >
          <Picture>
          <img src={require('./tictactoe.jpg')} alt={'tictac'}/>
            TicTacToe
          </Picture>
          </Link>
        </Picholder>
        <Picholder>
          <Picture>
          <img src={require('./pacman.png')} alt={'tictac'}/>
          Pacman
          </Picture>
        </Picholder>
        <Picholder>
          <Picture>
          <img src={require('./pockemon.jfif')} alt={'tictac'}/>
          Pokemon
          </Picture>
        </Picholder>
         <Picholder>
          <Picture>
          <img src={require('./deadpool.jfif')} alt={'tictac'}/>
          Deadpool
          </Picture>
        </Picholder>
        <Picholder>
          <Picture>
          <img src={require('./bowling.jfif')} alt={'tictac'}/>
            Bowling
          </Picture>
        </Picholder>
         <Picholder>
          <Picture>
          <img src={require('./patta.jfif')} alt={'tictac'}/>
            Cards
          </Picture>
        </Picholder>
         <Picholder>
          <Picture>
          <img src={require('./basketball.png')} alt={'tictac'}/>
          Basket Ball
          </Picture>
        </Picholder> <Picholder>
          <Picture>
          <img src={require('./quiz.jfif')} alt={'tictac'}/>
          Quiz
          </Picture>
        </Picholder>
      </Container>
    )
  }
}

export default Relay.createContainer(
  games, {
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
