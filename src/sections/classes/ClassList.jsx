import ClassCard from './ClassCard';
import woodImg from '../../assets/images/Pratices/wood-therapy.jpg';
import hatha from '../../assets/images/Pratices/hatha-yoga.webp';
import vingasa from '../../assets/images/Pratices/vinyasa.webp';
import yin from '../../assets/images/Pratices/yin_yoga.jpg';
import power from '../../assets/images/Pratices/power-yoga.jpg';
import resto from '../../assets/images/Pratices/restorative.webp';

const ClassList = ({ classes = [] }) => {
  const defaultClasses = [
    {
      id: 1,
      name: 'Hatha Yoga',
      description: 'A gentle introduction to yoga poses and breathing techniques.',
      duration: '60 min',
      level: 'Beginner',
      instructor: 'Sarah Johnson',
      image: hatha,
    },
    {
      id: 2,
      name: 'Vinyasa Flow',
      description: 'Dynamic flowing sequences that connect breath with movement.',
      duration: '75 min',
      level: 'Intermediate',
      instructor: 'Michael Chen',
      image: vingasa,
    },
    {
      id: 3,
      name: 'Yin Yoga',
      description: 'Slow-paced style with poses held for longer periods.',
      duration: '90 min',
      level: 'All Levels',
      instructor: 'Emma Williams',
      image: yin,
    },
    {
      id: 4,
      name: 'Power Yoga',
      description: 'Intense, fitness-based approach to vinyasa-style yoga.',
      duration: '60 min',
      level: 'Advanced',
      instructor: 'David Martinez',
      image: power,
    },
    {
      id: 1,
      name: 'Wooden Therapy',
      description: 'Quis ipsum suspendisse ultrices gravida dictum fusce ut in ante metus dictum at tempor.',
      duration: '45 Mins',
      level: 'Beginner',
      image: woodImg,
    },
    {
      id: 6,
      name: 'Restorative Yoga',
      description: 'Relaxing practice using props to support the body in restful poses.',
      duration: '75 min',
      level: 'All Levels',
      instructor: 'Sarah Johnson',
      image: resto,
    },
  ];

  const displayClasses = classes.length > 0 ? classes : defaultClasses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayClasses.map((yogaClass) => (
        <ClassCard key={yogaClass.id} yogaClass={yogaClass} />
      ))}
    </div>
  );
};

export default ClassList;