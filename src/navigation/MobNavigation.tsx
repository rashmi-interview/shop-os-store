import {
  Box,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react"
import MenuIcon from "../assets/menu.svg?react"
import "./Navigation.css"

export function MobNavigation() {
  return (
    <Box as="nav" className="mob-navigation">
      <Box direction="column">
        <MenuRoot open>
          <MenuTrigger className="mob-navigation__trigger">
            <MenuIcon />
          </MenuTrigger>
          <MenuContent className="mob-navigation__menu">
            <MenuItem value="home">Home</MenuItem>
            <MenuItem value="store">Store</MenuItem>
            <MenuItem value="workflow">Workflow</MenuItem>
          </MenuContent>
        </MenuRoot>
      </Box>
    </Box>
  )
}