import serve from 'micro-core';
import api from './lib';

serve(api).listen(3000, (err) => {
  if (err) throw err;
  console.log('Listening on *:3000'); 
});
