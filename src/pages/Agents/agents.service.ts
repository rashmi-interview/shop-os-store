import { AgentFilterType, AgentType } from "./Agents"
import { agentsMockData, agentFilters } from "./mockData"

//TODO: Following are supposed to be replaced by real api calls
export function getAgents(): Promise<AgentType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(agentsMockData)
    }, 1000)
  })
}

export function getAgentFilters(): Promise<AgentFilterType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(agentFilters)
    }, 1000)
  })
}


export function filterAgents(filter: AgentFilterType): Promise<AgentType[]> {
  const results = applyFilterUtil(filter, agentsMockData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results)
    }, 2000)
  })
}


function applyFilterUtil(filter: AgentFilterType, data: AgentType[]): AgentType[] {
  if (filter.label === "All") return data;

  let results = data.filter((agent) => {
    const tag = agent.tags.find((tag) => tag.label === filter.label);
    if (tag) return agent;
  })
  return results
}