import Router from './Router';
import Route from './Route';

import Root from './Root';
import About from './About';

export default function App() {
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}
