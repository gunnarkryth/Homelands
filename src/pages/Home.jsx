import StaffCards from "../components/StaffCards";
import RandomHousingCards from "../components/RandomHouses";
import RandomReview from "../components/randomReview";
import { Slideshow } from "../components/Slideshow";

export const Home = () => {
  return (
    <>
      <Slideshow />
      <RandomHousingCards />
      <RandomReview />
      <StaffCards />
    </>
  );
};
