type Skill = {
  name: string
  color: string
}

export const skills: Map<string, Skill> = new Map([
  [
    "rabbitmq",
    {
      name: "RabbitMQ",
      color: "#FF6600",
    },
  ],
  [
    "ollama",
    {
      name: "Ollama",
      color: "#080808",
    },
  ],
])
