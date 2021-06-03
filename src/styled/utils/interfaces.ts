export type FlexAlign =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'

export interface IRow {
  justify?: FlexAlign
  allCenter?: boolean
  alignItems?: FlexAlign
}

export type FlexDirection = 'column' | 'row' | 'unset'

type ColumnSize = '10%' | '20%' | '25%' | '33%' | '50%' | '75%' | '100%'
export interface IColumn {
  size: ColumnSize
  justify?: FlexAlign
  alignItems?: FlexAlign
  alignContent?: FlexAlign
  background?: string
  allCenter?: boolean
  direction?: FlexDirection
  minWidth?: string
}

enum VARIANT {
  PRIMARY,
  SECONDARY,
}

export interface IButton {
  variant?: VARIANT
  size?: ColumnSize
  fontSize?: string
  minWidth?: string
}
