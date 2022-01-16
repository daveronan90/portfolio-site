import ContainerBlock from "../components/ContainerBlock";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <ContainerBlock
      title="Fox Web Development"
      description="Developing sites for companies, to bring them online."
    >
      <main className="h-screen relative">
        Projects
        <Footer />
      </main>
    </ContainerBlock>
  );
}