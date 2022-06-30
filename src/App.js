import { createElement, StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sec from './Sec';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
      <Sec />
    </StrictMode>
  );
};

// const App = () => {
//   return createElement('div', {}, [
//     createElement('h1', { attr: 'pippo' }, 'Adopt ME'),
//     createElement(Pet, {
//       name: 'luna',
//       animal: 'dog',
//       breed: 'black',
//     }),
//     createElement(Pet, {
//       name: 'pepper',
//       animal: 'cat',
//       breed: 'yellow',
//     }),
//     createElement(Pet, {
//       name: 'eddy',
//       animal: 'wolf',
//       breed: 'mexican',
//     }),
//   ]);
// };

// React non renderizza niente, ha bisogno di qualcosa che renderizzi App e ci sono varie possibilità, per il browser, c'è ReactDOM
// render(createElement(App), document.getElementById('root'));

render(<App />, document.getElementById('root'));
