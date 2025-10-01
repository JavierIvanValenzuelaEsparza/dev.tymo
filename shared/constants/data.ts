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
import Login from "@/img/Projects/LiveChat/login.png"
import Sale from "@/img/Projects/LiveChat/sale.png"
import ChatIsrael from "@/img/Projects/LiveChat/chatIsrael.png"
import ChatHumberto from "@/img/Projects/LiveChat/chatHumberto.png"

import IncidentsLogin from "@/img/Projects/Incidents/login.png"
import IncidentsMain from "@/img/Projects/Incidents/incidents.png"
import IncidentsComments from "@/img/Projects/Incidents/comments.png"
import IncidentsCancel from "@/img/Projects/Incidents/cancel.png"
import IncidentsHistory from "@/img/Projects/Incidents/history.png"
import IncidentsUsers from "@/img/Projects/Incidents/users.png"
import IncidentsMachines from "@/img/Projects/Incidents/machines.png"
import IncidentsPhases from "@/img/Projects/Incidents/phases.png"
import IncidentsQR from "@/img/Projects/Incidents/qr.png"

import IncidentsDashboardActive from "@/img/Projects/Incidents/Dashboard/activeIncidents.png"
import IncidentsDashboardCommon from "@/img/Projects/Incidents/Dashboard/commonProblems.png"
import IncidentsDashboardByYear from "@/img/Projects/Incidents/Dashboard/byYear.png"
import IncidentsDashboardByState from "@/img/Projects/Incidents/Dashboard/byState.png"
import IncidentsDashboardTrend from "@/img/Projects/Incidents/Dashboard/trendEvolution.png"

import IncidentsMovilLogin from "@/img/Projects/Incidents/Movil/login.png"
import IncidentsMovilList from "@/img/Projects/Incidents/Movil/incidentList.png"
import IncidentsMovilDetail from "@/img/Projects/Incidents/Movil/incident.png"
import IncidentsMovilScan from "@/img/Projects/Incidents/Movil/scan.png"

import PersonalPortfolio from "@/img/Projects/Portfolio/PersonalPortfolio.png"

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
    image: ["https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop"],
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
    image: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"],
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
    image: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"],
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
    image: [PersonalPortfolio],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/JavierIvanValenzuelaEsparza",
    category: "web",
    status: "completed",
    featured: false
  },
  {
    id: 5,
    title: "Live-Chat App",
    description: "Aplicación de mensajería instantánea con salas, historial y edición de mensajes",
    longDescription: "Desarrollo de API REST escalable con autenticación JWT, validación de datos, manejo de errores robusto.",
    image: [Login, Sale, ChatIsrael, ChatHumberto],
    technologies: ["NestJs", "MongoDB", "JWT", "ReactJs", "TypeScript", "Tailwind CSS", "Socket.io", "Tanstack Query"],
    githubUrl: "https://github.com/JavierIvanValenzuelaEsparza",
    category: "web",
    status: "completed",
    featured: false
  },
  {
    id: 6,
    title: "Incident Management System",
    description: "Plataforma para reportar para gestión de incidentes dentro de empresas",
    longDescription: "Plataforma para permitir a los empleados de cada empresa reportar problemas de mantenimiento, como fallos en equipos o instalaciones, y asignar tareas a los responsables para su resolución.",
    image: [
      IncidentsLogin,
      IncidentsMain,
      IncidentsComments,
      IncidentsHistory,
      IncidentsCancel,
      IncidentsUsers,
      IncidentsMachines,
      IncidentsPhases,
      IncidentsQR,
      IncidentsDashboardActive,
      IncidentsDashboardCommon,
      IncidentsDashboardByYear,
      IncidentsDashboardByState,
      IncidentsDashboardTrend,
      IncidentsMovilLogin,
      IncidentsMovilList,
      IncidentsMovilDetail,
      IncidentsMovilScan
    ],
    technologies: ["ReactJs", "Moleculer.js", "PostgreSQL", "Node.js", "Tanstack Query"],
    githubUrl: "https://github.com/JavierIvanValenzuelaEsparza",
    category: "web",
    status: "completed",
    featured: false
  }
]
