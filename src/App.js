import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-wrapper">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
