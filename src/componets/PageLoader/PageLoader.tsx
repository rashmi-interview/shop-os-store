import { Center } from "@chakra-ui/react"
import Loader from "../../assets/loader.svg?react"

function PageLoader() {
  return <Center height="100vh" width="100%">
    <Loader />
  </Center>
}

export default PageLoader