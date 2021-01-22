import React, { useRef, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import { selectFilms } from "../features/filmsSlice";
import { useSelector } from "react-redux";
import { StyledAutocomplete } from "../Style/StyledNav";
import { useHistory } from "react-router-dom";

function NavAutocomplete() {
  const films = useSelector(selectFilms);
  const [search, setSearch] = useState("");
  const history = useHistory();

  let autoC = useRef(null);

  const onSearchChange = (event, values) => {
    event.preventDefault();

    setSearch(values);
  };

  const CercaFilm = () => {
    console.log("search", search);
    if (search != null) {
      let boolHistory = false;
      let movieSearched = [];
      // itero su ogni elemento dell array
      for (let i = 0; i < films.length; i++) {
        if (films[i].title == search || films[i].name == search) {
          // se elemento è stato trovato => films[i]
          boolHistory = true;
          movieSearched = films[i];
        }
      }
      if (boolHistory) {
        history.push({
          pathname: "/infoFilm",
          state: { movie: movieSearched },
        });
      } else {
        alert(
          "Film non presente! \nControlla il titolo o seleziona dalla lista"
        );
      }
    }
  };

  return (
    <StyledAutocomplete search={search}>
      <Autocomplete
        /**
         *  If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
         *  permette di utilizzare un input dell utente che non ha selezionato il film dalla lista
         */
        freeSolo
        ref={(el) => {
          autoC = el;
        }}
        id="autoComplete"
        options={films.map((option) => option.title || option.name)}
        /**ogni volta che si ha una modifica dell input (type utente o click dalla lista) */
        onChange={onSearchChange}
        onInputChange={onSearchChange}
        renderInput={(params) => (
          <div className="nav__params" ref={params.InputProps.ref}>
            <input
              className="nav__searchInput2"
              type="text"
              {...params.inputProps}
              placeholder="Inizia a digitare..."
            />
          </div>
        )}
      />
      <SearchIcon onClick={CercaFilm} className="nav__button" />
    </StyledAutocomplete>
  );
}

export default NavAutocomplete;
