import React from "react";
import { obtain } from "@/actions/action";
import Piechart from "@/Components/Piechart";
import { ProductsDataType } from "@/types";


  interface CategoryDataItem {
    name: string;
    value: number;
  }



interface CategoryCount {
  [category: string]: number;
}

const getCategoryData = async () => {
  const userToken = await obtain();
  try {
    const response = await fetch(
        "https://dummyjson.com/auth/products?limit=0",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken?.value}`,
        },
      },
    );
    if (!response.ok) {
    //   throw new Error("Error found");
    console.log(response)
    }
    const data: ProductsDataType = await response.json();

    const categoryCount = (data.products || []).reduce((acc, curr) => {
        const { category } = curr;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {} as CategoryCount);

    const distributionData = Object.entries(categoryCount).map(
      ([category, count]) => ({
        name: category,
        value: count,
      }),
    );

    return distributionData;
  } catch (error) {
    console.error("", error);
    throw error;
  }
};

const subCategories = (data: CategoryDataItem[]) => {
    const aggregatedData = data.reduce((acc, curr) => {
      const categoryName = getCategories(curr.name); // Implement this function
      acc[categoryName] = (acc[categoryName] || 0) + curr.value;
      return acc;
    }, {} as CategoryCount);
  
    // Convert the aggregated data back to an array
    const result = Object.entries(aggregatedData).map(([name, value]) => ({
      name,
      value,
    }));
    return result;
  };

  const getCategories = (subcategory: string) => {
    if (subcategory.startsWith("mens")) {
      return "Mens";
    } else if (subcategory.startsWith("womens")) {
      return "Womens";
    }
   

     else if (subcategory === "smartphones" || subcategory === "laptops") {
      return "Electronics";
    } else if (
      subcategory === "skincare" ||
      subcategory === "fragrances" ||
      subcategory === "sunglasses"
    ) {
      return "Beauty";
    } else if (subcategory === "automotive" || subcategory === "motorcycle") {
      return "Vehicle";
    } else if (
      subcategory === "furniture" ||
      subcategory === "home-decoration" ||
      subcategory === "lighting"
    ) {
      return "Home";
    } else {
      return subcategory;
    }
  };

const Analytics = async () => {
  const categoryData = await getCategoryData();
  const subcategory = subCategories(categoryData);
  // console.log(categoryData);
  const womenSubcategories = subcategory.filter((item) =>
  item.name.startsWith("womens")
);
  return (
    <div className="flex justify-center items-center h-screen">
      <Piechart categoryData={categoryData} subcategory={subcategory} />
    </div>
  );
};

export default Analytics;