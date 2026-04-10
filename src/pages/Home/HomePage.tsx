import Hero from "../../components/home/Hero"
import CategorySection from "../../components/home/CategorySection"
import ProductSlider from "../../components/home/ProductSlider"
import WhySnackriti from "../../components/home/WhySnackriti"
import Testimonials from "../../components/home/Testimonials"
import Newsletter from "../../components/home/Newsletter"
import AllCategorySection from "../../components/home/AllCategorySection"

const HomePage = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <AllCategorySection />
      <ProductSlider />
      <ProductSlider />
      <WhySnackriti />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default HomePage