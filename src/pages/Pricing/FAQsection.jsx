import FAQItem from '../Pricing/FAQ';

const FAQSection = () => {
    const faqs = [
        { q: 'Can I try a class before committing?', a: 'Absolutely! We offer a free first class for all new students.' },
        { q: 'Do you offer online classes?', a: 'Yes! All monthly and annual memberships include app access.' },
        { q: 'What if I need to cancel?', a: 'You can cancel with 30 days notice. Annuals can be paused.' },
        { q: 'Student or senior discounts?', a: 'Yes, we offer 15% off for students and seniors with valid ID.' },
        { q: 'Can I share my class pack?', a: 'Yes! 10-class packs can be shared with family or friends.' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-4 mb-6">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <FAQItem key={idx} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;