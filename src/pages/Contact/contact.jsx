import ContactHero from '../../pages/Contact/contacthero';
import ContactText from '../../pages/Contact/contacttext';
import ContactInfoCards from '../../pages/Contact/contactinfo';
import ContactForm from '../../pages/Contact/contactform';

const Contact = () => {
    return (
        <div className="min-h-screen">
            <ContactHero />

            <section className="py-24 bg-gradient-to-b from-white to-stone-50">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <ContactText />
                            <ContactInfoCards />
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;