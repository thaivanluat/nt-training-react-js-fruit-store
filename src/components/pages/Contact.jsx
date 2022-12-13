import AppLayout from '@/components/layouts/AppLayout'
import Breadcrumb from '@/components/commons/Breadcrumb'
import ContactSection from '@/components/commons/ContactSection'
import Map from '@/components/commons/Map'
import ContactForm from '@/components/commons/ContactForm'

const Contact = () => {
    return (
        <AppLayout>
            <Breadcrumb heading="Contact us" name="Contact us" />
            <ContactSection />
            <Map />
            <ContactForm />
        </AppLayout>
        
    );
};

export default Contact;