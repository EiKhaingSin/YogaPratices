const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const fetchClasses = async () => {
  try {

    return [
      {
        id: 1,
        name: 'Hatha Yoga',
        description: 'A gentle introduction to yoga poses and breathing techniques.',
        duration: '60 min',
        level: 'Beginner',
        instructor: 'Sarah Johnson',
      },

    ];
  } catch (error) {
    console.error('Error fetching classes:', error);
    throw error;
  }
};

export const fetchInstructors = async () => {
  try {

    return [];
  } catch (error) {
    console.error('Error fetching instructors:', error);
    throw error;
  }
};

export const bookClass = async (classId, userId) => {
  try {

    return { success: true, bookingId: Date.now() };
  } catch (error) {
    console.error('Error booking class:', error);
    throw error;
  }
};

