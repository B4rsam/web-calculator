import ContentSection from "./components/ContentBox/ContentSection"
import BtnSection from "./components/ButtonBox/BtnSection"
import s from './app.module.sass'
import useViewController from "./utils/useViewController"

function App() {
  const {
    displayContent,
    handleEquals,
    handleReset,
    handleDelete,
  } = useViewController()

  return (
    <div className={s.mainBody}>
      <ContentSection displayContent={"0"}/>
      <BtnSection handleEquals={handleEquals}/>
    </div>
  )
}

export default App
