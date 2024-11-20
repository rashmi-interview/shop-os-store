import { useNavigate } from "react-router-dom"
import { HStack } from "@chakra-ui/react"
import ArrowLeft from "../../assets/arrow-left.svg?react"
import { Heading } from "../../componets/Heading/Heading"
import "./PageTitle.css"

interface PageTitleProps {
  children: React.ReactNode
}

function PageTitle(props: PageTitleProps) {
  const navigate = useNavigate();

  return <Heading level="h1">
    <HStack>
      <ArrowLeft className="back-btn" onClick={() => navigate(-1)} />
      {props.children}
    </HStack>
  </Heading>
}

export default PageTitle