import ContainerBlock from "../components/ContainerBlock";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <ContainerBlock
      title="Fox Web Development"
      description="Developing sites for companies, to bring them online."
    >
      <main
        className="h-screen relative flex flex-col justify-center items-center text-bwhite"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(36, 110, 185, 0.8) 0%, #246EB9 100%)",
        }}
      >
        <div className="flex flex-col justify-between items-center container mx-auto">
          <h1 className="col-start-2 row-start-1 border-2 border-bwhite px-8 py-2  font-bold text-5xl">
            What I&apos;am About
          </h1>
          <div className="flex justify-center items-center w-full mb-10">
            <div className="flex flex-col space-y-4 w-1/3">
              <div className="flex justify-start items-center space-x-4">
                <Image
                  src="/assets/svg/design.svg"
                  width="56"
                  height="56"
                  alt="Design"
                  className="opacity-50"
                />
                <h2 className="font-bold text-3xl">Design</h2>
              </div>
              <p>
                I can turn your ideas into a beautiful site. Do you have a
                layout or favorite site? Get in touch I can build it!
              </p>
            </div>
            <Image
              src="/assets/image/Coder.png"
              width="433"
              height="433"
              alt="coder"
              className="w-1/3"
            />
            <div className="flex flex-col space-y-4 w-1/3">
              <div className="flex justify-start items-center space-x-4">
                <Image
                  src="/assets/svg/develop.svg"
                  width="56"
                  height="56"
                  alt="Design"
                  className="opacity-50"
                />
                <h2 className="font-bold text-3xl">Development</h2>
              </div>
              <p>
                I develop websites from scratch. That means no wordpress etc... You will get a unique website that is blazing fast and completely customizable!
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 w-1/3">
            <div className="flex justify-start items-center space-x-4">
              <Image
                src="/assets/svg/maintenance.svg"
                width="56"
                height="56"
                alt="Design"
                className="opacity-50"
              />
              <h2 className="font-bold text-3xl">Maintenance</h2>
            </div>
            <p>
              Keeping you site up-to-date is always a challenge, why don’t you
              let someone else handle that for you?
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer invert />
        </div>
      </main>
    </ContainerBlock>
  );
}
