import { IServiceProvider } from "@/types/serviceProvider";
import React from "react";
import ProviderCard from "./ProviderCard";

interface ServiceProviderProps {
  providers: IServiceProvider[];
}

const TodoList: React.FC<ServiceProviderProps> = ({ providers }) => {
  return (
    <div className='overflow-x-auto'>
        <div>
          {providers.map((provider) => (
            <ProviderCard key={provider._id} provider={provider} />
          ))}
        </div>
    </div>
  );
};

export default TodoList;