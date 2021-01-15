import { useState, useContext } from "react";
import GifService from "../../shared/gif-service";
import SearchContext from "../../context/search";

const Search = props => {

  const { history, setHistory } = useContext(SearchContext);

  const [term, setTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [gifs, setGifs] = useState([]);

  const handleChange = e => {
    e.preventDefault();
    setTerm(e.target.value);
  }

  const submit = e => {
    e.preventDefault();

    if(term === ""){
      setGifs([]);
      return;
    }

    setSearching(true);

    GifService.search({ term: term, limit: 3 }).then((result) => {
      setSearching(false);
      setGifs(result);
    });

    setHistory([term, ...history])
  }

  return(
    <>
      <h2>Search</h2>
      <form className="form-inline mb-5" onSubmit={submit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control mr-2"
            onChange={handleChange}
            value={term}
            disabled={searching}
          />
          <button className="btn btn-primary" disabled={searching}>Enviar</button>
        </div>
      </form>

      {
        (gifs.length > 0) &&
        <SearchResults gifs={gifs} />
      }


    </>
  );
}

const SearchResults = props => {
  const { gifs } = props;
  return(
    <>
      <h2>Search results</h2>
      <Row>
        { gifs.map((gif, index) => <GifItem gif={gif} key={index} />) }
      </Row>
    </>
  );
}

const Row = props => {
  return (
    <div className="row">{props.children}</div>
  );
}

const GifItem = props => {
  const { gif } = props;
  return (
    <div className="col-4">
      <img src={gif.images.downsized.url} className="w-100" />
    </div>
  );
}

export default Search;