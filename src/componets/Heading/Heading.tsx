import { Heading as ChakraHeading } from "@chakra-ui/react"
import "./heading.css"

export function Heading(props: { level: 'h1' | 'h2'; children: React.ReactNode }) {
  return <ChakraHeading className={`l-heading heading-${props.level}`}>
    {props.children}
  </ChakraHeading>
}