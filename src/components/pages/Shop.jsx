import AppLayout from '@/components/layouts/AppLayout'
import Breadcrumb from '@/components/commons/Breadcrumb'
import ProductSidebar from '@/components/commons/ProductSidebar'
import ProductList from '@/components/commons/ProductList'
import ProductDiscount from '@/components/commons/ProductDiscount'

const Shop = () => {
    return (
        <AppLayout>
            <Breadcrumb heading="Ogani Shop" name="Shop" />
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <ProductSidebar />
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <ProductDiscount />
                            <ProductList />
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>

    );
};

export default Shop;