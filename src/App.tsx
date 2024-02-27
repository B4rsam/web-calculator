import ContentSection from "./components/ContentBox/ContentSection"
import BtnSection from "./components/ButtonBox/BtnSection"
import s from './app.module.sass'
import useViewController from "./utils/useViewController"

function App() {
  const {
    display,
    functions,
    handleNumInput,
  } = useViewController()

  return (
    <div className={s.mainBody}>
      <ContentSection displayContent={display}/>
      <BtnSection functions={functions} handleNumInput={handleNumInput} />
    </div>
  )
}

export default App
