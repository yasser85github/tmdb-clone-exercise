//import components
import Container from "../Layouts/Container";
import Banner from "../components/Banner";
import Section from "../Layouts/Section";
import MovieList from "../components/Movies/MovieList";

export default function Home() {
  return (
    <Container>
      <Banner />
      <Section title="What's Popular">
        <MovieList />
      </Section>
    </Container>
  );
}
