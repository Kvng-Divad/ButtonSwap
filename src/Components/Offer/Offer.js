import React, { useEffect, useState } from "react";
import "./Offer.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  CircularProgressLabel,
  CircularProgress,
  Select,
} from "@chakra-ui/react";
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
import { useRecoilState } from "recoil";
import { productsState, singleProductState } from "../../data/state";
import noImage from "../../Assets/no-image.png";

const fetchProducts = async (page = 1, brand, take = 12) => {
  const res = await fetch(
    `https://kezaafrica.herokuapp.com/v1/products/with-images?take=${take}&page=${page}&brand=${brand}`
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
    limits: {
      inner: 1,
      outer: 3,
    },
  });

  useEffect(() => {
    setLoading(true);
    fetchProducts(page, brand)?.then((data) => {
      setProducts(data?.data);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, [page, brand]);

  return (
    <div className="Container3 grid">
      <div
        className="hero-icon flex"
        onClick={() => {
          window.history.back();
        }}
      >
        <ChevronLeftIcon className="heroicon" />
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
        onClick={(e) => {
          setBrand(e.target.value);
          setPage(1);
        }}
      >
        <option value="iphone">Iphone</option>
        <option value="tecno">Tecno</option>
        <option value="samsung">Samsung</option>
        <option value="infinix">Infinix</option>
        <option value="redmi">Redmi</option>
        <option value="huawei">Huawei</option>
        <option value="google">Google</option>
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
              (image) => image?.image?.length > 1
            )?.image;
            const name = product?.name;
            const price = product?.meta?.price?.min;
            return (
              <div key={index} className="phone-card grid">
                <div className="phone-logo grid">
                  <img src={logo} alt="icon" />
                </div>

                <div className={`phone-img${!image ? " empty" : ""}`}>
                  <img src={image || noImage} alt={name} />
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
      {/* Style this pagination component  */}
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          setPage(page);
        }}
      >
        <PaginationContainer justifyContent={"center"} className="pagination">
          <PaginationPrevious>Previous</PaginationPrevious>
          <PaginationPageGroup
            alignItems={"center"}
            justifyContent="center"
            className="page"
          >
            {pages.map((page) => (
              <PaginationPage
                className={`page-key${currentPage === page ? " active" : ""}`}
                key={`pagination_page_${page}`}
                page={page}
              />
            ))}
          </PaginationPageGroup>
          <PaginationNext>Next</PaginationNext>
        </PaginationContainer>
      </Pagination>
    </div>
  );
};

export default Offer;
