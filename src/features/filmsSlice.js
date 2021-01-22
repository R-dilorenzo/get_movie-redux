import { createSlice } from "@reduxjs/toolkit";

export const filmsSlice = createSlice({
  name: "films",
  initialState: {
    films: [],
    firstLoad: true,
  },
  reducers: {
    ADD_FILMS: (state, action) => {
      let arrayFilms = [...state.films];
      //a tutto ciò che era state concateno la nuova lista di film recuperato attraverso fetch
      let newArray = arrayFilms.concat(action.payload.film);

      //elimino i duplicati presenti nell array
      // dichiaro un nuovo array che conterrà tutti i film senza duplicati
      let newArrayUnique = [];

      let uniqueObject = {};

      // per ogni elemento nell array con ripetizioni
      for (let i in newArray) {
        // estraggo in titolo o il nome a seconda se è un film o serie tv
        let objTitle = newArray[i]["title"] || newArray[i]["name"];
        // recupero indice nell array
        uniqueObject[objTitle] = newArray[i];
      }
      // ciclo e insrisco gli oggetti senza ripetizioni nell array creato
      for (let i in uniqueObject) {
        newArrayUnique.push(uniqueObject[i]);
      }
      // ottengo array senza ripetizioni => newArrayUnique
      state.films = newArrayUnique;
    },
    CHANGE_LOAD: (state) => {
      state.firstLoad = false;
    },
  },
});

export const { ADD_FILMS, CHANGE_LOAD } = filmsSlice.actions;

export const selectFilms = (state) => state.films.films;
export const selectFirstLoad = (state) => state.films.firstLoad;

export default filmsSlice.reducer;
