// Code ThemedDecoration Component Here
import React from 'react'

export default class ThemedDecoration extends React.Component {
  render(){
    const theme = this.props.theme
    const childrenWithClass = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: theme
      })
    }) // end React.Children

    return(
      <div>
        {childrenWithClass}
      </div>
    )

  } // end render
} // end class
