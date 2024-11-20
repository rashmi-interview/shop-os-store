import { Box } from "@chakra-ui/react"
import {
  NavLink
} from "react-router-dom"
import Home from "../../assets/home.svg?react"
import Store from "../../assets/store.svg?react"
import Workflow from "../../assets/workflow.svg?react"
import "./Navigation.css"

function Navigation() {
  return <Box as="nav" className="navigation">
    <NavLink to="/"
      className={({ isActive }) => (isActive ? 'navigation__item navigation__item--active' : 'navigation__item')}>
      <Home />
    </NavLink>
    <NavLink to="/stores"
      className={({ isActive }) => (isActive ? 'navigation__item navigation__item--active' : 'navigation__item')}>
      <Store />
    </NavLink>
    <NavLink to="/workflows"
      className={({ isActive }) => (isActive ? 'navigation__item navigation__item--active' : 'navigation__item')}>
      <Workflow />
    </NavLink>
  </Box >
}

export default Navigation