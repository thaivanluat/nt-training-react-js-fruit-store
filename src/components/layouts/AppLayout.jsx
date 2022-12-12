import Header from '@/components/commons/Header'
import Footer from '@/components/commons/Footer'


const AppLayout = ({children}) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default AppLayout;