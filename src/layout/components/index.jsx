import Rating from "@mui/material/Rating";

import { NavLink, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFilms } from "store/selector";



const Header = () => {
  const { pathname, state } = useLocation();
  const { filmItems } = useSelector(selectFilms);
  const { id } = useParams();

  return (
    <div className="header">
      <div className="header__container">
        <NavLink to="/">
          <h1 className="header__home-h1">TV Bland</h1>
        </NavLink>
        {pathname !== `/info/${id}` ? (
          <>
            <div className="header__home-texts">
              <p className="header__home-text1">TV Show and web series database.</p>
              <p className="header__home-text2">Create personalised schedules.</p>
              <p className="header__home-text3">Episode guide,cast,crew and character information.</p>
            </div>
          </>
        ) : (
          <div className="header__content">
            <div className="header__left">
              <div className="header__left-img">
                <img src={filmItems.image?.original} alt="film" />
              </div>
            </div>
            <div className="header__rigth">
              
            <div> <Rating name="size-small" defaultValue={state?.rating} max={5} /></div> 
             <div>{filmItems?.show?.rating?.average}</div>
              <h3 className="header__rigth-h3">{filmItems?.name}</h3>
              <p className="header__rigth-text">{filmItems.summary}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;