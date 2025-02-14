import Banner from "./Banner";

import Container from "@/components/shared/container";
import Navigation from "./navigation";
export const metadata = {
    title: "Collection Page of the App",
    description: "Generated by create next app",
};

export default function CollectionLayout({ children }) {
 
    return (
        <div>
            <Banner />
            <Container>
              <Navigation/>
            </Container>
            {children}
        </div>
    );
}
