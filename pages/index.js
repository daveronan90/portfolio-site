import Image from "next/image";
import ContainerBlock from "../components/ContainerBlock";

export default function Home() {
  return (
    <ContainerBlock
      title="Fox Web Development"
      description="Developing sites for companies, to bring them online."
    >
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
      <main className="container mx-auto fixed inset-0 my-8 md:my-0 flex flex-col justify-between">
        <div className="flex flex-col md:flex-row w-full justify-center items-center h-full">
          <div className="scale-75 md:scale-100 md:w-1/2 space-y-10">
            <Image
              src="/assets/svg/wave.svg"
              width={64}
              height={64}
              alt="wave"
            />
            <h1 className="font-bold text-6xl">Hi, I&apos;m Dave</h1>
            <p>
              <span className="font-semibold">
                Frontend Developer / Product Designer{" "}
              </span>
              <br />
              <br />
              I have a passion for the development & design of the web.
              <br />
              <br />I help companies by introducing them to the online world,
              where they can grow there business and reach a larger audience.
            </p>
          </div>
          <div className="md:w-1/2 scale-50 md:scale-100 grid place-content-center h-full dark:text-bblack">
            <div
              style={{ boxShadow: "0px 50px 50px 20px rgba(0, 0, 0, 0.1)" }}
              className="rounded-2xl bg-bwhite h-80 w-96 flex flex-col justify-center items-center space-y-4 relative"
            >
              <div
                className="w-32 h-32 rounded-full"
                style={{
                  boxShadow: "0px 8px 17px rgba(0, 0, 0, 0.1)",
                  backgroundImage: "url('./assets/image/dave.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <h2 className="font-semibold">David Ronan</h2>
              <p className="text-gray-400">Frontend Developer</p>
              <div className="rounded-3xl grid place-items-center bg-[#E1FAFF] absolute -right-10 top-10 w-20 h-20">
                <Image
                  src="/assets/svg/react.svg"
                  width="40"
                  height="40"
                  alt="react"
                />
              </div>
              <div className="rounded-3xl grid place-items-center bg-[#F4F0F4] absolute -left-10 top-2 w-20 h-20">
                <Image
                  src="/assets/svg/figma.svg"
                  width="40"
                  height="40"
                  alt="figma"
                />
              </div>
              <div className="rounded-3xl grid place-items-center bg-[#E2FFE9] absolute -bottom-10 left-6 w-20 h-20">
                <Image
                  src="/assets/svg/node.svg"
                  width="40"
                  height="40"
                  alt="node"
                />
              </div>
              <div
                className="bg-bwhite rounded-3xl justify-center items-center space-x-2 absolute -left-44 bottom-32 py-4 px-4 flex"
                style={{ boxShadow: "0px 8px 17px rgba(0, 0, 0, 0.1)" }}
              >
                <Image
                  src="/assets/svg/nextjs.svg"
                  width="40"
                  height="40"
                  alt="nextjs"
                />
                <h2 className="font-semibold">NextJs</h2>
              </div>
              <div
                className="bg-bwhite rounded-3xl justify-center items-center space-x-2 absolute -right-40 bottom-16 py-4 px-4 flex"
                style={{ boxShadow: "0px 8px 17px rgba(0, 0, 0, 0.1)" }}
              >
                <Image
                  src="/assets/svg/firebase.svg"
                  width="40"
                  height="40"
                  alt="firebase"
                />
                <h2 className="font-semibold">Firebase</h2>
              </div>
              <div
                className="bg-bwhite rounded-3xl justify-center items-center space-x-2 absolute -right-8 -bottom-28 py-4 px-4 flex"
                style={{ boxShadow: "0px 8px 17px rgba(0, 0, 0, 0.1)" }}
              >
                <Image
                  src="/assets/svg/tailwindcss.svg"
                  width="40"
                  height="40"
                  alt="tailwindcss"
                />
                <h2 className="font-semibold">tailwindcss</h2>
              </div>
              <div
                className="bg-bwhite rounded-3xl justify-center items-center space-x-2 absolute -left-28 -top-32 py-4 px-4 flex"
                style={{ boxShadow: "0px 8px 17px rgba(0, 0, 0, 0.1)" }}
              >
                <Image
                  src="/assets/svg/vscode.svg"
                  width="40"
                  height="40"
                  alt="vscode"
                />
                <h2 className="font-semibold">VSCode</h2>
              </div>
              <div
                className="bg-bwhite rounded-3xl justify-center items-center space-x-2 absolute -right-8 -top-28 py-4 px-4 flex"
                style={{ boxShadow: "0px 8px 17px rgba(0, 0, 0, 0.1)" }}
              >
                <Image
                  src="/assets/svg/inkscape.svg"
                  width="40"
                  height="40"
                  alt="inkscape"
                />
                <h2 className="font-semibold">Inkscape</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ContainerBlock>
  );
}
