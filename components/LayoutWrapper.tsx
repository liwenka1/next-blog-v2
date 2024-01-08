import Footer from './Footer'
import Header from './Header'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col justify-between">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
