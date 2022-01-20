import ContainerBlock from "../components/ContainerBlock";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <ContainerBlock
      title="Fox Web Development"
      description="Developing sites for companies, to bring them online."
    >
      <section className="bg-bwhite container mx-auto flex items-center justify-center md:pt-24 md:h-screen">
        <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:px-8 flex flex-col justify-around h-screen w-full">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">My Work</h2>
          </div>

          <div className="grid place-items-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 h-full w-full">
            <a
              className="block p-8 border border-gray-800 shadow-xl rounded-xl w-full h-full bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage: "url('/assets/image/portfolioSite.png')",
                
              }}
            ></a>

            <a
              className="block p-8 border border-gray-800 shadow-xl rounded-xl w-full h-full bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage: "url('/assets/image/farrellFitness.png')",
                
              }}
            ></a>

            <a
              className="block p-8 border border-gray-800 shadow-xl rounded-xl w-full h-full bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage: "url('/assets/image/cryptoTracker.png')",
                
              }}
            ></a>
          </div>

          <div className="text-center">
            <a
              className="inline-block px-5 py-3 text-sm font-medium text-bwhite bg-cta rounded-lg"
              href=""
            >
              Find out more
            </a>
          </div>
        </div>
      </section>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </ContainerBlock>
  );
}
