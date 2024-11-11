import React, { Component } from 'react'
export default class Extra extends Component {
    constructor(){
        super()
    this.state={
      title:"Manager"
    }
      }
      render() {
        return (
          <>
          <Extra title={this.state.title}/>
          </>
        )
      }
}