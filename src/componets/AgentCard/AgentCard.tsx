import { Box, Image, Text } from "@chakra-ui/react"
import { createContext, useContext } from 'react'
import BGRemover from "./../../assets/background-remover.png"
import BGChanger from "./../../assets/background-changer.png"
import { AgentType } from "../../pages/Agents/Agents";
import { IconMapping, AgentCardProps, AgentCardIconProps, AgentCardTitleProps, AgentCardDescriptionProps, SampleDescription } from "./AgentCard.types"
import "./AgentCard.css"

const AgentCardContext = createContext<AgentType | undefined>(undefined);

function useAgentCardContext() {
  const context = useContext(AgentCardContext);
  if (!context) {
    throw new Error('Toggle compound components must be rendered within the Toggle component');
  }
  return context;
}


export function AgentCard(props: AgentCardProps) {
  return <AgentCardContext.Provider value={props.agent}>
    <Box className="agent-card">
      {props.children}
    </Box>
  </AgentCardContext.Provider>
}


export function AgentCardIcon(props: AgentCardIconProps) {
  const IconComponent = IconMapping[props.icon]
  return <IconComponent className="agent-card__icon" />
}


export function AgentCardTitle(props: AgentCardTitleProps) {
  return <Box className="agent-card__title">
    {props.children}
  </Box>
}


export function AgentCardDescription(props: AgentCardDescriptionProps) {
  return <Box className="agent-card__desc">
    {props.children}
  </Box>
}


function AgentCardHoverType1() {
  return <Box className="agent-card__hover agent-card__hover1">
    <Image src={BGRemover} className="agent-card__hover1-image" />
  </Box>
}


function AgentCardHoverType2() {
  return <Box className="agent-card__hover agent-card__hover2">
    <Image src={BGChanger} className="agent-card__hover2-image" />
  </Box>
}


function AgentCardHoverType3() {
  return <Box className="agent-card__hover agent-card__hover3">
    <Box className="agent-card__hover3-image-wrapper">
      <Image src={BGChanger} className="agent-card__hover3-image zoom-out" />
    </Box>
  </Box>
}


function AgentCardHoverType4() {
  return <Box className="agent-card__hover agent-card__hover4">
    <Text as="h3" className="agent-card__hover4-title">Product Description</Text>
    <Text as="p" className="agent-card__hover4-description"> {SampleDescription}</Text>
  </Box>
}


//HOC for rendering different types of hover effect
export function AgentCardHover() {
  const AgentCardTypeMapping = {
    'background-remover': AgentCardHoverType1,
    'background-changer': AgentCardHoverType2,
    'video-generator': AgentCardHoverType3,
    'description-generator': AgentCardHoverType4,
    'video-editor': undefined,
    'ai-shadows': undefined,
    'ai-model': undefined,
    'image-editor': undefined,
    'face-change': undefined,
    'smart-crop': undefined,
    'batch-edit': undefined,
    'avatars': undefined
  }

  const AgentCardContext = useAgentCardContext()
  const AgentHoverCard = AgentCardTypeMapping[AgentCardContext.agent_type]

  return AgentHoverCard ? <AgentHoverCard /> : null
}