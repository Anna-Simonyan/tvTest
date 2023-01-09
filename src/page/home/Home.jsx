import HomeItems from "components/homeItems";
import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectFilms } from "store/selector";
import { tvThunk } from "store/slice/thunk";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectFilms);
  const [currentPage, setCurrentPage] = useState(0);
  const [next, setNext] = useState(18);

  const nextFilms = (page) => {
    setCurrentPage(page === 1 ? 0 : (page - 1) * 18);
    setNext(page * 18);
  };
 
  const filmItem = () => items?.slice(currentPage,next); 
  useEffect(() => {
    dispatch(tvThunk());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__h3">
          <h3>Last Added Shows</h3>
        </div>
        <div className="home__content">
          <HomeItems filmItem={filmItem} />
        </div>
        <div className="home__pagination">
          <Pagination count={Math.ceil(items?.length / 18)} onChange={(_, page) => nextFilms(page)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
