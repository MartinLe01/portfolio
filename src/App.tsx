import { Button, ButtonLink } from './components/Button';
import { Card } from './components/Card';
import './App.css';

function App() {
  return (
    <>
      <Card>
        <ButtonLink variant="ghost">ButtonLink</ButtonLink>

        <Button variant="primary">Button</Button>
      </Card>
    </>
  );
}

export default App;
