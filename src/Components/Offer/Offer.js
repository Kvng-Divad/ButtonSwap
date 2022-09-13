import React, { useEffect, useState } from "react";
import "./Offer.css";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  CircularProgress,
  CircularProgressLabel,
  Select,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  usePagination,
} from "@ajna/pagination";
import { useRecoilState } from "recoil";
import { productsState, singleProductState } from "../../data/state";

const fetchProducts = async (page = 1, brand = "", take = 12) => {
  const res = await fetch(
    `http://kezaafrica.herokuapp.com/v1/products/with-images?take=${take}&page=${page}&brand=${brand}`
  );
  return res.json();
};

const Offer = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setProduct] = useRecoilState(singleProductState);
  const [products, setProducts] = useRecoilState(productsState);
  const { status } = useQuery("products", () => fetchProducts(page, brand), {
    keepPreviousData: true,
  });
  const list = products.list;
  const totalCount = products.totalCount;
  const numberOfPages = products.numberOfPages;

  const conveneNumber = Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "NGN",
  }).format;

  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: numberOfPages,
    total: totalCount,
    initialState: { currentPage: 1 },
  });

  useEffect(() => {
    setLoading(true);
    fetchProducts(page, brand)?.then(data => {
      setProducts(data?.data);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, [page, brand]);

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
        value={brand}
        onChange={e => setBrand(e.target.value)}
      >
        <option value="iphone">Iphone</option>
        <option value="tecno">Tecno</option>
        <option value="samsung">Samsung</option>
        <option value="infinix">Infinix</option>
        <option value="redmi">Redmi</option>
        <option value="huawei">Huawei</option>
        <option value="google">Google</option>
        <option value="tecno">Tecno</option>
        <option value="samsung">Samsung</option>
      </Select>

      {(status === "loading" || loading) && (
        <div className="progressbar flex">
          <CircularProgress
            isIndeterminate
            color="red.400"
            size="200px"
            thickness="4px"
            className="progress-bar grid"
          >
            <CircularProgressLabel className="progress-label">
              Loading Data...
            </CircularProgressLabel>
          </CircularProgress>
        </div>
      )}

      {status === "error" && (
        <div className="progressbar flex">
          <h2 className="progress-label">Error Fetching Data...</h2>
        </div>
      )}
      <div className="phone-cards grid">
        {!(status === "error" || status === "loading" || loading) &&
          list?.map((product, index) => {
            const logo = product?.brand?.image;
            const image = product?.meta?.images?.find(
              image => image?.image?.length > 1
            )?.image;
            const name = product?.name;
            const price = product?.meta?.price?.min;
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
                <button
                  onClick={() => {
                    setProduct(product);
                    navigate(`/products/${product?.id}`);
                  }}
                  className="butn"
                >
                  Select
                </button>
              </div>
            );
          })}
      </div>

      <Pagination
        className="paginations grid"
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={page => {
          setCurrentPage(page);
          setPage(page);
        }}
      >
        <PaginationContainer className="pagination grid">
          <PaginationPrevious className="page-nav">Previous</PaginationPrevious>
          <PaginationPageGroup className="page grid">
            {pages.map(page => (
              <PaginationPage
                className={`page-key${currentPage === page ? " active" : ""}`}
                key={`pagination_page_${page}`}
                page={page}
              />
            ))}
          </PaginationPageGroup>
          <PaginationNext className="page-nav2">Next</PaginationNext>
        </PaginationContainer>
      </Pagination>
    </div>
  );
};

export default Offer;
