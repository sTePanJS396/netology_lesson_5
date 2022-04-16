import './App.css';
import React from 'react';
import Collapse from './components/Collapse';
import Paragraph from './components/Paragraph';

function App() {
  const [active, setActive] = React.useState(false);

  function handleChangeCollapse() {
    setActive(!active)
  }

  return (
    <div className="container">
      <Collapse collapseLabel='Открыть' expandedLabel='Закрыть' isExpanded={active} onExpandedChange={handleChangeCollapse}>
        <Paragraph>
          Не следует, однако забывать, что реализация намеченных плановых заданий влечет за собой процесс внедрения 
          и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом постоянное 
          информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание новых предложений.
        </Paragraph>
      </Collapse>
    </div>
  );
}

export default App;
