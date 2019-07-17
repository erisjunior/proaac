import styled from 'styled-components'
import { white, black, darkgreen } from 'styles/colors'

export const Container = styled.div`
  background: ${white};
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8);
`

export const Image = styled.img`
  height: 80px;
`

export const Nav = styled.ul``

export const ItemNav = styled.li`
  display: inline-block;
  border: 2px solid transparent;
  border-radius: 4px;

  padding: 5px;
  margin: 0 10px;

  color: ${black};

  transition: 0.5s;

  :hover {
    cursor: pointer;

    color: ${darkgreen};
    border-bottom: 2px solid ${darkgreen};
    transition: 0.5s;
  }
`
