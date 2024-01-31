
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
  