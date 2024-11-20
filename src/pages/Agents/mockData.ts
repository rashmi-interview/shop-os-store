import { AgentType } from "./Agents";

export const agentsMockData: AgentType[] = [{
  id: 1,
  agent_type: "background-remover",
  title: "Background Remover",
  description: "Remove background in seconds.",
  tags: [{ label: "Image" }],
},
{
  id: 2,
  agent_type: "background-changer",
  title: "Background Changer",
  description: "Changes background of the image in seconds",
  tags: [{ label: "Image" }],
},
{
  id: 3,
  agent_type: "video-generator",
  title: "Video Generator",
  description: "Transform images into captivating videos in seconds",
  tags: [{ label: "Video" }],
},
{
  id: 4,
  agent_type: "description-generator",
  title: "Description Generator",
  description: "Remove background in seconds.",
  tags: [{ label: "Text" }],
},
{
  id: 5,
  agent_type: "smart-crop",
  title: "Smart Crop",
  description: "Automatically crops videos for different aspect ratios.",
  tags: [{ label: "Image" }],
},
{
  id: 6,
  agent_type: "avatars",
  title: "Avatars",
  description: "Choose or create your own avataars to promote products",
  tags: [],
},
{
  id: 7,
  agent_type: "video-editor",
  title: "Video Editor",
  description: "Transform images into captivating videos in seconds",
  tags: [{ label: "Video" }],
},
{
  id: 8,
  agent_type: "ai-shadows",
  title: "AI Shadows",
  description: "Remove backgrounds in seconds.",
  tags: [{ label: "3D" }],
},
{
  id: 9,
  agent_type: "batch-edit",
  title: "Batch Edit",
  description: "Transform images into captivating videos in seconds.",
  tags: [{ label: "Image" }, { label: "Video" }],
},
{
  id: 10,
  agent_type: "ai-model",
  title: "AI Model",
  description: "Remove backgrounds in seconds.",
  tags: [{ label: "3D" }],
}, {
  id: 11,
  agent_type: "image-editor",
  title: "Image Editor",
  description: "Transform images into captivating videos in seconds.",
  tags: [{ label: "Image" }],
}, {
  id: 12,
  agent_type: "face-change",
  title: "Face Change",
  description: "Remove backgrounds in seconds.",
  tags: [{ label: "Image" }, { label: "Video" }],
}]

export const agentFilters = [
  { label: "All" },
  { label: "Text" },
  { label: "Image" },
  { label: "Video" },
  { label: "3D" },
  { label: "Voice" },
  { label: "Misc" }
];