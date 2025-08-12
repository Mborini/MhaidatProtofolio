import { memo } from 'react'
import {
  Heading,
  Text,
  Link,
  Stack,
  SimpleGrid,
  Divider,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import { Article } from 'types/article'

const DevToArticles = ({ articles }: { articles: Article[] }) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.100')
  const alphaHover = useColorModeValue(
    'rgba(49, 151, 149, 0.06)',
    'rgba(157, 236, 249, 0.06)'
  )
  return (
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
        Memberships & Affiliations
      </Heading>
      <Text variant="description">
        Here are some of the memberships and affiliations I hold:
      </Text>
     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
  {articles.map((item, index) => (
    <Box
      key={index}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="1em"
      padding={{ base: '1em', '2xl': '1.5em' }}
      height="100%"
      backgroundColor={bg}
      _hover={{ background: alphaHover }}
      transition="all 0.2s ease-in-out"
      as="article"
    >
      <Heading fontSize="larger" paddingX={2}>
        {item.title}
      </Heading>
      <Heading
        fontSize="medium"
        paddingX={2}
        color="gray.500"
        mb={3}
      >
        {item.organization}
      </Heading>
      <Divider borderColor="#A6A6A6" width="95%" mb={3} />
      <Text fontSize="smaller" variant="description" paddingX={2}>
        {item.description}
      </Text>
    </Box>
  ))}
</SimpleGrid>

    </Stack>
  )
}

export default memo(DevToArticles)
