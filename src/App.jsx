import React from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './containers/itemListContainer/itemListContainer';

const App = () => {
  return <div>
      <Navbar/>
      <ItemListContainer greeting='Gracias por confiar en nosotros!'/>
    </div>;
  
};

export default App