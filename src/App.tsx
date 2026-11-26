import { Button, ButtonLink } from './components/Button';
import { Card } from './components/Card';
import { SectionHeading } from './components/SectionHeading';
import './App.css';

function App() {
  return (
    <>
      <Card>
        <SectionHeading orderNum={1} title="ABOUT ME"></SectionHeading>
        <ButtonLink variant="ghost">ButtonLink</ButtonLink>

        <Button variant="primary">Button</Button>
      </Card>
    </>
  );
}

export default App;
