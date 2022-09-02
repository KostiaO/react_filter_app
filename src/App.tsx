import './normalize.scss';

import { Header } from './components/Header';

import { CardCatalog } from './components/CardCatalog';
import { SideBar } from './components/SideBar/SideBar';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <CardCatalog />
        <SideBar />
      </main>
    </div>
  );
}

