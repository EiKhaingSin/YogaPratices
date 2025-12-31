const ClassFilters = () => {
    const categories = ["All Classes", "Beginner", "Intermediate", "Advanced"];

    return (
        <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((cat, index) => (
                    <button
                        key={cat}
                        className={`px-6 py-3 rounded-xl font-semibold shadow-md transform hover:scale-105 transition-all duration-200 
              ${index === 0
                                ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg"
                                : "bg-white text-stone-700 border-2 border-stone-200 hover:border-teal-300 hover:text-teal-600"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ClassFilters;