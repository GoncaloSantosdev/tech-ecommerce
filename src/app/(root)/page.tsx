// Metadata
import { Metadata } from "next";
// Components
import { HomeBanner } from "@/components";
import { ProductList } from "@/features/product/components";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <ProductList />
    </>
  );
};

export default HomePage;
