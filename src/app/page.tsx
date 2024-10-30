import { Confidance, DiveIn, Footer, Header, Hero, Plans, ProjectSummary, Tabel } from './../../components/index'
export default function Home() {
  return (
    <div className=" ">
      <div className='bg-[url(/s.png)] bg-no-repeat font-chocolates' style={{backgroundSize:'100% 50%',fontFamily:''}}>

      <Header />
      <Hero />
      </div>
      <Confidance />
      <ProjectSummary />
      <DiveIn />
      {/* Plans */}
      <Plans />

      {/* Plans end */}
      {/* Tabel */}
      <Tabel />
      <h1 className='text-center  font-bold md:text-4xl lg:text-5xl text-3xl mt-20 mb-10  '>Be First to Unlock Artie’s Creative Power!</h1>
      <p className=' md:w-[38%] sm:w-full w-[89%] mx-auto text-lg text-center font-bold'>Join now for early access and exclusive updates on Artie’s AI tools for designers.
      </p>

      <Footer />
    </div>
  );
}
