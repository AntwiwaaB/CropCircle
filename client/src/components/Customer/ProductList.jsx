import React from 'react';

const ProductList = ({ title, products }) => {
  // ProductCard component definition
  const ProductCard = ({ name, price, rating, imageUrl }) => {
    return (
      <article className="flex flex-col self-stretch pb-6 my-auto min-w-[240px] w-[247px]">
        {/* Use the dynamic imageUrl */}
        <img
          loading="lazy"
          src={imageUrl}  // Use the imageUrl passed as a prop
          alt={name}      // Alt text is the product name for accessibility
          className="object-contain w-full shadow-md aspect-[1.46]"
        />
        <div className="flex flex-col items-start mt-9 ml-5 w-[91px] max-md:ml-2.5">
          <h3 className="text-base font-semibold text-black border border-white border-solid">
            {name}
          </h3>
          <div className="mt-2.5 text-xs font-light text-black border border-white border-solid">
            ${price.toFixed(2)} {/* Display the product price */}
          </div>
          <div className="flex gap-px self-stretch pr-5 mt-5">
            {/* Loop through and display star ratings */}
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                loading="lazy"
                src={
                  index < rating
                    ? "https://cdn.builder.io/api/v1/image/assets/TEMP/c4746ed99b1e26e95a827ec09840eb1842e9e7271de249e1977cde1c447ba5c5?placeholderIfAbsent=true&apiKey=073f510a333048369f411d9786313b20"
                    : "https://cdn.builder.io/api/v1/image/assets/TEMP/2d4852c7dc30fefefc8075037cff13f744c4d9b3b270e9658fe563affd3197b3?placeholderIfAbsent=true&apiKey=073f510a333048369f411d9786313b20"
                }
                alt={index < rating ? "Filled star" : "Empty star"}
                className="object-contain shrink-0 w-3.5 aspect-square"
              />
            ))}
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="w-full">
      <h2 className="mt-4 ml-20 text-3xl font-medium text-neutral-600 max-md:ml-2.5">
        {title} {/* Display the title of the section */}
      </h2>
      <div className="flex flex-wrap gap-7 justify-center items-center px-0.5 max-md:max-w-full">
        {/* Map over the products array and pass each product's data as props */}
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
