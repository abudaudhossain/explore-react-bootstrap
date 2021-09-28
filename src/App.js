import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import { Row, Spinner } from 'react-bootstrap';
import './App.css';
import Cart from './components/Cart/Cart';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-09-28&sortBy=popularity&apiKey=95be2f0da77f4338af50986aab2d62d8').then(res => res.json()).then(data => setNews(data.articles));
  },[])

  return (
    <Row xs={1} md={4} className="g-4">
      {
        news.length === 0 ? <Spinner className = "center" animation="border" />:
        
          news.map(nw => <Cart news = {nw}></Cart>)
        
      }
     
    </Row>
  );
}

export default App;
