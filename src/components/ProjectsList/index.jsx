import { useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import { FaNode } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiSocketdotio,
  SiMongodb,
  SiReact,
  SiExpress,
  SiYoutube,
  SiGithub,
  SiPrisma,
  SiTailwindcss
} from 'react-icons/si'
import { BiLink } from 'react-icons/bi'
import ModalVideo from '../ModalVideo'

import i18next from 'i18next'

import instagramPNG from '../../assets/Instagrammacbook.png'
import netflixPNG from '../../assets/netflixmacbookiphone.png'
import airbnbPNG from '../../assets/airbnbmackbookiphone.png'
import chatPNG from '../../assets/chatmacbook.png'
import quizPNG from '../../assets/quizmacbook.png'

import * as Styled from './styles'

export default function ProjectsList() {
  const [selectedLink, setSelectedLink] = useState(null)

  return (
    <>
      {selectedLink && (
        <ModalVideo setLink={setSelectedLink} link={selectedLink} />
      )}
      <Styled.Container>
        <Slide direction="left" triggerOnce>
          <Styled.ProjectItem>
            <Styled.PreviewImageContainer>
              <Styled.PreviewImage src={instagramPNG} />
            </Styled.PreviewImageContainer>
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
                      setSelectedLink(
                        'https://www.youtube.com/embed/VPiDCr06BZQ'
                      )
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
        </Slide>
        <Slide direction="right" triggerOnce>
          <Styled.ProjectItem>
            <Styled.PreviewImage src={airbnbPNG} />
            <Styled.ProejctItemDescriptionContainer>
              <Styled.Title>Airbnb Clone</Styled.Title>
              <Styled.ProjectDescription>
                {i18next.t('projects.airbnb.description')}
              </Styled.ProjectDescription>
              <Styled.Icons>
                <Styled.TecIconsContainer>
                  <SiTypescript />
                  <SiNextdotjs />
                  <SiMongodb />
                  <SiPrisma />
                  <SiTailwindcss />
                </Styled.TecIconsContainer>
                <Styled.CodeAndDemoLinks>
                  <Styled.Link
                    target="_blank"
                    href="https://project-rent-property.vercel.app/"
                  >
                    <BiLink color="#333" />
                  </Styled.Link>
                  <Styled.Link
                    onClick={() =>
                      setSelectedLink(
                        'https://www.youtube.com/embed/PBqff_U9kr0'
                      )
                    }
                  >
                    <SiYoutube color="#333" />
                  </Styled.Link>
                  <Styled.Link
                    target="_blank"
                    href="https://github.com/LuizFernando991/Project_Airbnb"
                  >
                    <SiGithub color="#333" />
                  </Styled.Link>
                </Styled.CodeAndDemoLinks>
              </Styled.Icons>
            </Styled.ProejctItemDescriptionContainer>
          </Styled.ProjectItem>
        </Slide>
        <Slide direction="left" triggerOnce>
          <Styled.ProjectItem>
            <Styled.PreviewImage src={netflixPNG} />
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
                      setSelectedLink(
                        'https://www.youtube.com/embed/pJkql6tAQug'
                      )
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
        </Slide>
        <Slide direction="right" triggerOnce>
          <Styled.ProjectItem>
            <Styled.PreviewImage src={chatPNG} />
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
                      setSelectedLink(
                        'https://www.youtube.com/embed/k0k2cgNIhDo'
                      )
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
        </Slide>
        <Slide direction="left" triggerOnce>
          <Styled.ProjectItem>
            <Styled.PreviewImage src={quizPNG} />
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
                      setSelectedLink(
                        'https://www.youtube.com/embed/WI9Q1DUZudM'
                      )
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
        </Slide>
      </Styled.Container>
    </>
  )
}
