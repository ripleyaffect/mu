import React from 'react'
import styled from 'styled-components'

import * as names from './names'

const MuIcon = ({ name }) => names[name] || <span>¯\_(ツ)_/¯</span>

export default MuIcon
