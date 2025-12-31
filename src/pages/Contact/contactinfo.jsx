const ContactInfoCards = () => {
    const infoItems = [
        { title: "Address", content: "123 Peaceful Street, Wellness City", iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", color: "from-teal-400 to-teal-600" },
        { title: "Email", content: "info@yogastudio.com", iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "from-sage-400 to-sage-600" },
        { title: "Phone", content: "(555) 123-4567", iconPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", color: "from-teal-400 to-teal-600" }
    ];

    return (
        <div className="space-y-6">
            {infoItems.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md border border-stone-100">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg text-white`}>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-stone-900 mb-1 text-lg">{item.title}</h3>
                        <p className="text-stone-600">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactInfoCards;