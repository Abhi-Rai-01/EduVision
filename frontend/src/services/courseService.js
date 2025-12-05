import api from './api';

export const courseService = {
  getAllCourses: async (filters = {}) => {
    const params = new URLSearchParams();
    
    if (filters.category && filters.category !== 'All') {
      params.append('category', filters.category);
    }
    if (filters.platform && filters.platform !== 'All') {
      params.append('platform', filters.platform);
    }
    if (filters.difficulty && filters.difficulty !== 'All') {
      params.append('difficulty', filters.difficulty);
    }
    if (filters.search) {
      params.append('search', filters.search);
    }
    if (filters.page) {
      params.append('page', filters.page);
    }
    
    const response = await api.get(`/courses?${params.toString()}`);
    return response.data;
  },

  getFeaturedCourses: async () => {
    const response = await api.get('/courses/featured');
    return response.data;
  },

  getCourse: async (id) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  }
};