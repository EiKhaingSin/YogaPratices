import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const ClassCard = ({ yogaClass }) => {
  return (

    <Card className="flex flex-col h-full group hover:shadow-lg transition-all duration-500 max-w-[350px] mx-auto bg-brown-100 overflow-hidden border-none rounded-[2.5rem]">


      <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden">
        <img
          src={yogaClass.image || 'https://via.placeholder.com/400x300'}
          alt={yogaClass.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />


        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-12 w-full fill-brown-100">
            <path d="M0,150 C150,150 200,50 500,150 L500,150 L0,150 Z"></path>
          </svg>
        </div>
      </div>


      <div className="flex flex-col flex-grow text-center px-6">
        <Card.Header className="p-0 pt-2">
          <h3 className="text-xl font-serif tracking-widest uppercase text-brown-800 mb-2 font-bold leading-tight">
            {yogaClass.name}
          </h3>

          <p className="text-stone-500 text-[11px] leading-relaxed italic line-clamp-2 min-h-[32px]">
            {yogaClass.description}
          </p>
        </Card.Header>

        <Card.Body className="flex-grow p-0">
          <div className="flex items-center justify-center gap-3 border-y border-stone-300/40 py-3 mt-4">
            <div className="text-[9px] uppercase tracking-widest text-stone-500 font-medium">
              Duration: <span className="text-brown-800 font-bold">{yogaClass.duration}</span>
            </div>
            <div className="w-px h-3 bg-stone-300"></div>
            <div className="text-[9px] uppercase tracking-widest text-stone-500 font-medium">
              Level: <span className="text-brown-800 font-bold">{yogaClass.level}</span>
            </div>
          </div>
        </Card.Body>


        <Card.Footer className="p-0 py-6 mt-auto">
          <Button variant="brown" className="w-full py-3 text-[10px] font-bold uppercase tracking-[0.2em]">
            Book Now
          </Button>
        </Card.Footer>
      </div>

    </Card>
  );
};


export default ClassCard;