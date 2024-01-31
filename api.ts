import { IServiceProvider } from "./types/serviceProvider";

const baseUrl = 'http://127.0.0.1';

export const getAllProviders = async (): Promise<IServiceProvider[]> => {
    try {
      const res = await fetch(`${baseUrl}/serviceProvider`, { cache: 'no-store' });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const providers = await res.json();
      return providers;
    } catch (error) {
      console.error("Error fetching providers:", error);
      throw error;
    }
  };
  