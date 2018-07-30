import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import HomeDrawer from '../components/HomeDrawer'
//import NavDrawer from '../components/NavDrawer'
import {Header, Main} from '../styled/Template'
import Relay from 'react-relay'

injectTapEventPlugin()

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <HomeDrawer
            auth={this.props.route.auth}
            authenticated={this.props.viewer.user}
          />
          <Header>
            GAMES
          </Header>
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Relay.createContainer(
  Template, {
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
