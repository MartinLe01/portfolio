import { Button, ButtonLink } from './components/Button';
import { Card } from './components/Card';
import { SectionHeading } from './components/SectionHeading';
import { Tag } from './components/Tag';
import './App.css';

function App() {
  return (
    <>
      <Card>
        <SectionHeading orderNum={1} title="ABOUT ME"></SectionHeading>
        <ButtonLink variant="ghost">ButtonLink</ButtonLink>

        <Button variant="primary">Button</Button>
        <Tag type="green">Open to work</Tag>
        <Tag type="coral">Open to work</Tag>
        <Tag type="default">Open to work</Tag>
      </Card>
    </>
  );
}

export default App;
