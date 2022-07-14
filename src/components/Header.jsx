import React, { Component } from 'react'

class Header extends Component {
  shouldComponentUpdate(nextState, nextProps) {
    return false
  }
  render() {
    return <h1>Robofriends</h1>
  }
}

export default Header

// const Header = () => {
//   console.log('Header')

//   return <h1>RoboFriends</h1>
// }

// export default React.memo(Header, (prevProps, nextProps) =>
//   prevProps.show === nextProps.show ? true : false
// )
