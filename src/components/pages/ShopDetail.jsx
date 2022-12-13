import AppLayout from '@/components/layouts/AppLayout'
import Breadcrumb from '@/components/commons/Breadcrumb'
import ProductDetail from '@/components/commons/ProductDetail'
import RelatedProduct from '@/components/commons/RelatedProduct'

const ShopDetail = () => {
    return (
        <AppLayout>
            <Breadcrumb heading="Ogani Shop" name="Shop Detail" />
            <ProductDetail />
            <RelatedProduct />
        </AppLayout>
        
    );
};

export default ShopDetail;