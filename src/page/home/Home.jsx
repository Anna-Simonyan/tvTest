import HomeItems from "components/homeItems";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilms } from "store/selector";
import { tvThunk } from "store/slice/thunk";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectFilms);
 

  const filmItem = () => items?.slice();

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
       
      </div>
    </div>
  );
};

export default Home;
