import { Header, Feed } from './components/index';

function App() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
