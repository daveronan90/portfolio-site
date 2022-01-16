import ContainerBlock from "../components/ContainerBlock";
import Footer from "../components/Footer";

export default function About() {
  return (
    <ContainerBlock
      title="Fox Web Development"
      description="Developing sites for companies, to bring them online."
    >
      <main className="h-screen relative">
        About
        <Footer />
      </main>
    </ContainerBlock>
  );
}
