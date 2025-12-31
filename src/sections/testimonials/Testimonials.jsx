import Card from '../../components/ui/Card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jessica Martinez',
      role: 'Member since 2020',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      text: 'This studio changed my life. The instructors are incredibly knowledgeable and the community is so welcoming. I\'ve found my second home here.',
    },
    {
      id: 2,
      name: 'Robert Chen',
      role: 'Member since 2021',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      text: 'As someone new to yoga, I was nervous at first. But the beginner classes are perfect, and I\'ve progressed so much in just a few months.',
    },
    {
      id: 3,
      name: 'Amanda Thompson',
      role: 'Member since 2019',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80',
      text: 'The best yoga studio in the city. The variety of classes keeps me motivated, and the meditation sessions have helped me manage stress tremendously.',
    },
    {
      id: 4,
      name: 'Michael Park',
      role: 'Member since 2022',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      text: 'I love the flexible schedule and online options. The instructors really care about your progress and offer personalized guidance.',
    },
    {
      id: 5,
      name: 'Sarah Williams',
      role: 'Member since 2021',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      text: 'The restorative yoga classes are exactly what I needed after long work days. The studio has a peaceful, calming atmosphere.',
    },
    {
      id: 6,
      name: 'David Johnson',
      role: 'Member since 2020',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
      text: 'Excellent facilities and top-notch instructors. The power yoga classes challenge me while the meditation helps me stay centered.',
    },
  ];

  return (
    <section className="relative bg-white pt-32 pb-40 overflow-hidden">
      

      <div className="absolute top-0 left-0 w-full rotate-180 leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-[#D4C3BC]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 mt-10">
          <span className="text-[#C5B1A9] font-bold text-[11px] uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D2A28]">
            What Our <span className="italic text-[#C5B1A9]">Members Say</span>
          </h2>
        </div>
        
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-[#FCFBFA] border border-stone-100 shadow-sm p-8 rounded-3xl relative overflow-hidden h-full flex flex-col justify-between">
              
              <div className="absolute top-0 right-0 w-10 h-10 bg-[#D4C3BC]/20 rounded-bl-2xl flex items-center justify-center">
                <span className="text-xl font-serif text-[#C5B1A9]">“</span>
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-[#6B5E59] text-[14px] leading-relaxed mb-8 font-light italic">
                  "{testimonial.text}"
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4C3BC] flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <h4 className="font-serif text-[16px] text-[#2D2A28] leading-tight">{testimonial.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-[#C5B1A9] font-bold mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

     
      <div className="absolute bottom-0 left-0 w-full leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[120px] fill-[#D4C3BC]">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;