import { ReactChild } from 'react'
import { Header } from '.'

const Layout = ({ children }: { children: ReactChild }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout
