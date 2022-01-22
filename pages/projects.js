import ContainerBlock from "../components/ContainerBlock";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <ContainerBlock
      title="Fox Web Development"
      description="Developing sites for companies, to bring them online."
    >
      
      <main className="bg-bwhite container mx-auto flex items-center justify-center fixed inset-0 my-8 md:my-0">
      <div
        style={{
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
          left: "55%",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(36, 110, 185, 0.8) 0%, #246EB9 95.83%)",
        }}
        className="lg:fixed bottom-0 right-0 top-0 z-0"
      />
      <div
        style={{
          clipPath: "polygon(100% 50%, 0% 100%, 100% 100%)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(36, 110, 185, 0.8) 0%, #246EB9 95.83%)",
        }}
        className="fixed md:hidden bottom-0 right-0 top-0 left-0 z-0"
      />
        <div className="z-10 max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:px-8 flex flex-col justify-around h-screen w-full">
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
              className="inline-block px-5 py-3 text-sm font-medium text-bwhite bg-primary rounded-lg"
              href=""
            >
              Find out more
            </a>
          </div>
        </div>
      </main>
    </ContainerBlock>
  );
}
