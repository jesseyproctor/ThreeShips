import { getAllProviders } from "@/api";
import ServiceProviderList from "./components/ServiceProviderList";

export default async function Home() {
  const providers = await getAllProviders();

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <ServiceProviderList providers={providers}/>
      </div>
    </main>
  );
}
