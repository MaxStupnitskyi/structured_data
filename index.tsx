import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Deck,
  DefaultTemplate,
  Slide,
  FlexBox,
  Heading,
  CodePane,
  Image,
  OrderedList,
  ListItem,
  Appear,
  Grid,
  Box,
  Text,
  Link,
} from 'spectacle';
import { recipe } from './codebase/recipe';
import { nextJsComponent } from './codebase/nextJsComponent.tsx';
import recipeImage from './media/recipe02.png';
import outroImage from './media/outro.png';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

const theme = {
  primary: '#fff',
  secondary: '#2d2d2d',
  tertiary: '#03A9FC',
  quartenary: '#CECECE',
};

const Presentation = () => (
  <Deck template={() => <DefaultTemplate />}>

    <Slide backgroundColor={theme.secondary}>
      <FlexBox height="100%">
        <Heading fontSize={'h1'} color={theme.tertiary}>
          Structured Data
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading fontSize={'h2'} color={theme.tertiary}>
        Що таке структуровані дані?
      </Heading>
      <FlexBox height={'100%'}>
        <Appear>
          <Text textAlign="center">
            Додаткові дані, які допомагають пошуковим системам краще розуміти контекст сторінки.
          </Text>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading fontSize={'h3'} color={theme.tertiary}>
        Формати
      </Heading>
      <FlexBox>
        <OrderedList>
          <Appear>
            <Grid gridTemplateColumns={'40% 60%'}>
              <ListItem>JSON-LD (Рекомендовано)</ListItem>
              <CodePane language="html" theme={tomorrow}>
                {`
<script type="application/ld+json">
  {"@context": "https://schema.org/",
    "@type": "Article",
    ...}
</script>`}
              </CodePane>
            </Grid>
          </Appear>
          <Box height={20} />
          <Appear>
            <Grid gridTemplateColumns={'40% 60%'}>
              <ListItem>Microdata</ListItem>
              <CodePane language="html" theme={tomorrow}>
                {`<p itemscope itemtype="http://schema.org/Person">
  <span itemprop="name">John Doe</span> is his name.
</p>`}
              </CodePane>
            </Grid>
          </Appear>
          <Box height={20} />
          <Appear>
            <Grid gridTemplateColumns={'40% 60%'}>
              <ListItem>RDFa</ListItem>
              <CodePane language="html" theme={tomorrow}>
                {`<p typeof="schema:Person">
  <span property="schema:name">John Doe</span> is his name.
</p>`}
              </CodePane>
            </Grid>
          </Appear>
        </OrderedList>
      </FlexBox>
    </Slide>

    <Slide>
      <CodePane language="html" theme={tomorrow} highlightRanges={[1, 3, 4, [5, 26]]}>
        {recipe}
      </CodePane>
    </Slide>

    <Slide backgroundColor={theme.secondary}>
      <FlexBox height="100%">
        <Heading color={theme.tertiary}>Результат ➡️</Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Image height="90%" src={recipeImage} />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading fontSize={'h3'} color={theme.tertiary}>
        React component (example with Next.JS)
      </Heading>
      <FlexBox height="100%">
        <CodePane language="tsx" theme={tomorrow} highlightRanges={[3, 12, 13, [14, 15]]}>
          {nextJsComponent}
        </CodePane>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Приклади різних типів структурованих даних</Heading>
      <FlexBox height={'100%'}>
        <Link
          target="_blank"
          href="https://developers.google.com/search/docs/appearance/structured-data/search-gallery"
        >
          за посиланням
        </Link>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Docs</Heading>
      <FlexBox height={'100%'}>
        <Link
          target="_blank"
          href="https://schema.org/"
        >
          https://schema.org/
        </Link>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Image height="90%" src={outroImage} />
      </FlexBox>
    </Slide>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);
