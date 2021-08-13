
import Player from './Player';
import tracks from './tracks';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">     
            <Route exact  path="/">
                  <h1>Music App</h1>
                  <Player tracks={tracks}/>
            </Route>
       </div>
    </BrowserRouter>
  );
}

export default App;
