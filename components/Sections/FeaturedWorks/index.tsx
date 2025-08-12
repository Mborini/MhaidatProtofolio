import { memo, useState } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import SkillSetModal from './SkillSetModal' // تأكد من مسار الاستيراد الصحيح
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'

const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const projects = [
  {
    idx: 1,
    title: 'Site Assessments and Project Monitoring',
    src: '/projects/Analysis-pana.svg',
    description:
      'Managed project progress and deliverables, developed budgets, conducted site assessments for waste management facilities, and ensured high-quality outcomes across multiple environmental projects.',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    objectPosition: 'right 20%',
  },
  {
    idx: 2,
    title: 'Pilot Waste Collection Optimization',
    src: '/projects/Waste management-rafiki (1).svg',
    description:
      'Enhanced waste collection efficiency by optimizing routes and bin placements. Verified route optimization and developed emergency contingency plans.',
    height: { base: '130px', md: '225px', '2xl': '300px' },
  },
  {
    idx: 3,
    title: 'Developing Local Solid Waste Management Plans',
    src: '/projects/Garbage management-rafiki.svg',
    description:
      'Supported municipalities in designing and developing integrated and sustainable solid waste management plans. Conducted gap analysis on administrative, technical, financial, and social aspects. Proposed sorting and recycling measures and advised on institutional frameworks for efficient service delivery.',
    height: { base: '130px', md: '225px', '2xl': '300px' },
    objectPosition: 'right 20%',
  },
  {
    idx: 4,
    title: 'Route Optimization and Assessment of Solid Waste Management Machineries',
    src: '/projects/Location search-amico.svg',
    description:
      'Optimized waste collection system by improving collection routes and bin distribution within municipalities. Verified optimized routes and developed contingency plans for emergencies.',
    height: { base: '130px', md: '225px', '2xl': '300px' },
  },
]

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const handleOpenModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    onOpen()
  }

  return (
    <>
      <Stack width={{ base: '99%', lg: '60%', xl: '75%' }} height="100%" spacing={{ base: 6, xl: 8 }}>
        <Heading size="2xl" style={{ fontVariantCaps: 'small-caps' }}>
          Some of my works.
        </Heading>
        <Text variant="description">
          Check out some of the works I made at freelancing, company projects and even case studies.
        </Text>

        <MotionGrid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={{ base: 5, md: 6 }}
          variants={galleryStagger}
        >
          {projects.map((project) => (
            <MotionGridItem key={project.idx} colSpan={6} variants={fadeInUpSlower}>
              <FeaturedCard
                idx={project.idx}
                title={project.title}
                src={project.src}
                height={project.height}
                objectPosition={project.objectPosition}
                isMobile={isMobile}
                onClick={() => handleOpenModal(project)}
              />
            </MotionGridItem>
          ))}
        </MotionGrid>
      </Stack>

      {/* مودال المهارات مع تفاصيل المشروع المحدد */}
      {selectedProject && (
        <SkillSetModal
          isOpen={isOpen}
          onClose={() => {
            onClose()
            setSelectedProject(null) // تنظيف الحالة عند إغلاق المودال
          }}
          project={selectedProject} // تمرير المشروع للمودال لعرض التفاصيل
        />
      )}
    </>
  )
}

export default memo(FeaturedWorksSection)
