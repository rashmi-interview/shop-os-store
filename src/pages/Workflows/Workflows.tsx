import { Flex } from "@chakra-ui/react"
import Navigation from "../../navigation/Navigation"
import { PageContent } from "../PageContent/PageContent"
import PageTitle from "../PageTitle/PageTitle"

function Workflows() {

  return (
    <Flex>
      <Navigation />
      <PageContent>
        <PageTitle>Workflows</PageTitle>
      </PageContent>
    </Flex>
  )
}

export default Workflows
