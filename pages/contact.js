import ContainerBlock from "../components/ContainerBlock";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Contact() {
  return (
    <ContainerBlock
      title="Fox Web Development"
      description="Developing sites for companies, to bring them online."
    >
      <main className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get in touch.</h1>
            <p className="mt-4 text-gray-500">
              I&apos;m glad to answer all of your questions
            </p>
          </div>

          <form action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm border"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="number" className="sr-only">
                Number
              </label>

              <div className="relative">
                <input
                  type="tel"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm border"
                  placeholder="Enter number"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Message
              </label>
              <div className="relative">
                <textarea
                  rows="10"
                  className="w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                  placeholder="Your message"
                />
                <span className="absolute top-4 inline-flex items-center right-4">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="inline-block px-5 py-3 ml-3 text-sm font-medium text-bwhite bg-cta rounded-lg "
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div
          className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full"
          style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 10% 100%)" }}
        >
          <Image
            className="absolute inset-0 object-cover w-full h-full filter brightness-50"
            src="/assets/image/contact.jpeg"
            alt="Contact Image"
            layout="fill"
          />
        </div>
        <div className="absolute w-full bottom-0 flex items-center justify-center">
          <Footer />
        </div>
      </main>
    </ContainerBlock>
  );
}
