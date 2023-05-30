import './App.css';
import {Routes, Route} from "react-router-dom"
import NavBar from '../../components/NavBar/NavBar';
import NetflixReposPage from '../NetflixReposPage/NetflixReposPage';

export default function App() {
  return (
    <main className="App">
      <NavBar />
      <Routes>
        <Route path="/netflixrepos" element={<NetflixReposPage/>}></Route>
      </Routes>
    </main>
  );
}
