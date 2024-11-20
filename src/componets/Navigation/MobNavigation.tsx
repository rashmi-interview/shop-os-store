import {
  Box, Button, Image
} from "@chakra-ui/react"
import MenuIcon from "../../assets/menu.svg?react"
import Logo from "../../assets/sentientagi_logo.jpeg"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import "./Navigation.css"

export function MobNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Box as="nav" className="mob-navigation">
      <NavLink to="/" className="mob-navigation__logo">
        <Image src={Logo} className="mob-logo" />
      </NavLink>
      <Box className={!showMenu ? "mob-navigation__menu" : "mob-navigation__menu show"}>
        <NavLink to="/stores" className="mob-navigation__menu-item">Stores</NavLink>
        <NavLink to="/workflows" className="mob-navigation__menu-item">Workflows</NavLink>
      </Box>
      <Button type="button" variant="plain" onClick={() => setShowMenu(!showMenu)}>
        <MenuIcon />
      </Button>
    </Box>
  )
}