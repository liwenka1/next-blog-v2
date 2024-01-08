import Footer from './footer'
import Header from './header'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex h-full w-full max-w-3xl flex-col justify-between">
      <Header />
      <main className="my-8 flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
