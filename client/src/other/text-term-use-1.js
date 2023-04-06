import { useTranslation } from 'react-i18next';

export default () => {
    const [ t, i18n ] = useTranslation('term-use');
    return [
    {
        head: t('info2.text1.head'),
        body: t('info2.text1.body'),
    },
    {
        head: t('info2.text2.head'),
        body: t('info2.text2.body'),
    },
    {
        head: t('info2.text3.head'),
        body: t('info2.text3.body'),
    },
  ];
}