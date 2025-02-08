import Layout from "../../components/Layout";
import Footer from "../../components/templates/Footer";
import About from "../../components/views/Homepage/About";
import ContactUs from "../../components/views/Homepage/ContactUs";
import Featured from "../../components/views/Homepage/Featured";
import Header from "../../components/views/Homepage/Header";
import Popular from "../../components/views/Homepage/Popular";
import ProductSlider from "../../components/views/Homepage/Product";

const Home = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Popular />
      <Featured />
      <ProductSlider />
      <ContactUs />
      <Footer />
    </Layout>
  );
};

export default Home;
