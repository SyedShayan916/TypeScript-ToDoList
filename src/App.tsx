import { TodoList } from "./TodoList"

function App() {
const container: React.CSSProperties = {
  display:'flex',
  justifyContent: 'center',
  paddingTop: '10%'
}

  return (
    <>
    <div className="app" style={container}>
       <TodoList />
    </div>

    </>
  )
}

export default App
