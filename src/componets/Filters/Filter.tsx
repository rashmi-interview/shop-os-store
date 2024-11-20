import { createContext, useContext } from 'react'
import { Box } from "@chakra-ui/react"
import "./Filter.css"

interface FilterProps {
  selected?: string;
  children: React.ReactNode;
}

interface FilterChipProps {
  value: string
  onClick?: (...args: any[]) => any
}

const FilterContext = createContext<any>(undefined);

export function Filter(props: FilterProps) {

  return <FilterContext.Provider value={{ selected: props.selected }}>
    <Box className="filter">
      {props.children}
    </Box>
  </FilterContext.Provider>
}

export function FilterChip(props: FilterChipProps) {
  const context = useContext(FilterContext)

  return <Box as="span"
    onClick={props?.onClick}
    className={`filter__chip ${context.selected && props.value === context.selected ? "filter__chip--selected" : ""}`}>
    {props.value}
  </Box>
}
