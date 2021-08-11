import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [query, setQuery] = useState("")
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        (await axios(
          `https://hn.algolia.com/api/v1/search?query=${query}`,
        ).then((res) => { setData(res.data) })
          .catch((err) => { console.log(err) }));
      }
    }
    fetchData();
  }, [query]);


  return (
    <Fragment>
      <div className="container" style={{ marginTop: '50px' }}>
        <input type="text" className="form-control" placeholder="Search" onChange={(e) => setQuery(e.target.value)}>
        </input>

        <div style={{ marginTop: '5px' }}>
          <ui className="list-group list-group-flush"
            style={{
              width: "50%",
              height: "30px",
            }}>

            {query && (data.hits.map(item => (
              item.url ? <li className="list-group-item" key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li> : []
            )))}

          </ui>
        </div>
      </div>
    </Fragment >
  );
}

export default App;
