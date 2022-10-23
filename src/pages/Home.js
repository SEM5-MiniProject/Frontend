import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Appbar from '../components/appbar'
import Banner from '../components/banner'
import AppDrawer from '../components/drawer'
import Exploree from '../components/Explore'
import Footer from '../components/footer'
import LoginForm from '../components/login'
import Products from '../components/products'
import Promotions from '../components/promotions'
import SearchBox from '../components/search'
import SignForm from '../components/signform'
import { UIProvider } from '../context/ui'
import { PromotionsContainer } from '../styles/promotions'

const Home = () => {
  return (

    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        background: "#fff",
      }}
    >
      <Stack>
        <UIProvider>

          <Appbar />
          {/* <AddProFirst/> */}
          {/*  */}
          <Banner />
          <Promotions />
          <SearchBox />
          <SignForm />
          <LoginForm />
          <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            <Typography variant="h4">Trending Food Items</Typography>
          </Box>
          <Products />
          {/* <PromotionsContainer /> */}

          {/* <br /> */}
          {/* <Exploree /> */}
          {/* <Form/> */}
          <Footer />
          <AppDrawer />
        </UIProvider>
      </Stack>
    </Container>
  )
}

export default Home