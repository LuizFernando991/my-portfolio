import { useState } from 'react'
import { FaNode } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiSocketdotio,
  SiMongodb,
  SiReact,
  SiExpress,
  SiYoutube,
  SiGithub
} from 'react-icons/si'

import ImageCarrosel from '../ImageCarrosel'

//instagram images
import InstagramImage1 from '../../assets/instagram1.png'
import InstagramImage2 from '../../assets/instagram2.png'
import InstagramImage3 from '../../assets/instagram3.png'
import InstagramImage4 from '../../assets/instagram4.png'

//netflix images
import NetflixImage1 from '../../assets/netflix1.png'
import NetflixImage2 from '../../assets/netflix2.png'

//chat images
import ChatImage1 from '../../assets/chat1.png'
import ChatImage2 from '../../assets/chat2.png'

//quiz images
import Quiz1 from '../../assets/quiz1.png'
import Quiz2 from '../../assets/quiz2.png'
import Quiz3 from '../../assets/quiz3.png'

import i18next from 'i18next'

import * as Styled from './styles'
import ModalVideo from '../ModalVideo'

export default function ProjectsList() {
  const [selectedLink, setSelectedLink] = useState(null)

  return (
    <>
      {selectedLink && (
        <ModalVideo setLink={setSelectedLink} link={selectedLink} />
      )}
      <Styled.Container>
        <Styled.ProjectItem>
          <ImageCarrosel
            images={[
              InstagramImage1,
              InstagramImage2,
              InstagramImage3,
              InstagramImage4
            ]}
          />
          <Styled.ProejctItemDescriptionContainer>
            <Styled.Title>Instagram Clone</Styled.Title>
            <Styled.ProjectDescription>
              {i18next.t('projects.instagram.description')}
            </Styled.ProjectDescription>
            <Styled.Icons>
              <Styled.TecIconsContainer>
                <FaNode />
                <SiExpress />
                <SiTypescript />
                <SiNextdotjs />
                <SiMongodb />
              </Styled.TecIconsContainer>
              <Styled.CodeAndDemoLinks>
                <Styled.Link
                  onClick={() =>
                    setSelectedLink('https://www.youtube.com/embed/VPiDCr06BZQ')
                  }
                >
                  <SiYoutube color="#333" />
                </Styled.Link>
                <Styled.Link
                  target="_blank"
                  href="https://github.com/LuizFernando991/Projeto_Instagram"
                >
                  <SiGithub color="#333" />
                </Styled.Link>
              </Styled.CodeAndDemoLinks>
            </Styled.Icons>
          </Styled.ProejctItemDescriptionContainer>
        </Styled.ProjectItem>
        <Styled.ProjectItem>
          <ImageCarrosel images={[NetflixImage1, NetflixImage2]} />
          <Styled.ProejctItemDescriptionContainer>
            <Styled.Title>Netflix Interface</Styled.Title>
            <Styled.ProjectDescription>
              {i18next.t('projects.netflix.description')}
            </Styled.ProjectDescription>
            <Styled.Icons>
              <Styled.TecIconsContainer>
                <SiReact />
              </Styled.TecIconsContainer>
              <Styled.CodeAndDemoLinks>
                <Styled.Link
                  onClick={() =>
                    setSelectedLink('https://www.youtube.com/embed/pJkql6tAQug')
                  }
                >
                  <SiYoutube color="#333" />
                </Styled.Link>
                <Styled.Link
                  target="_blank"
                  href="https://github.com/LuizFernando991/Project-React-Netflix"
                >
                  <SiGithub color="#333" />
                </Styled.Link>
              </Styled.CodeAndDemoLinks>
            </Styled.Icons>
          </Styled.ProejctItemDescriptionContainer>
        </Styled.ProjectItem>
        <Styled.ProjectItem>
          <ImageCarrosel images={[ChatImage2, ChatImage1]} />
          <Styled.ProejctItemDescriptionContainer>
            <Styled.Title>Realtime chat</Styled.Title>
            <Styled.ProjectDescription>
              {i18next.t('projects.chat.description')}
            </Styled.ProjectDescription>
            <Styled.Icons>
              <Styled.TecIconsContainer>
                <FaNode />
                <SiExpress />
                <SiTypescript />
                <SiReact />
                <SiMongodb />
                <SiSocketdotio />
              </Styled.TecIconsContainer>
              <Styled.CodeAndDemoLinks>
                <Styled.Link
                  onClick={() =>
                    setSelectedLink('https://www.youtube.com/embed/k0k2cgNIhDo')
                  }
                >
                  <SiYoutube color="#333" />
                </Styled.Link>
                <Styled.Link
                  target="_blank"
                  href="https://github.com/LuizFernando991/Project_Chat"
                >
                  <SiGithub color="#333" />
                </Styled.Link>
              </Styled.CodeAndDemoLinks>
            </Styled.Icons>
          </Styled.ProejctItemDescriptionContainer>
        </Styled.ProjectItem>
        <Styled.ProjectItem>
          <ImageCarrosel images={[Quiz1, Quiz2, Quiz3]} />
          <Styled.ProejctItemDescriptionContainer>
            <Styled.Title>QuizMe</Styled.Title>
            <Styled.ProjectDescription>
              {i18next.t('projects.quiz.description')}
            </Styled.ProjectDescription>
            <Styled.Icons>
              <Styled.TecIconsContainer>
                <FaNode />
                <SiExpress />
                <SiReact />
                <SiMongodb />
              </Styled.TecIconsContainer>
              <Styled.CodeAndDemoLinks>
                <Styled.Link
                  onClick={() =>
                    setSelectedLink('https://www.youtube.com/embed/WI9Q1DUZudM')
                  }
                >
                  <SiYoutube color="#333" />
                </Styled.Link>
                <Styled.Link
                  target="_blank"
                  href="https://github.com/LuizFernando991/Projeto_QuizMe"
                >
                  <SiGithub color="#333" />
                </Styled.Link>
              </Styled.CodeAndDemoLinks>
            </Styled.Icons>
          </Styled.ProejctItemDescriptionContainer>
        </Styled.ProjectItem>
      </Styled.Container>
    </>
  )
}
