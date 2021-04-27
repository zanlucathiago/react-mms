import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Items from './views/Items';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
// import { primary } from './design/color';
import Settings from './views/Settings';
import { useContext, useState } from 'react';
import { Context, ContextController } from './context';

function App() {
  // debugger;
  const [state] = useContext(Context);

  // const [, setState] = useState(0);
  return (
    <Router>
      <div
        className="container"
        style={{ minHeight: '100vh', backgroundColor: state.primary }}
      >
        <Header
        // onAdd={() => setShowAddTask(!showAddTask)}
        // showAdd={showAddTask}
        />
        {/* <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}
            </>
          )}
        /> */}
        <Switch>
          <Route path="/settings">
            <Settings
            // reload={() => {
            //   setState(Math.random());
            // }}
            />
          </Route>
          <Route path="/">
            <Items />
          </Route>
        </Switch>
        <BottomNavigation />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
