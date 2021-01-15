import { useContext } from "react";
import SearchContext from "../../context/search";

const Home = props => {

  const { history } = useContext(SearchContext);

  return(
    <>
      <h2>Home</h2>
      <p>Histórico de búsquedas</p>
      {
        history.length > 0 ?
          <History /> :
          <HistoryEmpty />
      }
    </>
  );
}

const HistoryEmpty = props => {
  return(
    <p>No hay búsquedas recientes</p>
  )
}

const History = props => {
  const { history } = useContext(SearchContext);
  return(
    <ul>
    {
      history.map((term, index) => <li key={index}>{term}</li>)
    }
    </ul>
  );
}

export default Home;