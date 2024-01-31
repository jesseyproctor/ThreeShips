import React from "react";
import { IServiceProvider } from "@/types/serviceProvider";

interface ProviderCardProps {
  provider: IServiceProvider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">{provider.name}</h2>
      <p>
        <strong>ID:</strong> {provider._id}
      </p>
      <p>
        <strong>Phone:</strong> {provider.phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={provider.website} target="_blank" rel="noopener noreferrer">
          {provider.website}
        </a>
      </p>
    </div>
  );
};

export default ProviderCard;
