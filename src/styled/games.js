import {media} from '../utils/media'
import styled from 'styled-components'

export const Container = styled.div`
  display: inline;
  border: 1px rgb(200,200,200) solid;
  width: 100%;
  min-height: 100vh;
  flex-direction: row;
  align-items: center;
  ${media.handheld`
    width: 100%;
  `}
`

export const Name = styled.h2`
  display: flex;
`

export const Picholder = styled.div`
  display: inline-block;
  flex-direction: row;
  padding-bottom: 2px;
  margin: 10px 0 5px 10px;
  width: 31%;
 
`
export const image = styled.img`
  width: 200px;
  resizeMOde: 'contain';  
`

export const Picture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 5px;
  justify-content: center;
  font-weight: bold;
  font-size: 2em;
`
export const myComponent = styled.img`
  display: flex;
`

export const GameRecord = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 5px 0;
  margin: 1px 0;
  background-color: ${props=>(props.index % 2 === 1)? 'rgb(225,225,225)' : 'rgb(240,240,240)'};
  box-sizing: border-box;
`

export const ColumnLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 5px 0;
  margin: 3px 0;
  box-sizing: border-box;
  font-weight: bold;
`

export const Column = styled.span`
  display: flex;
  width: 25%;
`
