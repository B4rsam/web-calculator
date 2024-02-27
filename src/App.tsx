import ContentSection from "./components/ContentBox/ContentSection"
import BtnSection from "./components/ButtonBox/BtnSection"
import s from './app.module.sass'
import useViewController from "./utils/useViewController"

function App() {
  const {
    display,
    functions,
  } = useViewController()

  return (
    <div className={s.mainBody}>
      <ContentSection displayContent={display}/>
      <BtnSection functions={functions} />
    </div>
  )
}

export default App
