import * as React from 'react'
import { Box, Heading, theme } from '@chakra-ui/core'

interface PageHeaderProps {
  title: string
  isHomePage?: boolean
  welcomeMessage?: string
  desc?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <Box
      position="relative"
      backgroundColor="gray.900"
      backgroundImage={`linear-gradient(${theme.colors.gray[900]}, ${theme.colors.gray[800]})`}
      as="header"
      pt={100}
      pb={[3, null, null, 6]}
      px={[4, null, null, 8]}
    >
      <Box position="relative" zIndex={2} mx="auto" maxWidth="3xl">
        <Heading as="h1" size="2xl" color="white">
          {title}
        </Heading>
      </Box>
    </Box>
  )
}

export default PageHeader
