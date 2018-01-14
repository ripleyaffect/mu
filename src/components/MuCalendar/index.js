import React from 'react'
import styled from 'styled-components'

import { colorMap, purple, purpleBoxShadow, white } from 'styling/vars'

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

  background-color: ${({ active }) => active ? purple : white};
  box-shadow: ${({ active }) => active ? purpleBoxShadow : 'none'};
  color: ${({ active, color }) => active ? white : colorMap[color]};
`

const daysOfWeek = ['S', 'M','T','W','T','F','S']
const prevMonthDays = [31]
const currentMonthDays = Array.apply(null, Array(31))
const nextMonthDays = [1, 2, 3]

const MuCalendar = () => (
  <Container>
    {daysOfWeek.map((day, index) => <Day key={index}>{day}</Day>)}
    {prevMonthDays.map((day, index) => <Day color="lightGrey" key={index}>{day}</Day>)}
    {currentMonthDays.map((day, index) => <Day active={index === 13} color="grey" key={index}>{index + 1}</Day>)}
    {nextMonthDays.map((day, index) => <Day color="lightGrey" key={index}>{day}</Day>)}
  </Container>
)

export default MuCalendar
