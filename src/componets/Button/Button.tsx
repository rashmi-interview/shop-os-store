import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react"
import "./Button.css"

export function Button(props: ChakraButtonProps) {
  return <ChakraButton className="icon-button" {...props}>
    {props.children}
  </ChakraButton>
}