
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"

export default function App() {
  let Entries = data.map((d)=>{
    return <Entry 
    key = {d.id}
    e = {d}
    />
  })
  return (
      <>
        <div className="">
          <Header />
          {Entries}
        </div>
      </>
  )
}
