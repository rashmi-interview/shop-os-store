import { Box, Center } from "@chakra-ui/react"
import { Heading } from "../../componets/Heading/Heading"
import {
  AgentCard,
  AgentCardTitle,
  AgentCardDescription,
  AgentCardIcon,
  AgentCardHover
} from "../../componets/AgentCard/AgentCard"
import { useEffect, useState } from "react"
import { IconType } from "../../componets/AgentCard/AgentCard.types"
import { getAgents, getAgentFilters, filterAgents } from "./agents.service"
import { PageContent } from "../PageContent/PageContent"
import Navigation from "../../componets/Navigation/Navigation"
import { Filter, FilterChip } from "../../componets/Filters/Filter"
import Loader from "../../assets/loader.svg?react"
import PageTitle from "../PageTitle/PageTitle"
import { isMob } from "../../constants"
import { MobNavigation } from "../../componets/Navigation/MobNavigation"
import "./Agents.css"

export interface AgentType {
  id: string | number
  title: string
  agent_type: IconType
  description: string
  tags: AgentFilterType[]
}

export interface AgentFilterType {
  label: string;
}

function Agents() {
  const [isLoading, setIsLoading] = useState(true)
  const [agents, setAgents] = useState<AgentType[]>([]);
  const [filters, setFilters] = useState<AgentFilterType[]>([]);
  const [appliedFilter, setAppliedFilter] = useState<AgentFilterType | undefined>();

  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      const agentsResponse = await getAgents();
      const agentFilterResponse: AgentFilterType[] = await getAgentFilters();
      setAgents(agentsResponse);
      setFilters(agentFilterResponse);
      setAppliedFilter(agentFilterResponse[0])
      setIsLoading(false);
    }
    getPageData();
  }, [])

  async function setFilter(filter: AgentFilterType) {
    setIsLoading(true);
    setAppliedFilter(filter);
    const response = await filterAgents(filter)
    setAgents(response)
    setIsLoading(false);
  }

  return (
    <>
      {isMob ? <MobNavigation /> : <Navigation />}

      <PageContent>
        <PageTitle>Agents</PageTitle>

        {isLoading ? <Center className="agents__no-data">
          <Loader />
        </Center> : null}

        {!isLoading ? <Box className="agents__filter">
          <Filter selected={appliedFilter?.label}>
            {filters.map((item) => {
              return <FilterChip key={item.label} value={item.label} onClick={() => setFilter(item)} />
            })}
          </Filter>
        </Box> : null}

        {!isLoading && agents?.length ? <Box as="section" className="agents-grid">
          {agents.map((agent) => {
            return <AgentCard key={agent.id} agent={agent}>
              <AgentCardIcon icon={agent.agent_type} />
              <AgentCardTitle>{agent.title}</AgentCardTitle>
              <AgentCardDescription>{agent.description}</AgentCardDescription>
              <AgentCardHover />
            </AgentCard>
          })}
        </Box> : null}

        {!isLoading && agents.length === 0 ? <Center className="agents__no-data">
          <Heading level="h2">No agents found</Heading>
        </Center> : null}

      </PageContent>
    </>
  )
}

export default Agents
