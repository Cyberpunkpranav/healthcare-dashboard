import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import DashboardOverview from './Dashboard/DashboardOverview/DashboardOverview';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Dashboard/>}>
        <Route path='/' element={<DashboardOverview/>}/>
        </Route>
      </Routes>
  );
}

export default App;
