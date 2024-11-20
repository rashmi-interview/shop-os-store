import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react"
import "./Button.css"

interface ButtonProps extends ChakraButtonProps {

}

export function Button(props: ButtonProps) {
  return <ChakraButton className="icon-button" {...props}>
    {props.children}
  </ChakraButton>
}