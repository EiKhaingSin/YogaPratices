const ValueCards = () => {
    const values = ["Inclusivity and accessibility", "Mindful practices", "Community connection", "Continuous growth"];
    const offers = ["Diverse yoga styles", "Certified instructors", "Flexible schedules", "Supportive environment"];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Our Values</h3>
                <ul className="space-y-4 text-stone-700">
                    {values.map((v, i) => (
                        <li key={i} className="flex items-start"><span className="text-teal-600 mr-3 text-xl font-bold">✓</span><span className="text-lg">{v}</span></li>
                    ))}
                </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-6">What We Offer</h3>
                <ul className="space-y-4 text-stone-700">
                    {offers.map((o, i) => (
                        <li key={i} className="flex items-start"><span className="text-sage-600 mr-3 text-xl font-bold">✓</span><span className="text-lg">{o}</span></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ValueCards;