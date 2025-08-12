/* eslint-disable react/no-multi-comp */
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
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Text,
} from '@chakra-ui/react'
import { TbRouteSquare } from "react-icons/tb";

// استيراد أيقونات من react-icons/md (يمكن تغيير الأيقونات حسب رغبتك)
import {
  MdComputer,
  MdGroup,
  MdBuild,
  
  MdSettings,
  MdSchool,
} from 'react-icons/md'

import styles from './styles.module.css'
import { SiAutocad } from 'react-icons/si';
import { MdEngineering } from "react-icons/md";
import { TbPlaystationSquare } from "react-icons/tb";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdReportProblem } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { LuBrain } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";
import { MdAutorenew } from "react-icons/md";
import { BsBusFront } from "react-icons/bs";

type Skill = {
  name: string
  icon: any
}

const Skills: Record<string, Skill[]> = {
  technical: [
    { name: 'Microsoft Office', icon: MdComputer },
    { name: 'AutoCAD', icon: SiAutocad },
    { name: 'Pro Engineering Software', icon: MdEngineering },
    { name: 'Total Station', icon: TbPlaystationSquare  },
    { name: 'Technical Reporting', icon: TbReportAnalytics  },
    { name: 'Data Collection & Analysis', icon: TbBrandGoogleAnalytics },
  ],
  environmental: [
    { name: 'Solid Waste Management', icon: IoTrashOutline  },
    { name: 'MSW Collection Routes & Bin Placement', icon: TbRouteSquare },
    { name: 'Gap Analysis for MSWM', icon: MdBuild },
    { name: 'Operation of MSW Facilities', icon: MdSettings },
    { name: 'Renewable Energy Systems (Basic)', icon: MdAutorenew  },
    { name: 'Heavy Vehicle Maintenance (Minor)', icon: BsBusFront  },
  ],
  softSkills: [
    { name: 'Team-working', icon: MdGroup },
    { name: 'Critical Thinking', icon: LuBrain  },
    { name: 'Creative Problem Solving', icon: MdReportProblem  },
    { name: 'Multi-tasking', icon: GrTask  },
    { name: 'Communication Skills', icon: MdGroup },
    { name: 'Capacity Building & Training', icon: MdSchool },
    { name: 'Safety Regulations', icon: FaHelmetSafety },
  ],
}

// دالة لتقسيم مصفوفة المهارات إلى عمودين
const splitSkills = (skills: Skill[]): Skill[][] => {
  const half = Math.ceil(skills.length / 2)
  return [skills.slice(0, half), skills.slice(half)]
}

type ISkillSetModal = {
  isOpen: boolean
  onClose(): void
}

const SkillList = ({
  title,
  columns,
}: {
  title: string
  columns: Skill[][]
}) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const [colOne, colTwo = []] = columns
  return (
    <>
      <Heading as="div" size="sm" paddingBottom={1} variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  )
}

const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const technicalCols = splitSkills(Skills.technical)
  const environmentalCols = splitSkills(Skills.environmental)
  const softCols = splitSkills(Skills.softSkills)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Skills of Ahmad Mhaidat</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          <SkillList title="Technical Skills" columns={technicalCols} />
          <SkillList title="Environmental & Engineering Skills" columns={environmentalCols} />
          <SkillList title="Soft Skills" columns={softCols} />
        </ModalBody>
        
      </ModalContent>
    </Modal>
  )
}

export default SkillSetModal
