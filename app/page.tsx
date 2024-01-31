import ServiceProviderList from "./components/ServiceProviderList";

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <ServiceProviderList/>
      </div>
    </main>
  );
}



