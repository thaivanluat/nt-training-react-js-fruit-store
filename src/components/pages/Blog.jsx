import AppLayout from '@/components/layouts/AppLayout'
import Breadcrumb from '@/components/commons/Breadcrumb'
import BlogSidebar from '@/components/commons/BlogSidebar'
import BlogList from '@/components/commons/BlogList'

const Blog = () => {
    return (
        <AppLayout>
            <Breadcrumb name="Blog" />
            <>
                {/* Blog Section */}
                <section className="blog spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <BlogSidebar />
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <BlogList />
                            </div>

                        </div>
                    </div>
                </section>
                {/* Blog Section END */}
            </>
        </AppLayout>

    );
};

export default Blog;