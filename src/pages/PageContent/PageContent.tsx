import { Box } from "@chakra-ui/react"
import "./PageContent.css"

export function PageContent(props: { children: React.ReactNode }) {
  return <Box className="page-content">
    {props.children}
  </Box>
}
