import React from 'react'
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

type Project = {
  title: string
  description: string
  src?: string // رابط الصورة إن وجدت
  // ممكن تضيف حقول أخرى حسب الحاجة
}

interface IProjectDetailsModalProps {
  isOpen: boolean
  onClose(): void
  project: Project | null
}

const ProjectDetailsModal: React.FC<IProjectDetailsModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  if (!project) return null // لو ما في مشروع مختار لا تعرض المودال

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered motionPreset="slideInBottom" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent border={`1px solid ${borderColor}`}>
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            {project.src && (
              <Image
                src={project.src}
                alt={project.title}
                borderRadius="md"
                maxH="300px"
                objectFit="contain"
                mx="auto"
              />
            )}
            <Text whiteSpace="pre-wrap" fontSize="md">
              {project.description}
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} colorScheme="teal">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProjectDetailsModal
