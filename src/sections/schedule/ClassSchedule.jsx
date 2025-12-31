const ClassSchedule = () => {
  const schedule = [
    {
      day: 'Monday',
      classes: [
        { time: '6:00 AM', name: 'Sunrise Vinyasa', instructor: 'Sarah J.', level: 'All Levels' },
        { time: '9:00 AM', name: 'Hatha Yoga', instructor: 'Michael C.', level: 'Beginner' },
        { time: '12:00 PM', name: 'Lunch Flow', instructor: 'Emma W.', level: 'All Levels' },
        { time: '6:00 PM', name: 'Power Yoga', instructor: 'David M.', level: 'Advanced' },
        { time: '7:30 PM', name: 'Yin Yoga', instructor: 'Emma W.', level: 'All Levels' },
      ],
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '6:00 AM', name: 'Morning Meditation', instructor: 'Lisa A.', level: 'All Levels' },
        { time: '9:00 AM', name: 'Vinyasa Flow', instructor: 'Michael C.', level: 'Intermediate' },
        { time: '12:00 PM', name: 'Restorative Yoga', instructor: 'Sarah J.', level: 'All Levels' },
        { time: '6:00 PM', name: 'Hatha Yoga', instructor: 'Michael C.', level: 'Beginner' },
        { time: '7:30 PM', name: 'Evening Flow', instructor: 'David M.', level: 'Intermediate' },
      ],
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '6:00 AM', name: 'Sunrise Vinyasa', instructor: 'Sarah J.', level: 'All Levels' },
        { time: '9:00 AM', name: 'Yin Yoga', instructor: 'Emma W.', level: 'All Levels' },
        { time: '12:00 PM', name: 'Lunch Flow', instructor: 'Michael C.', level: 'All Levels' },
        { time: '6:00 PM', name: 'Power Yoga', instructor: 'David M.', level: 'Advanced' },
        { time: '7:30 PM', name: 'Meditation & Mindfulness', instructor: 'Lisa A.', level: 'All Levels' },
      ],
    },
    {
      day: 'Thursday',
      classes: [
        { time: '6:00 AM', name: 'Morning Meditation', instructor: 'Lisa A.', level: 'All Levels' },
        { time: '9:00 AM', name: 'Vinyasa Flow', instructor: 'Michael C.', level: 'Intermediate' },
        { time: '12:00 PM', name: 'Restorative Yoga', instructor: 'Sarah J.', level: 'All Levels' },
        { time: '6:00 PM', name: 'Hatha Yoga', instructor: 'Michael C.', level: 'Beginner' },
        { time: '7:30 PM', name: 'Evening Flow', instructor: 'David M.', level: 'Intermediate' },
      ],
    },
    {
      day: 'Friday',
      classes: [
        { time: '6:00 AM', name: 'Sunrise Vinyasa', instructor: 'Sarah J.', level: 'All Levels' },
        { time: '9:00 AM', name: 'Yin Yoga', instructor: 'Emma W.', level: 'All Levels' },
        { time: '12:00 PM', name: 'Lunch Flow', instructor: 'Michael C.', level: 'All Levels' },
        { time: '6:00 PM', name: 'Weekend Wind Down', instructor: 'Emma W.', level: 'All Levels' },
      ],
    },
    {
      day: 'Saturday',
      classes: [
        { time: '8:00 AM', name: 'Weekend Warrior', instructor: 'David M.', level: 'Intermediate' },
        { time: '10:00 AM', name: 'Family Yoga', instructor: 'Sarah J.', level: 'All Levels' },
        { time: '2:00 PM', name: 'Restorative Yoga', instructor: 'Emma W.', level: 'All Levels' },
        { time: '4:00 PM', name: 'Vinyasa Flow', instructor: 'Michael C.', level: 'All Levels' },
      ],
    },
    {
      day: 'Sunday',
      classes: [
        { time: '9:00 AM', name: 'Sunday Slow Flow', instructor: 'Emma W.', level: 'All Levels' },
        { time: '11:00 AM', name: 'Meditation & Mindfulness', instructor: 'Lisa A.', level: 'All Levels' },
        { time: '2:00 PM', name: 'Yin Yoga', instructor: 'Sarah J.', level: 'All Levels' },
        { time: '4:00 PM', name: 'Weekend Wind Down', instructor: 'Michael C.', level: 'All Levels' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Schedule</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-4 mb-6">
            Weekly Class Schedule
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Find the perfect time for your practice. All classes are available in-studio and online.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {schedule.map((daySchedule) => (
                <div key={daySchedule.day} className="bg-white rounded-xl shadow-md border border-stone-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4 text-center">
                    <h3 className="font-bold text-lg">{daySchedule.day}</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {daySchedule.classes.map((classItem, idx) => (
                      <div key={idx} className="border-b border-stone-100 pb-3 last:border-0 last:pb-0">
                        <div className="text-teal-600 font-bold text-sm mb-1">{classItem.time}</div>
                        <div className="font-semibold text-stone-900 text-sm mb-1">{classItem.name}</div>
                        <div className="text-xs text-stone-500 mb-1">{classItem.instructor}</div>
                        <span className="inline-block px-2 py-0.5 bg-teal-50 text-teal-700 text-xs rounded-full">
                          {classItem.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-600 mb-4">
            <span className="font-semibold">Note:</span> Schedule subject to change. Please check our app or call ahead.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Download Full Schedule PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;

