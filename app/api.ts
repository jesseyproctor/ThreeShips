
export const fetchProviders = async () => {
    try {
      const response = await fetch('/mocks/providers.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching providers:', error);
      throw error;
    }
  };

  export const fetchExperiences = async () => {
    try {
        const response = await fetch('/mocks/experiences.json');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching experiences:', error);
        throw error;
      }
  };
  