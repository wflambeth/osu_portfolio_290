import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>App Name</h1>
          <p>App description</p>
        </header>
        <Navigation />
        <main>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add">
            <CreateExercisePage />
          </Route>
          <Route path="/edit">
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
        </main>
        <footer>
          <p className="footer-item">&copy; 2022 Will Lambeth</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
