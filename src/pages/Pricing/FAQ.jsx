const FAQItem = ({ question, answer }) => (
    <div className="bg-white border-2 border-stone-200 rounded-xl p-6 hover:border-teal-300 transition-colors shadow-sm">
        <h3 className="font-bold text-stone-900 text-lg mb-2">{question}</h3>
        <p className="text-stone-600">{answer}</p>
    </div>
);

export default FAQItem;