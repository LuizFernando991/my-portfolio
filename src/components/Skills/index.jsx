import {
  SiNextdotjs,
  SiTypescript,
  SiSocketdotio,
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiExpress,
  SiPrisma,
  SiNestjs,
  SiPostgresql,
  SiGraphql,
  SiAmazonaws,
  SiDocker,
  SiGit
} from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import * as Styled from './styles'

export default function Skills() {
  return (
    <Styled.Container>
      <Styled.Li>
        <SiTypescript />
        <Styled.Label>TypeScript</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <FaNode />
        <Styled.Label>Node.js</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <FaGolang />
        <Styled.Label>Golang</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiNestjs />
        <Styled.Label>Nest.js</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiNextdotjs />
        <Styled.Label>Next.js</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiReact />
        <Styled.Label>React.js</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiExpress />
        <Styled.Label>Express</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiGraphql />
        <Styled.Label>GraphQL</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiSocketdotio />
        <Styled.Label>Socket.io</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiMongodb />
        <Styled.Label>MongoDB</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiPostgresql />
        <Styled.Label>PostgresSQL</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiPrisma />
        <Styled.Label>Prisma</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiTailwindcss />
        <Styled.Label>Tailwind</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiAmazonaws />
        <Styled.Label>AWS</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiDocker />
        <Styled.Label>Docker</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiGit />
        <Styled.Label>Git</Styled.Label>
      </Styled.Li>
    </Styled.Container>
  )
}
