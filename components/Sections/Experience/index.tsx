import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'

const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places I’ve worked.
    </Heading>
    <Text variant="description">
      Since 2020, I have had the privilege to work with several reputable organizations,
      which allowed me to develop and refine my expertise in environmental consultancy and waste management.
      These experiences have enriched my skills and broadened my professional horizon.
      Currently, I am working with{' '}
      <Link href="https://greenplans.com" target="_blank" rel="noreferrer" color="teal.500" fontWeight="bold">
        GREENPLANS Environmental Consultations Co. Ltd.
      </Link>
      , and have collaborated on projects with international partners such as{' '}
      <Link href="https://www.undp.org" target="_blank" rel="noreferrer" color="teal.500" fontWeight="bold">
        UNDP
      </Link>
      ,{' '}
      <Link href="https://www.oxfam.org" target="_blank" rel="noreferrer" color="teal.500" fontWeight="bold">
        Oxfam
      </Link>
      , the{' '}
      <Link href="https://fcm.ca" target="_blank" rel="noreferrer" color="teal.500" fontWeight="bold">
        Federation of Canadian Municipalities (FCM)
      </Link>
      , and{' '}
      <Link href="https://dimetric.com" target="_blank" rel="noreferrer" color="teal.500" fontWeight="bold">
        DIMETRIC
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
