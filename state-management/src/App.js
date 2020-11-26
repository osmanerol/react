import React from 'react';
import { observer } from 'mobx-react-lite';
import store from './store';

const App = observer(() => {
  return (
      <div>
        {
          store.name
        }
        <button onClick={()=>store.setName()}>change name</button>
      </div>
    );
  }
)

export default App;