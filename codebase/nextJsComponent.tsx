export const nextJsComponent = `import Script from 'next/script';

const data = {...} // описуємо об'єкт зі структурованими даними

type DataProps = {
  data: {
    [key: string]: any,
  }
};
const StructuredData = ({ data }: DataProps) => (
  <Script
    strategy='beforeInteractive' // вставляємо скрипт в <head>
    type='application/ld+json' // вказуємо тип структурованих даних
    // вставляємо об'єкт зі структурованими даними
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);`;
