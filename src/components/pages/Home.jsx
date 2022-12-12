import AppLayout from '@/components/layouts/AppLayout'
import CategorySlider from '@/components/commons/CategorySlider'
import FeaturedProduct from '@/components/commons/FeaturedProduct';
import Banner from '@/components/commons/Banner';
import ProductRanking from '@/components/commons/ProductRanking';
import BlogSection from '@/components/commons/BlogSection';

const Home = () => {
    return (
        <AppLayout>
            <CategorySlider/>   
            <FeaturedProduct />
            <Banner />
            <ProductRanking />
            <BlogSection />
        </AppLayout>
        
    );
};

export default Home;