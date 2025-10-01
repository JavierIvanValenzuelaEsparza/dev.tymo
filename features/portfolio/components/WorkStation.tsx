import { Briefcase, ExternalLink, Github, Calendar, Tag, ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useContext, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ThemeContext } from "@/shared/context"
import { projects } from "@/shared/constants/data"
import { Project } from "@/shared/types"
import Image, { StaticImageData } from "next/image"

const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }: {
    images: (string | StaticImageData)[]
    currentIndex: number
    onClose: () => void
    onNext: () => void
    onPrev: () => void
}) => {
    const currentImage = images[currentIndex]

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                >
                    <X className="w-8 h-8" />
                </button>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                onPrev()
                            }}
                            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                onNext()
                            }}
                            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>
                    </>
                )}

                <motion.div
                    key={currentIndex}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative max-w-6xl max-h-[90vh] w-full h-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        src={currentImage}
                        alt={`Imagen ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                    />
                </motion.div>

                {images.length > 1 && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    )
}

const ProjectCard = ({ project, index, onImageClick }: {
    project: Project;
    index: number;
    onImageClick: (images: (string | StaticImageData)[], currentIndex: number) => void
}) => {
    const { currentTheme } = useContext(ThemeContext)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = Array.isArray(project.image) ? project.image : [project.image]
    const currentImage = images[currentImageIndex]

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const handleImageClick = () => {
        onImageClick(images, currentImageIndex)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-500/20 text-green-400 border-green-500/30'
            case 'in-progress':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
            case 'planning':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
        }
    }

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed':
                return 'Completado'
            case 'in-progress':
                return 'En Desarrollo'
            case 'planning':
                return 'Planeando'
            default:
                return status
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
        >
            <div
                className={`relative overflow-hidden rounded-2xl border ${currentTheme.border} bg-black/40 backdrop-blur-sm hover:border-${currentTheme.primary}/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${currentTheme.primary}/10`}
            >
                {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                        <Badge className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} border-none text-white font-medium`}>
                            Destacado ⭐
                        </Badge>
                    </div>
                )}

                <div className="relative h-64 overflow-hidden group/image cursor-pointer" onClick={handleImageClick}>
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10`} />
                    <Image
                        src={currentImage}
                        alt={project.title}
                        fill
                        className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => setImageLoaded(true)}
                    />
                    {!imageLoaded && (
                        <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} opacity-20`} />
                    )}

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handlePrevImage()
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover/image:opacity-100 transition-opacity"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleNextImage()
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover/image:opacity-100 transition-opacity"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setCurrentImageIndex(idx)
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className={`text-xl font-bold ${currentTheme.text} group-hover:text-${currentTheme.primary} transition-colors`}>
                            {project.title}
                        </h3>
                        <Badge className={`${getStatusColor(project.status)} text-xs font-medium shrink-0`}>
                            {getStatusText(project.status)}
                        </Badge>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-${currentTheme.primary}/10 text-${currentTheme.primary} border border-${currentTheme.primary}/20`}
                            >
                                <Tag className="w-3 h-3 mr-1" />
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20">
                                +{project.technologies.length - 4} más
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 text-sm ${currentTheme.text} hover:text-${currentTheme.primary} transition-colors group/link`}
                            >
                                <Github className="w-4 h-4" />
                                <span>Código</span>
                                <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 text-sm ${currentTheme.text} hover:text-${currentTheme.primary} transition-colors group/link`}
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Ver Demo</span>
                                <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </a>
                        )}
                    </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </div>
        </motion.div>
    )
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, currentTheme }: {
    categories: string[]
    activeCategory: string
    onCategoryChange: (category: string) => void
    currentTheme: any
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
        >
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        activeCategory === category
                            ? `bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} border-transparent text-white shadow-lg shadow-${currentTheme.primary}/25`
                            : `border-${currentTheme.border} ${currentTheme.text} hover:border-${currentTheme.primary}/40 hover:bg-${currentTheme.primary}/5`
                    }`}
                >
                    {category === 'all' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </motion.div>
    )
}

export const WorkStation = () => {
    const { currentTheme } = useContext(ThemeContext)
    const [activeCategory, setActiveCategory] = useState<string>('all')
    const [modalState, setModalState] = useState<{
        show: boolean
        images: (string | StaticImageData)[]
        currentIndex: number
    }>({
        show: false,
        images: [],
        currentIndex: 0
    })

    const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))]
    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory)

    const featuredProjects = filteredProjects.filter(p => p.featured)
    const regularProjects = filteredProjects.filter(p => !p.featured)

    const openModal = (images: (string | StaticImageData)[], index: number) => {
        setModalState({ show: true, images, currentIndex: index })
    }

    const closeModal = () => {
        setModalState({ show: false, images: [], currentIndex: 0 })
    }

    const handleNextImage = () => {
        setModalState(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length
        }))
    }

    const handlePrevImage = () => {
        setModalState(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
        }))
    }

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <Badge
                        className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} border ${currentTheme.border} ${currentTheme.text} mb-6 shadow-lg shadow-${currentTheme.primary}/20`}
                    >
                        <Briefcase className="w-4 h-4 mr-2" />
                        Proyectos
                    </Badge>
                    <h2
                        className={`text-5xl md:text-7xl font-bold pb-1 mb-6 bg-gradient-to-r ${currentTheme.text.replace(
                            "text-",
                            "from-",
                        )} to-${currentTheme.secondary}-400 bg-clip-text text-transparent`}
                    >
                        Proyectos Personales
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Una colección de proyectos que reflejan mi pasión por el Desarrollo de Software, 
                        desde sistemas empresariales hasta aplicaciones innovadoras.
                    </motion.p>
                </motion.div>

                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    currentTheme={currentTheme}
                />

                {featuredProjects.length > 0 && (
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {featuredProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                    onImageClick={openModal}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {regularProjects.length > 0 && (
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`text-2xl font-bold ${currentTheme.text} mb-8 flex items-center gap-2`}
                        >
                            <Calendar className="w-6 h-6" />
                            Otros Proyectos
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {regularProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={index + featuredProjects.length}
                                    onImageClick={openModal}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-16"
                    >
                        <p className="text-gray-400 text-lg">
                            No hay proyectos en esta categoría por el momento.
                        </p>
                    </motion.div>
                )}
            </div>

            {modalState.show && (
                <ImageModal
                    images={modalState.images}
                    currentIndex={modalState.currentIndex}
                    onClose={closeModal}
                    onNext={handleNextImage}
                    onPrev={handlePrevImage}
                />
            )}
        </section>
    )
}
