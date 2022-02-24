import React from 'react';
import Cards from './components/Cards';
import bigbang1 from './images/bigbang1.png';
import bigbang2 from './images/bigbang2.jpg';
import sacredgeometry1 from './images/sacredgeometry1.jpg';

function App() {
  return (
    <div>
      <div className="row mt-5">
        <div className="col">
          <h3>Big Bang Theory</h3>
        <Cards imagen={bigbang2}
                titulo= "Big Bang"
                texto= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatem sequi? Eius repudiandae dolorum nihil minima, quod quos quidem suscipit dolores soluta possimus mollitia laboriosam ipsa quam ad dignissimos nemo."></Cards>
        </div>

        <div className="col">
          <h1>Home</h1>
          <Cards imagen={bigbang1}
                titulo= "Big Bang"
                texto= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, natus, eum eveniet ipsum nisi quod rerum, culpa repellendus sunt obcaecati exercitationem est omnis maiores. Corporis rerum illum dolor quibusdam veritatis!"></Cards>
        </div>
        <div className="col">
          <h3>Sacred Geometri</h3>
        <Cards imagen={sacredgeometry1}
                titulo= "Sacred Geometry"
                texto= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sequi tenetur, consequatur magnam doloremque itaque sit in cum maiores quos, obcaecati, optio numquam rerum repellat harum quo facilis laudantium! Quidem!"></Cards>
        </div>
      </div>
    </div>
  );
}

export default App;
