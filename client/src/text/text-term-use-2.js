import { useTranslation } from 'react-i18next';

export default () => {
  const [ t, i18n ] = useTranslation('term-use');
  return [
    {
      head: t('info1.text1.head'),
      body: t('info1.text1.body'),
    },
    {
      head: t('info1.text2.head'),
      body: t('info1.text2.body'),
    },
    {
      head: t('info1.text3.head'),
      body: t('info1.text3.body'),
    },
  ];
};
