import ContentSection from "./components/ContentBox/ContentSection"
import BtnSection from "./components/ButtonBox/BtnSection"
import s from './app.module.sass'

function App() {

  return (
    <div className={s.mainBody}>
      <ContentSection />
      <BtnSection />
    </div>
  )
}

export default App
