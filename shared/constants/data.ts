import { Skill, Experience, SocialLink, Project } from '../types'
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
      "Lideré el desarrollo de sistemas para JL Concretos y Urbanizadora Roma, optimizando la gestión de clientes, con autenticación segura con Outlook y generación de documentos. Utilicé PHP, MySQL y AJAX para garantizar eficiencia y seguridad.",
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

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema WMS - G Global Logistics",
    description: "Sistema de gestión de almacenes con arquitectura de microservicios y interfaz moderna",
    longDescription: "Desarrollo completo de un sistema WMS utilizando React, Moleculer.js y MongoDB. Implementé nuevas funcionalidades, corregí errores críticos y optimicé el rendimiento del sistema siguiendo metodologías ágiles.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
    technologies: ["React", "Moleculer.js", "MongoDB", "Node.js", "Microservicios"],
    githubUrl: "https://github.com/JavierIvanValenzuelaEsparza",
    category: "web",
    status: "completed",
    featured: true
  },
  {
    id: 2,
    title: "Portal Empresarial - JL Concretos",
    description: "Sistema de gestión empresarial con autenticación Outlook y generación de documentos",
    longDescription: "Lideré el desarrollo de sistemas para JL Concretos y Urbanizadora Roma, implementando gestión de clientes, autenticación segura con Outlook y sistema automatizado de generación de documentos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["PHP", "MySQL", "AJAX", "JavaScript", "HTML5"],
    githubUrl: "https://github.com/JavierIvanValenzuelaEsparza/JLUsers-Admin",
    category: "web",
    status: "completed",
    featured: true
  },
  {
    id: 3,
    title: "CARET ERP - Módulos Integrados",
    description: "Sistema ERP para gestión de inventario y pedidos de ropa industrial",
    longDescription: "Desarrollo e integración de módulos clave incluyendo Reportes, Productos y Pedidos. Realicé pruebas exhaustivas y optimización para gestionar más de 400 productos garantizando calidad y coherencia del sistema.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["ASP.NET", "Angular", "C#", "SQL Server", "TypeScript"],
    githubUrl: "https://github.com/JavierIvanValenzuelaEsparza",
    category: "web",
    status: "completed",
    featured: true
  },
  {
    id: 4,
    title: "Portfolio Personal",
    description: "Portafolio personal desarrollado con Next.js y animaciones fluidas",
    longDescription: "Sitio web personal construido con las últimas tecnologías web, featuring sistema de temas dinámico, animaciones suaves con Framer Motion y diseño responsive completamente optimizado.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/JavierIvanValenzuelaEsparza",
    liveUrl: "https://javiervalenzuela.dev",
    category: "web",
    status: "completed",
    featured: false
  },
  {
    id: 5,
    title: "API REST Empresarial",
    description: "API robusta para gestión de recursos empresariales con documentación completa",
    longDescription: "Desarrollo de API REST escalable con autenticación JWT, validación de datos, manejo de errores robusto y documentación automatizada. Incluye testing completo y deploy automatizado.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    githubUrl: "https://github.com/JavierIvanValenzuelaEsparza",
    category: "api",
    status: "completed",
    featured: false
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    description: "Dashboard interactivo para análisis de datos empresariales en tiempo real",
    longDescription: "Plataforma de análisis con visualizaciones interactivas, reportes personalizados y actualización en tiempo real. Incluye integración con múltiples fuentes de datos y exportación de reportes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "D3.js", "Chart.js", "Firebase", "Material-UI"],
    githubUrl: "https://github.com/JavierIvanValenzuelaEsparza",
    liveUrl: "https://dashboard-demo.com",
    category: "web",
    status: "in-progress",
    featured: false
  }
]
