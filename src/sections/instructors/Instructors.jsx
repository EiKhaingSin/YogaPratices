import Card from '../../components/ui/Card'; 
import fbIcon from "../../assets/icons/facebook.svg";    
import instaIcon from "../../assets/icons/instagram.svg"; 
import linkedinIcon from "../../assets/icons/linkedin.svg";
import teacher1 from "../../assets/images/trainingtr/teacher.webp"
import teacher2 from "../../assets/images/trainingtr/teacher4.jpg"
import teacher3 from "../../assets/images/trainingtr/teacher3.jpg"
import teacher4 from "../../assets/images/trainingtr/teacher5.jpg"

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'Hatha & Restorative',
      experience: '8y Exp',
      certification: 'RYT-500',
      bio: 'Sarah brings a gentle, nurturing approach to her classes.',
      image: teacher1,
    },
    {
      id: 2,
      name: 'Michael Chen',
      specialty: 'Vinyasa Flow',
      experience: '10y Exp',
      certification: 'RYT-500',
      bio: "Michael's dynamic flows challenge students' harmony.",
      image: teacher2,
    },
    {
      id: 3,
      name: 'Emma Williams',
      specialty: 'Yin & Meditation',
      experience: '6y Exp',
      certification: 'RYT-200',
      bio: 'Emma specializes in deep relaxation and inner peace.',
      image: teacher3,
    },
    {
      id: 4,
      name: 'David Smith',
      specialty: 'Ashtanga Yoga',
      experience: '12y Exp',
      certification: 'RYT-500',
      bio: 'David focuses on strength, discipline, and breath control.',
      image: teacher4,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h4 className="text-[#7D5A94] font-bold text-[10px] uppercase tracking-[0.3em] mb-2">Our Professionals</h4>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2D2A28] italic">Meet Our Instructors</h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="border-none shadow-none bg-transparent overflow-visible">
              
              <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-md z-10">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover" 
                />
             
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                   <MiniSocialIcon iconSrc={instaIcon} />
                   <MiniSocialIcon iconSrc={fbIcon} />
                   <MiniSocialIcon iconSrc={linkedinIcon} />
                </div>
              </div>

              <div className="relative -mt-8 pt-12 pb-2 bg-white rounded-2xl border border-stone-100 shadow-sm">
                <Card.Header className="p-4 text-center">
                  <span className="text-[9px] font-bold text-[#7D5A94] uppercase tracking-widest">{instructor.certification}</span>
                  <h3 className="text-lg font-serif text-[#2D2A28] mt-1">{instructor.name}</h3>
                  <p className="text-[#6B5E59] text-[11px] italic">{instructor.specialty}</p>
                </Card.Header>

                <Card.Body className="px-4 pb-4 text-center">
                  <p className="text-stone-500 text-[12px] leading-relaxed line-clamp-2 mb-3">
                    {instructor.bio}
                  </p>
                  <div className="inline-block px-3 py-1 bg-stone-50 rounded-full text-[9px] font-bold text-stone-400 uppercase">
                    {instructor.experience}
                  </div>
                </Card.Body>

                <Card.Footer className="border-t-0 px-4 pb-4">
                  <button className="w-full py-2.5 text-[10px] font-bold uppercase tracking-widest text-white bg-[#C5B1A9] rounded-xl shadow-sm">
                    View Profile
                  </button>
                </Card.Footer>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const MiniSocialIcon = ({ iconSrc }) => (
  <button className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
    <img src={iconSrc} alt="social" className="w-3.5 h-3.5 opacity-70" />
  </button>
);

export default Instructors;