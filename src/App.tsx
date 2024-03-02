import ContentSection from "./components/ContentBox/ContentSection"
import BtnSection from "./components/ButtonBox/BtnSection"
import s from './app.module.sass'
import './theme.sass'
import useViewController from "./utils/useViewController"

function App() {
  const {
    display,
    functions,
    theme,
    themeChange,
    handleNumInput,
    handleOperation,
  } = useViewController()

  return (
    <div className={`mainBackground ${theme}`}>
      <div className={`${s.mainBody}`}>
        <ContentSection displayContent={display} themeChange={themeChange}/>
        <BtnSection functions={functions} handleNumInput={handleNumInput} handleOperation={handleOperation}/>
      </div>  
    </div>
    
  )
}

export default App
