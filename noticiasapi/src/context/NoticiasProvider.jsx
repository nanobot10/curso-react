import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([])
  const [page, setPage] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultarApi = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const {data} = await axios(url);
        setNoticias(data.articles);
        setTotalNoticias(data.totalResults)
        setPage(1)
    }
    consultarApi()
  }, [categoria])

  useEffect(() => {
    const consultarApi = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const {data} = await axios(url);
        setNoticias(data.articles);
        setTotalNoticias(data.totalResults)
    }
    consultarApi()
  }, [categoria,page])
  

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e, valor) => {
    setPage(valor);
  }

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        page
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
