import index from './routes/index';
import websites from './routes/websites';
import badRequest from './routes/badRequest';

export default function(app) {
  app.use('/', index);
  app.use('/websites', websites);
  app.use('*', badRequest);
}
