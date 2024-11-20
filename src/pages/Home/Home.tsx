import { Center, Box, HStack, Input } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { PageContent } from "../PageContent/PageContent"
import { Heading } from "../../componets/Heading/Heading"
import { Button } from "../../componets/Button/Button"
import Navigation from "../../navigation/Navigation"
import AddOutline from "../../assets/add-outline.svg?react"
import Upload from "../../assets/upload.svg?react"
import Agent from "../../assets/robot.svg?react"
import Template from "../../assets/template.svg?react"
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
            <Button type="button"
              disabled
              aria-label="Upload"
              mb={4}>
              <Upload />
              Upload
            </Button>
            <Button type="button"
              aria-label="Agents"
              mb={4}
              onClick={() => navigate("/agents")}>
              <Agent />
              Agents
            </Button>
            <Button type="button"
              disabled
              aria-label="Templates"
              mb={4}>
              <Template />
              Templates
            </Button>
          </HStack>
        </Center>
      </PageContent>
    </>
  )
}

export default Home
