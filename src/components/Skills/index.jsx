import {
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiSocketdotio,
  SiJest,
  SiPython,
  SiMongodb,
  SiMysql,
  SiReact,
  SiExpress,
  SiPrisma,
  SiNestjs,
  SiStyledcomponents
} from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import * as Styled from './styles'

export default function Skills() {
  return (
    <Styled.Container>
      <Styled.Li>
        <SiHtml5 />
        <Styled.Label>HTML</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiCss3 />
        <Styled.Label>CSS</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiReact />
        <Styled.Label>React.js</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiReact />
        <Styled.Label>React Native</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiNextdotjs />
        <Styled.Label>Next.js</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiTypescript />
        <Styled.Label>TypeScript</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <FaNode />
        <Styled.Label>Node.js</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiNestjs />
        <Styled.Label>Nest.js</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiExpress />
        <Styled.Label>Express</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiSocketdotio />
        <Styled.Label>Socket.io</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiJest />
        <Styled.Label>JEST</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiPython />
        <Styled.Label>Python</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiMongodb />
        <Styled.Label>MongoDB</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiMysql />
        <Styled.Label>MySQL</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiPrisma />
        <Styled.Label>Prisma</Styled.Label>
      </Styled.Li>
      <Styled.Li>
        <SiStyledcomponents />
        <Styled.Label>Styled Components</Styled.Label>
      </Styled.Li>
    </Styled.Container>
  )
}
