import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  justify-content: center;
`

export const ContainerMobile = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  justify-content: center;
`
