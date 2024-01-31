import ServiceProviderList from "./components/ServiceProviderList";

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto mt-20'>
      <div className='w-full mx-auto text-left my-5 flex flex-col gap-4'>
        <ServiceProviderList/>
      </div>
    </main>
  );
}



