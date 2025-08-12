import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
  FaWhatsapp,
  FaFileAlt,
  FaFilePdf,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+962797002857',
    icon: FaWhatsapp,
  },
  {
    label: 'CV',
    href: '/C.v Ahmad mhaidat.pdf',
    icon: FaFilePdf,
  },
]
