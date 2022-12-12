import AppLayout from '@/components/layouts/AppLayout'
import BlogSidebar from '@/components/commons/BlogSidebar'
import BlogDetailSection from '@/components/commons/BlogDetailSection'
import BlogDetailHero from '@/components/commons/BlogDetailHero'

const BlogDetail = () => {
    return (
        <AppLayout>
            <BlogDetailHero />

            <>
                {/* Blog Details Section */}
                <section className="blog-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 order-md-1 order-2">
                                <BlogSidebar />
                            </div>
                            <div className="col-lg-8 col-md-7 order-md-1 order-1">
                                <BlogDetailSection />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog Details Section END */}
            </>

        </AppLayout>

    );
};

export default BlogDetail;