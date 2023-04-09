import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <div className='App'>
      <h1>Active Language : {i18n.language}</h1>
      <nav>
        <button onClick={() => clickHandle('tr')} style={{ margin: 5 }}>
          Türkçe
        </button>
        <button onClick={() => clickHandle('en')}>English</button>
      </nav>{' '}
      <br />
      <h3>{t('welcome')}</h3>
    </div>
  );
}

export default App;
