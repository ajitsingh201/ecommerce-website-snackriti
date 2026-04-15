import Hero from "../../components/home/Hero"
import CategorySection from "../../components/home/CategorySection"
import AllCategorySection from "../../components/home/AllCategorySection"
import MakhanaSection from "../../components/home/MakhanaSection"
import StandyPouchSlider from "../../components/home/StandyPouchSlider"
import ProductSlider from "../../components/home/ProductSlider"
import WhySnackriti from "../../components/home/WhySnackriti"
import Testimonials from "../../components/home/Testimonials"
import Newsletter from "../../components/home/Newsletter"

const HomePage = () => {
  return (
    <>
      <Hero />
      <AllCategorySection />
      <CategorySection />
      <MakhanaSection />
      <StandyPouchSlider />
      <ProductSlider title="Best Sellers" />
      <ProductSlider title="New Arrivals" filterBy="newArrival" />
      <WhySnackriti />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default HomePage