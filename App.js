import Day from './Day';
import Daylist from './Daylist';
import Header from './Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EmptyPage from './EmptyPage';
import CreateWord from './CreateWord';
import CreateDay from './CreateDay';
function App() {

  return (
      <BrowserRouter>
      <div className='App'>
     <Header/>
     <Switch>
      <Route exact path="/">
      <Daylist/>
      </Route>
      <Route path="/day/:day">
        
         <Day/>
         </Route>
         <Route path="/create_word">
         <CreateWord/>
         </Route>
         <Route path="/plus_day">
          <CreateDay/>
         </Route>
      <Route>
        <EmptyPage/>
      </Route>
      </Switch>
     </div>  
    </BrowserRouter>
  );
}

export default App;
