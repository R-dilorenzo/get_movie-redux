import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import { ThemeProvider } from 'styled-components'
import './App.css';
import {colors} from "./Style/colors"
import storage from 'local-storage-fallback'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Home from './ComponentPage/Home';
import GlobalStyle from "./Style/global"
import light from "./Style/themes/light"
import dark from './Style/themes/dark';
import usePersistenceState from './utils/usePesistenceState';
import axios from "./utils/axios"
import requests from "./utils/requests"
import { ADD_FILMS } from './features/filmsSlice';
import Nav from './Component/Nav';
import InfoFilm from "./ComponentPage/InfoFilm"

function App() {
  const dispatch = useDispatch()

  const [theme, setTheme] = usePersistenceState('theme',dark);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark) 
  }

  useEffect(() => {
    async function fetchData(fetchUrl){
      const request = await axios.get(fetchUrl);
      dispatch(ADD_FILMS({
        film:request.data.results,
      }))

      return request;
    }
    
    fetchData(requests.fetchNetflixOriginals);
    fetchData(requests.fetchActionMovies);
    fetchData(requests.fetchTopRated);
    fetchData(requests.fetchTrending);
    fetchData(requests.fetchComedyMovies);
    fetchData(requests.fetchHorrorMovies);
    fetchData(requests.fetchRomanceMovies);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle />
      <div className="app">
        <Router>
          <Switch>
          <Route path="/infoFilm">
              <Nav theme={theme} toggleTheme={toggleTheme}></Nav>
              <InfoFilm></InfoFilm>
            </Route>
            <Route path="/">
              <Nav theme={theme} toggleTheme={toggleTheme}></Nav>
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
