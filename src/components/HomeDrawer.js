import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {Link} from 'react-router'
import {NavToggleButton} from '../styled/NavDrawer'
import AuthButton from './AuthButton'

class HomeDrawer extends Component {
    state = {
      open: false,
      width: 250
    }

    toggle = () => {
      this.setState((prevState, props) => {
        return {
          open: !prevState.open
        }
      })
    }

    render() {
      return (
        <div>
          <NavToggleButton
            toggle={this.toggle}
            width={this.state.width}
            open={this.state.open}
          />
          <Drawer
            open={this.state.open}
            width={this.state.width}
          >
            <AuthButton
              auth={this.props.auth}
              authenticated={this.props.authenticated}
            />
            <Divider/>
            <Link
              to={'/games'}
            >
              <MenuItem
                onClick={this.toggle}
                primaryText={'Games'}

              />
            </Link>
            <Link
              to={'/'}
            >
              <MenuItem
                onClick={this.toggle}
                primaryText={'Restart'}
              />
            </Link>
            <Link
              to={'/profile'}
            >
              <MenuItem
                onClick={this.toggle}
                primaryText={'User Profile'}
              />
            </Link>
          </Drawer>
        </div>
      )
    }
}

export default HomeDrawer
