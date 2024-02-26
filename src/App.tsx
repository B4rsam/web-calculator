import ContentSection from "./components/ContentBox/ContentSection"
import BtnSection from "./components/ButtonBox/BtnSection"
import s from './app.module.sass'
import useViewController from "./utils/useViewController"

function App() {
  const {
    display,
    handleEquals,
    handleReset,
    handleDelete,
    handleNumInput,
  } = useViewController()

  return (
    <div className={s.mainBody}>
      <ContentSection displayContent={display}/>
      <BtnSection handleEquals={handleEquals} handleReset={handleReset} handleDelete={handleDelete} handleNumInput={handleNumInput}/>
    </div>
  )
}

export default App
