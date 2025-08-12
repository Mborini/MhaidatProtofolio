import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  GiRecycle,
  GiRecycleBin,
  GiFactory,
  GiRoad,
  GiTeamUpgrade,
} from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2020 // يبدأ 2020 حسب سيرته

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What I do.
      </Heading>
      <Text variant="description">
        With 5+ years in environmental consultancy, I design sustainable waste
        management plans integrating technical methods and community needs.{' '}
        <Tooltip
          label="Designing efficient and sustainable waste collection systems"
          aria-label="Route Optimization"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b>sustainable waste solutions</b>
          </Text>
        </Tooltip>{' '}
        I lead projects on route optimization and recycling, ensuring efficient
        and lasting results.
        <br /> <br />
        Here are a few areas I’m passionate about and work with daily:
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={GiRecycle} color={emphasis} fontSize="2em" />
            Municipal Solid Waste Management
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={GiRecycleBin} color={emphasis} fontSize="2em" />
            Recycling Systems Design
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={GiFactory} color={emphasis} fontSize="2em" />
            Waste Facility Operations
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={GiRoad} color={emphasis} fontSize="2em" />
            Collection Route Optimization
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={GiTeamUpgrade} color={emphasis} fontSize="2em" />
            Stakeholder & Community Engagement
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={GiRecycle} color={emphasis} fontSize="2em" />
            Waste Sorting & Material Recovery
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={GiFactory} color={emphasis} fontSize="2em" />
            Institutional Capacity Building
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={GiRoad} color={emphasis} fontSize="2em" />
            Environmental Impact Assessment
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See full expertise <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
