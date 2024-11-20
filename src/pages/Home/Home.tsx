import { Button, Center, Box, HStack, Input } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { PageContent } from "../PageContent/PageContent"
import { Heading } from "../../componets/Heading/Heading"
import Navigation from "../../navigation/Navigation"
import AddOutline from "../../assets/add-outline.svg?react"
import "./Home.css"

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Navigation />
      <PageContent>
        <Center height="100vh" flexDirection="column">
          <Heading level="h1">How can I assist you today?</Heading>
          <Box className="input__wrapper">
            <AddOutline className="input__icon" />
            <Input type="text"
              border="1px solid #E5E5E5"
              className="input"
              placeholder="What are we selling today?"
            />
          </Box>
          <HStack mt="20px">
            <Button type="button" aria-label="Upload" mb={4}>Upload</Button>
            <Button type="button" aria-label="Agents" mb={4} onClick={() => navigate("/agents")}>Agents</Button>
            <Button type="button" aria-label="Templates" mb={4}>Templates</Button>
          </HStack>
        </Center>
      </PageContent>
    </>
  )
}

export default Home
