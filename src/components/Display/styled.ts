import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  text-align: right;
  font-weight: 200;
  flex: 0 0 auto;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  justify-content: center;
`

export const Text = styled.div`
  font-size: ${(props) => props.theme.fontSizes.large};
  padding: 0.2rem 0.7rem 0.1rem 0.5rem;
`
