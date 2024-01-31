import React from "react";
import { IServiceProvider } from "@/public/types/serviceProvider";

interface ProviderCardProps {
  provider: IServiceProvider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
    const { th, toh } = provider.rating;
    const { slug } = provider

  return (
    <div className="border p-4 mb-4 rounded-md">
     <h2 className="text-xl font-bold mb-2">{provider.name}</h2>
      <img
        src={`https://d126ytvel6227q.cloudfront.net/logos/${slug}.jpg`}
        alt={`${provider.name} Logo`}
        className="max-w-full mb-2 rounded-md"
      />
      <p>
        Rating: {th.toFixed(1)} / 5
      </p>
      <p>
       {provider.address}
      </p>
      {/* <p>
        Certs: {provider.certifications}
      </p>
      <p>
        Awards:{provider.awards}
      </p> */}
      <p>
         Services: {provider.services}
      </p>
      <p>
        Experiences: {provider.highlights}
      </p>
    </div>
  );
};

export default ProviderCard;
