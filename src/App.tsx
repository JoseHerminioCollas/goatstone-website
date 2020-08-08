import React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';
import logo from './art/goat-head.svg';

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

function App() {
  return (
    <>
      <header>
        <h1>
          Goatstone <i>Web Development</i>
        </h1>
        <Icon iconName="Mail" className="fluent-icon" />
        <img src={logo} className="logo" alt="logo" />
      </header>
      <article>
        <h3>Contact</h3>
        <p>
          info.5.2020@goatstone.com
          </p>
         <h5>
          Github
          </h5>
        <ul>
          <li>
            <a href="https://github.com/joseherminiocollas" target="new">
              github.com/joseherminiocollas
              </a>
          </li>
          <li>
            <a href="https://github.com/goatstone" target="new">github.com/goatstone</a>
          </li>
        </ul>
      </article>
      <article>
        <h3>Web Development</h3>
        <p>
          Goatstone is primarily but not exclusively, Jose Collas. Here you will find a collection of some of our
          work. Goatstone is involved in web development, primary using the technologies: JavaScipt, CSS, and HTML.
          I have been working with
            &nbsp;
            <a href="https://reactjs.org/" target="new">React </a>
            &nbsp;
            and
            &nbsp;
            <a href="https://d3js.org/" target="new">D3</a>
            &nbsp;
            lately.
        </p>
        <p>
          I have also been working with generating styles with JavaScript, D3 Interpolators, and JSS. I hope to work
          more with this strategy and see what more could be done with it.
        </p>
      </article>
      <article>
        <h3>
          MapLab
          &nbsp;
          <a href="https://map-lab-goatstone.appspot.com" target="new">https://map-lab-goatstone.appspot.com</a>
        </h3>
        <p>
          Experiments with mapping libraries:
          &nbsp;
          <a href="https://cloud.google.com/maps-platform/">
            Google
          </a>,
          &nbsp;
          <a href="https://leafletjs.com/">
          Leaflet
          </a> and
          &nbsp;
          <a href="https://www.bingmapsportal.com/">
          Bing
          </a>
          .
        </p>
      </article>
      <article>
        <h3>
          D3 Framework
          &nbsp;<a href="https://d3-frame.goatstone.com" target="new">https://d3-frame.goatstone.com</a>
        </h3>
        <p>
          <img src="img/d3-frame-1.png" className="right" width="250" height="160" alt="" />
          <img src="img/d3-frame-3.png" className="right" width="250" height="160" alt="" /> D3 and React
            Methodologies for using the D3 visualization library with React. I have been working with React
            ( reactjs.org ) and D3 ( d3js.org ) together, and I am documenting methodologies in a GitHub repository,
        </p>
      </article>
      <article>
        <h3>
          Minhooks
          &nbsp;
          <a href="https://github.com/JoseHerminioCollas/min-hooks" target="new">https://github.com/JoseHerminioCollas/min-hooks</a>
        </h3>
        <p>
          <img src="img/min-hooks.png" alt="" />
            Minhooks is an attempt to represent the React hooks API in a minimal but functional way. Ideally, this will
            provide a resource for future development.
            I have incorporated the work I have done in the Minhooks repository into the D3Frame repository.
        </p>
      </article>
      <article>
        <h3>
          Color Globe
          &nbsp;
          <a href="http://colorglobe.goatstone.com" target="new">http://colorglobe.goatstone.com</a>
        </h3>
        <p>
          <img src="img/globe.png" alt="" />
                Here the theming strategy using JSS and D3 interpolators are creating various themes for a map generated
                with the D3 Geo library.
        </p>
      </article>
      <article>
        <h3>
          Ameb, a game
          &nbsp;
          <a href="http://ameb.goatstone.com/" target="new">http://ameb.goatstone.com/</a>
        </h3>
        <p>
          <img src="img/ameb.png" alt="" />
              Ameb was an entry into the JS13kGames JavaScript competition. Ameb must eat food in order to accumulate
              health points and stay alive.
              The player of Ameb navigates the character, Ameb, to catch food.
        </p>
      </article>
      <article>
        <h3>
          AlphaCronke
          &nbsp;
          <a href="http://alphacronke.goatstone.com" target="new">http://alphacronke.goatstone.com</a>
        </h3>
        <p>
          <img src="img/alpha-cronke3.png" className="right" alt="" />
                 This example uses a great library D3js (d3js.org).
              "AlphaCronke" is the latest work with this library. The
              application consists of text from the story, Dickory Cronke by Daniel Defoe and a widget that enables the
              user to select words by alphabetical range.

              With this widget, the user can highlight the selected words in the text. D3js is the only library used.
        </p>
      </article>
      <footer>
        Goatstone &copy; 2020
    </footer>
    </>
  );
}

export default App;
