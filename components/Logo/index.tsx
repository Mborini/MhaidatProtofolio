import { memo } from 'react'
import { useColorMode, useBreakpointValue, Box, Button } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'

const Logo = () => {
  const { colorMode } = useColorMode()
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const menuButtonSize = useBreakpointValue({ base: 'xl', md: 'sm' })
  const isDark = colorMode === ThemeMode.Dark
  const btnClassName = `${styles.blogBtn} ${!isDark ? styles.dark : ''}`

  return (
    <AnimatePresence>
      <Box

      >
        <Button
          as="a"
          href={"/"}
          rel="noreferrer"
          variant="ghost"
          fontWeight="light"
          fontSize={menuButtonSize}
          letterSpacing={2}
          padding={2}
          marginX={8}
          
          className={btnClassName}
          _hover={{ bg: isDark ? 'gray.700' : 'gray.200' }} // تحسين الhover
        >
          My Portfolio
        </Button>
      </Box>
    </AnimatePresence>
  )
}

export default memo(Logo)
