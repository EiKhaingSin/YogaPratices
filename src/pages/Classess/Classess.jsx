import ClassesHero from '../../pages/Classess/Classesshero';
import ClassFilters from '../../pages/Classess/Classfiler';
import ClassList from '../../sections/classes/ClassList';
import ClassSchedule from '../../sections/schedule/ClassSchedule';

const Classes = () => {
    return (
        <div className="min-h-screen">
            <ClassesHero />
            <section className="py-20 bg-gradient-to-b from-white to-stone-50">
                <div className="container-custom">
                    <ClassFilters />
                    <ClassList />
                </div>
            </section>
            <ClassSchedule />
        </div>
    );
};

export default Classes;