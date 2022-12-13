import AppLayout from '@/components/layouts/AppLayout'
import Breadcrumb from '@/components/commons/Breadcrumb'
import CheckoutSection from '@/components/commons/CheckoutSection'

const Checkout = () => {
    return (
        <AppLayout>
            <Breadcrumb heading="Checkout" name="Checkout" />
            <CheckoutSection />
        </AppLayout>
        
    );
};

export default Checkout;