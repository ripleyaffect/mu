import moment from 'moment'
import React, { Component } from 'react'
import styled from 'styled-components'

const SECOND_INTERVAL = 1

const Time = styled.h2`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0;
  margin-bottom: 12px;

  font-size: 36px;
  font-weight: 500;
`

class MuClock extends Component {
  constructor (props) {
    super(props)

    this.tick = this.tick.bind(this)

    this.state = {
      now: moment(),
      interval: setInterval(this.tick, SECOND_INTERVAL * 1000),
    }
  }

  componentWillUnmount () {
    clearInterval(this.state.interval)
  }

  tick () {
    this.setState({
      now: moment()
    })
  }

  render () {
    return <Time>
      {this.state.now.format('h:mm A')}
    </Time>
  }
}

export default MuClock
