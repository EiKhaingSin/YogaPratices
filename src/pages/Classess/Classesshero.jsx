const ClassesHero = () => (
  <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-sage-600 text-white py-24 overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

    <div className="container-custom text-center relative z-10">
      <span className="text-teal-100 font-semibold text-sm uppercase tracking-wider">Explore</span>
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 mt-4">Our Classes</h1>
      <p className="text-xl md:text-2xl text-teal-50 max-w-3xl mx-auto leading-relaxed">
        Discover the perfect yoga class for your journey. From gentle
        beginners' sessions to challenging advanced practices.
      </p>
    </div>
  </section>
);

export default ClassesHero;