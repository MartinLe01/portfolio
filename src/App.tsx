import { Button, ButtonLink } from './components/Button';
import { Card } from './components/Card';
import { SectionHeading } from './components/SectionHeading';
import { Tag } from './components/Tag';
import { Badge } from './components/Badge';
import GitHubLogo from './assets/GitHub_logo_inverted.svg';
import './App.css';

function App() {
  return (
    <>
      <Card>
        <SectionHeading orderNum={1} title="ABOUT ME"></SectionHeading>

        <div className="flex gap-4 items-center flex-wrap">
          <ButtonLink variant="ghost">ButtonLink Ghost</ButtonLink>
          <ButtonLink variant="icon">
            <img src={GitHubLogo} alt="GitHub icon" className="w-10 md:w-12" />
          </ButtonLink>
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
        </div>
      </Card>
    </>
  );
}

export default App;
