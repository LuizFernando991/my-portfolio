import i18next from 'i18next'
import ENUS from './locales/en/en-us.json'
import PTBR from './locales/pt/pt-br.json'

i18next.init({
  lng: navigator.language,
  resources: {
    'pt-BR': PTBR,
    'en-US': ENUS
  }
})

export default i18next
