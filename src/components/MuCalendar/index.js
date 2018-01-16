import moment from 'moment'
import React, { Component } from 'react'
import styled from 'styled-components'

import {
  black,
  grey,
  lightGrey,
  purple,
  purpleBoxShadow,
  white,
} from 'styling/vars'

global.moment = moment

const DAYS_OF_WEEK = ['S', 'M','T','W','T','F','S']
const DEFAULT_DAY_COLOR = lightGrey
const DAY_COLOR_MAP = {
  week: black,
  today: white,
  month: grey,
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 165px;
  width: 100%;
`

const Day = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  margin: 2px;
  border-radius: 50%;
  font-size: 13px;
  font-weight: 400;

  background-color: ${({ type }) => type === 'today' ? purple : white};
  box-shadow: ${({ type }) => type === 'today' ? purpleBoxShadow : 'none'};
  color: ${({ type }) => DAY_COLOR_MAP[type] || DEFAULT_DAY_COLOR};
`

class MuCalendar extends Component {
  constructor (props) {
    super(props)

    this.getDayType = this.getDayType.bind(this)
    this.generateDays = this.generateDays.bind(this)

    this.state = {
      days: this.generateDays(),
    }
  }

  getDayType(now, day) {
    if (now.month() === day.month()) {
      if (now.date() == day.date()) {
        return 'today'
      }
      return 'month'
    }

    return 'other'
  }

  generateDays () {
    const now = moment()
    const days = []

    // Start the iterator on the first Sunday on or before the 1nd
    const iterator = moment().subtract(now.date() - 1, 'd')
    iterator.subtract(iterator.day(), 'd')

    while (
        iterator < now ||
        iterator.month() <= now.month() ||
        iterator.day() !== 0) {
      days.push({
        type: this.getDayType(now, iterator),
        date: iterator.date()
      })
      iterator.add(1, 'd')
    }

    return days
  }

  render () {
    const { days } = this.state

    return <Container>
      {DAYS_OF_WEEK.map((day, index) => <Day type="week" key={index}>{day}</Day>)}
      {days.map((day, index) => <Day {...day} key={index}>{day.date}</Day>)}
    </Container>
  }
}

export default MuCalendar
