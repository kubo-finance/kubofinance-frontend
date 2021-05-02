import Header from './header.js';
import Dashboard from './dashboard.js';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="container mx-auto w-7/12 font-sans">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
