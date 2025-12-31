const ContactHero = () => (
    <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-sage-600 text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container-custom text-center relative z-10">
            <div className="inline-block mb-4">
                <span className="text-teal-100 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-teal-50 max-w-3xl mx-auto leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
            </p>
        </div>
    </section>
);

export default ContactHero;