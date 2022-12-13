import AppLayout from '@/components/layouts/AppLayout'
import Breadcrumb from '@/components/commons/Breadcrumb'
import ShoppingCartSection from '@/components/commons/ShoppingCartSection'

const ShoppingCart = () => {
    return (
        <AppLayout>
            <Breadcrumb heading="Shopping Cart" name="Shopping Cart" />
            <ShoppingCartSection />
        </AppLayout>
        
    );
};

export default ShoppingCart;