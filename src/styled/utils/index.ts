import styled, { css } from 'styled-components'
import { IButton, IColumn, IRow } from '@styled/utils/interfaces'

export const CenterAllFlex = css`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

export const Column = styled.div<IColumn>`
  flex-grow: 1;
  flex-direction: ${({ direction }) => direction || 'unset'};
  width: ${(props) => props.size};
  min-width: ${(props) => props.minWidth || 'fit-content'};
  background-color: ${(props) => props.background || props.theme.colors.backgroundColor};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  align-content: ${({ alignContent }) => alignContent || 'flex-start'};
  ${({ allCenter }) => (allCenter ? CenterAllFlex : '')};
`

export const Row = styled.div<IRow>`
  display: flex;
  width: 100%;
  height: 20%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1px;
  align-content: center;
  align-items: center;
  justify-content: ${({ justify }) => justify || 'center'};
  ${({ allCenter }) => (allCenter ? CenterAllFlex : '')};
`
enum VARIANT {
  PRIMARY,
  SECONDARY,
}

export const SButton = styled.button<IButton>`
  width: ${({ size }) => size || '25%'};
  height: 100%;
  font-size: ${(props) => props.theme.fontSizes.medium};
  border: ${(props) => `1px solid ${props.theme.colors.backgroundColor}`};
  ${(props) => {
    switch (props.variant) {
      case VARIANT.SECONDARY:
        return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
        `
      case VARIANT.PRIMARY:
      default:
        return `
          color: ${props.theme.palette.primary.contrastText};
          background-color: ${props.theme.palette.primary.main};
        `
    }
  }}
`
