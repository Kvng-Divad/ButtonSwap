import React, { useEffect, useState } from "react";
import "./Offer.css";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";
// import icon1 from "../../Assets/svg1.png";
// import icon2 from "../../Assets/svg2.png";
// import icon3 from "../../Assets/svg3.png";
// import image1 from "../../Assets/image1.png";
// import image2 from "../../Assets/image2.png";
// import image3 from "../../Assets/image3.png";
import { useQuery } from "react-query";
import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  usePagination,
} from "@ajna/pagination";

const fetchProducts = async (page = 1, take = 12) => {
  const res = await fetch(
    `http://kezaafrica.herokuapp.com/v1/products/with-images?take=${take}&page=${page}`
  );
  return res.json();
};

const Offer = () => {
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const { data, status, refetch } = useQuery("products", () =>
    fetchProducts(page)
  );
  const list = data?.data?.list;
  const totalCount = data?.data?.totalCount;
  const numberOfPages = data?.data?.numberOfPages;

  // Add a progress bar to show that it is refetching when status === loading

  const conveneNumber = Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "NGN",
  }).format;

  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: numberOfPages,
    total: totalCount,
    initialState: { currentPage: 1 },
  });

  const products = list?.map(item => ({
    logo: item?.brand?.image,
    image: item?.meta?.images?.find(image => image?.image?.length > 1)?.image,
    name: item?.name,
    price: item?.meta?.price?.min,
    color: item?.meta?.colors[0],
  }));

  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [page]);

  // const Data = [
  //   {
  //     logo: icon1,
  //     image: image1,
  //     name: "Iphone 13 Pro",
  //     price: "110,000",
  //     color: "#FFFEF1",
  //   },
  //   {
  //     logo: icon2,
  //     image: image2,
  //     name: "HUAWEI MATE X2",
  //     price: "72,500",
  //     color: "#F5FFF4",
  //   },
  //   {
  //     logo: icon3,
  //     image: image3,
  //     name: "GALAXY S22 Ultra",
  //     price: "76,000",
  //     color: "#FEF7FF",
  //   },
  //   {
  //     logo: icon2,
  //     image: image2,
  //     name: "HUAWEI MATE X2",
  //     price: "72,500",
  //     color: "#F5FFF4",
  //   },
  //   {
  //     logo: icon3,
  //     image: image3,
  //     name: "GALAXY S22 Ultra",
  //     price: "76,000",
  //     color: "#FEF7FF",
  //   },
  //   {
  //     logo: icon1,
  //     image: image1,
  //     name: "Iphone 13 Pro",
  //     price: "110,000",
  //     color: "#FFFEF1",
  //   },
  // ];

  return (
    <div className="Container3 grid">
      <div className="hero-icon flex">
        <Link to="/">
          <ChevronLeftIcon className="heroicon" />
        </Link>
      </div>

      <div className="section-title">
        <h3>Smartphone Offers</h3>
        <p>Select a smartphone</p>
      </div>

      <Select
        placeholder="All Brands"
        spacing={3}
        variant="filled"
        className="filter"
        size="lg"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>

      <div className="phone-cards grid">
        {products?.map(({ logo, image, color, name, price }, index) => {
          return (
            <div key={index} className="phone-card grid">
              <div className="phone-logo grid">
                <img src={logo} alt="icon" />
              </div>

              <div className="phone-img">
                <img src={image} alt="icon" />
              </div>

              <div className="phone-color"></div>

              <h3 className="phone-name">{name}</h3>

              <p className="price">
                From <span>{conveneNumber(price)}</span> per month{" "}
              </p>

              <Link to="/order">
                <button className="butn">Select</button>
              </Link>
            </div>
          );
        })}
      </div>
      {/* Style this pagination component  */}
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={page => {
          setCurrentPage(page);
          setPage(page);
        }}
      >
        <PaginationContainer>
          <PaginationPrevious>Previous</PaginationPrevious>
          <PaginationPageGroup>
            {pages.map(page => (
              <PaginationPage key={`pagination_page_${page}`} page={page} />
            ))}
          </PaginationPageGroup>
          <PaginationNext>Next</PaginationNext>
        </PaginationContainer>
      </Pagination>
    </div>
  );
};

export default Offer;
