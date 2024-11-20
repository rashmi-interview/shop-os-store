import BackgroundRemover from "../../assets/background-removal.svg?react"
import { AgentType } from "../../pages/Agents/Agents";

export const IconMapping = {
  'background-remover': BackgroundRemover,
  'background-changer': BackgroundRemover,
  'video-generator': BackgroundRemover,
  'description-generator': BackgroundRemover,
  'smart-crop': BackgroundRemover,
  'avatars': BackgroundRemover,
  'video-editor': BackgroundRemover,
  'ai-shadows': BackgroundRemover,
  "batch-edit": BackgroundRemover,
  "ai-model": BackgroundRemover,
  "image-editor": BackgroundRemover,
  "face-change": BackgroundRemover,
};

export type IconType = keyof typeof IconMapping

export interface AgentCardProps {
  agent: AgentType
  children: React.ReactNode
}

export interface AgentCardIconProps {
  icon: IconType
}


export interface AgentCardTitleProps {
  children: React.ReactNode
}


export interface AgentCardDescriptionProps {
  children: React.ReactNode
}

export const SampleDescription = "Add a touch of natural charm to your wardrobe with this elegant handwoven rattan box bag. Crafted from high-quality natural fibers, this structured handbag features a sturdy top handle and a secure clasp closure"