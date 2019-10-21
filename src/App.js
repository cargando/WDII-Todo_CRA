import React from 'react';

import Nav from './components/nav';
import Card from './components/card';

function App() {
  return (
    <div className="container">
	    <br />
	    <h1>TODO Application</h1>
      <Nav />
	    <br />
      <div className="row">
		    <div className="col-sm">
			    <Card header="Новая Задача" >
				    какой-то текст
			    </Card>
		    </div>
		    <div className="col-sm">
			    <Card header="Список задач" />
		    </div>
	    </div>

    </div>
  );
}

export default App;
