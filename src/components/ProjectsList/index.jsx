import { useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import { FaNode } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiExpress,
  SiYoutube,
  SiGithub,
  SiPrisma,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiGraphql,
  SiMysql,
  SiOpenai
} from 'react-icons/si'
import { BiLink } from 'react-icons/bi'
import ModalVideo from '../ModalVideo'

import i18next from 'i18next'

import instagramPNG from '../../assets/Instagrammacbook.png'
import netflixPNG from '../../assets/netflixmacbookiphone.png'
import airbnbPNG from '../../assets/airbnbmackbookiphone.png'
import tiktokPNG from '../../assets/tiktokmackbookiphone.png'
import pdfPNG from '../../assets/mackbookiphonepdf.png'

import * as Styled from './styles'

export default function ProjectsList() {
  const [selectedLink, setSelectedLink] = useState(null)

  return (
    <>
      {selectedLink && (
        <ModalVideo setLink={setSelectedLink} link={selectedLink} />
      )}
      <Styled.Container>
        <Slide direction="right" triggerOnce>
          <Styled.ProjectItem>
            <Styled.PreviewImage src={pdfPNG} />
            <Styled.ProejctItemDescriptionContainer>
              <Styled.Title>IA PDFhelper</Styled.Title>
              <Styled.ProjectDescription>
                {i18next.t('projects.pdfhelper.description')}
              </Styled.ProjectDescription>
              <Styled.Icons>
                <Styled.TecIconsContainer>
                  <SiTypescript />
                  <SiNextdotjs />
                  <SiTailwindcss />
                  <SiPrisma />
                  <SiMysql />
                  <SiOpenai />
                </Styled.TecIconsContainer>
                <Styled.CodeAndDemoLinks>
                  <Styled.Link
                    target="_blank"
                    href="https://pdfhelper-alpha.vercel.app/"
                  >
                    <BiLink color="#07c7e0" />
                  </Styled.Link>
                  <Styled.Link
                    onClick={() =>
                      setSelectedLink(
                        'https://www.youtube.com/embed/c52dNCwC7YQ'
                      )
                    }
                  >
                    <SiYoutube color="#ff0000" />
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
                    <BiLink color="#07c7e0" />
                  </Styled.Link>
                  <Styled.Link
                    onClick={() =>
                      setSelectedLink(
                        'https://www.youtube.com/embed/PBqff_U9kr0'
                      )
                    }
                  >
                    <SiYoutube color="#ff0000" />
                  </Styled.Link>
                  <Styled.Link
                    target="_blank"
                    href="https://github.com/LuizFernando991/Project_Airbnb"
                  >
                    <SiGithub color="#000" />
                  </Styled.Link>
                </Styled.CodeAndDemoLinks>
              </Styled.Icons>
            </Styled.ProejctItemDescriptionContainer>
          </Styled.ProjectItem>
        </Slide>
        <Slide direction="right" triggerOnce>
          <Styled.ProjectItem>
            <Styled.PreviewImage src={tiktokPNG} />
            <Styled.ProejctItemDescriptionContainer>
              <Styled.Title>TikTok Clone</Styled.Title>
              <Styled.ProjectDescription>
                {i18next.t('projects.tiktok.description')}
              </Styled.ProjectDescription>
              <Styled.Icons>
                <Styled.TecIconsContainer>
                  <FaNode />
                  <SiNestjs />
                  <SiGraphql />
                  <SiTypescript />
                  <SiReact />
                  <SiTailwindcss />
                  <SiPrisma />
                  <SiPostgresql />
                </Styled.TecIconsContainer>
                <Styled.CodeAndDemoLinks>
                  <Styled.Link
                    onClick={() =>
                      setSelectedLink(
                        'https://www.youtube.com/embed/4F-WcwPu9sw'
                      )
                    }
                  >
                    <SiYoutube color="#ff0000" />
                  </Styled.Link>
                  <Styled.Link
                    target="_blank"
                    href="https://github.com/LuizFernando991/Project-Tiktok"
                  >
                    <SiGithub color="#000" />
                  </Styled.Link>
                </Styled.CodeAndDemoLinks>
              </Styled.Icons>
            </Styled.ProejctItemDescriptionContainer>
          </Styled.ProjectItem>
        </Slide>
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
                    <SiYoutube color="#ff0000" />
                  </Styled.Link>
                  <Styled.Link
                    target="_blank"
                    href="https://github.com/LuizFernando991/Projeto_Instagram"
                  >
                    <SiGithub color="#000" />
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
                    target="_blank"
                    href="https://musing-villani-8634c6.netlify.app/"
                  >
                    <BiLink color="#07c7e0" />
                  </Styled.Link>
                  <Styled.Link
                    onClick={() =>
                      setSelectedLink(
                        'https://www.youtube.com/embed/pJkql6tAQug'
                      )
                    }
                  >
                    <SiYoutube color="#ff0000" />
                  </Styled.Link>
                  <Styled.Link
                    target="_blank"
                    href="https://github.com/LuizFernando991/Project-React-Netflix"
                  >
                    <SiGithub color="#000" />
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
