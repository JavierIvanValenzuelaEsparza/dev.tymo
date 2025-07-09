import { Skill, Experience, SocialLink } from '../types'
import { Linkedin, Mail, Phone } from 'lucide-react'
import {
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiNextdotjs,
  SiLaravel,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiGitlab,
} from "react-icons/si"
import GGlobalLogo from "@/img/G-Global.webp"
import JLConcretosLogo from "@/img/JL.png"
import CaretSWIndLogo from "@/img/Caret.png"

export const skillsWithIcons: Skill[] = [
  { name: "React Js", percentage: 85, icon: SiReact },
  { name: "Node Js", percentage: 70, icon: SiNodedotjs },
  { name: "Angular Js", percentage: 40, icon: SiAngular },
  { name: "Next Js", percentage: 85, icon: SiNextdotjs },
  { name: "Laravel", percentage: 60, icon: SiLaravel },
  { name: "Django", percentage: 40, icon: SiDjango },
  { name: "GitHub", percentage: 75, icon: SiGithub },
  { name: "MongoDB", percentage: 65, icon: SiMongodb },
  { name: "SQL", percentage: 70, icon: SiMysql },
]


export const experiences: Experience[] = [
  {
    company: "G-GLOBAL LOGISTICS INC.",
    position: "Desarrollador de Software",
    period: "AGO 2024 - Actual",
    description:
      "Actualmente trabajo en G Global, donde implementé nuevas funcionalidades y corregí errores en el sistema WMS. Desarrollé múltiples mejoras y optimizaciones utilizando React y Moleculer.js en una arquitectura de microservicios con MongoDB, siguiendo metodologías ágiles basadas en historias de usuario por sprint.",
    tags: ["React", "Moleculer.js", "MongoDB", "Microservicios", "Agile"],
    current: true,
    logo: GGlobalLogo,
  },
  {
    company: "JL CONCRETOS",
    position: "Desarrollador Jr",
    period: "ABR 2024 – AGO 2024",
    description:
      "Lideré el desarrollo de sistemas para Villa Simul y JL Concretos, optimizando la gestión de clientes, autenticación segura y generación de documentos. Utilicé PHP, MySQL y AJAX para garantizar eficiencia y seguridad.",
    tags: ["PHP", "MySQL", "AJAX", "Autenticación", "Documentos"],
    current: false,
    logo: JLConcretosLogo,
  },
  {
    company: "CARET SOFTWARE INDUSTRIAL",
    position: "Practicante de Software",
    period: "AGO 2023 – DIC 2023",
    description:
      "Lideré la creación e integración de módulos clave, incluyendo Reportes, Productos y Pedidos de ropa. Realicé pruebas exhaustivas con ASP.NET y Angular, resolviendo errores y optimizando la gestión de más de 400 productos para garantizar la calidad y coherencia de CARET ERP.",
    tags: ["ASP.NET", "Angular", "Pruebas", "Optimización", "ERP"],
    current: false,
    logo: CaretSWIndLogo,
  },
]

export const gitPlatforms = [
  { icon: SiGithub, href: "https://github.com/JavierIvanValenzuelaEsparza", label: "GitHub" },
  { icon: SiGitlab, href: "https://gitlab.com/JavierValenzuelaEsparza", label: "GitLab" },
]

export const socialLinks: SocialLink[] = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/javier-esparza-a66a78281/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:javiervalenzuela041219@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:6646141705", label: "Teléfono" },
]
