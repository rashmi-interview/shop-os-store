import { Flex } from "@chakra-ui/react"
import Navigation from "../../navigation/Navigation"
import { PageContent } from "../PageContent/PageContent"
import PageTitle from "../PageTitle/PageTitle";

function Stores() {

  return (
    <Flex>
      <Navigation />
      <PageContent>
        <PageTitle>My Stores</PageTitle>
      </PageContent>
    </Flex>
  )
}

export default Stores
