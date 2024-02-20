import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/Hero";
import NewCollection from "../components/newCollection/NewCollections";
import Offers from "../components/offers/offers";
import Popular from "../components/popular/popular";

export default function Home(){
    return(
        <>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
        </>
    );
}