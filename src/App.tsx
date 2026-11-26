import { Button, ButtonLink } from './components/Button';
import { Card } from './components/Card';
import { SectionHeading } from './components/SectionHeading';
import { Tag } from './components/Tag';
import { Badge } from './components/Badge';
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

        <Badge
          title="HTML"
          badgeStyles="border-[#E34F26] bg-[#E88874] text-ink"
          altText="HTML logo"
          imgSource="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        />
      </Card>
    </>
  );
}

export default App;
