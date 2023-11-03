import Category from './components/Category';
import Pages from './pages/Pages';
import Search from './components/Search';


function App() {
  return (
    <div className='container'>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
