
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProviders from "@/components/FeaturedProviders";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServiceCategories />
      <HowItWorks />
      <FeaturedProviders />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
