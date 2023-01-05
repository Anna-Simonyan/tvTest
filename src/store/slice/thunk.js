import { createAsyncThunk } from "@reduxjs/toolkit";
import { getShows, getShowsFilm } from "service/filmsApi";

export const tvThunk = createAsyncThunk("tvThunk", async () => {
  return getShows()
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
});

export const tvInfoThunk = createAsyncThunk("tvInfoThunk", async (data) => {
  return getShowsFilm(data)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
});
