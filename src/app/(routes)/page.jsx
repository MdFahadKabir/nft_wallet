import Container from "@/components/shared/container";
import Banner from "./banner";
import CollectionCategory from "./collection-category";
import ExploreCategory from "./explore-category";
import HomeNav from "./home-nav";
import Recent from "./recent";
import Trending from "./trending";
import Footer from "@/components/shared/footer";



export default function Home() {
  return (
    <div>
       <Container>
               <HomeNav/>
            </Container>
      <Banner />
      <Trending />
      <Recent />
      <CollectionCategory />
      <ExploreCategory />
      <Footer />

    </div>
  )
}
