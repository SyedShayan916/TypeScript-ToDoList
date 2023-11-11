 import { useState } from "react";
 import { Card, Input, Space } from 'antd';
 import { Button,} from 'antd';

interface Items{
    id:number,
    text:string,
    completed:boolean
}
const list: React.CSSProperties = {
    listStyleType: 'none'
  }

 export const TodoList = () => {
    const [state,setState] = useState<Items[]>([


    ])
 
    const [input,setInput] = useState<string>("");


    function handleToggle(id: number): void {
         setState(
            state.map((item)=>{
                if(item.id === id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
         )
     }

     const handleClick = () => {
        if (input !== "") {
          const newTodo: Items = { id: Date.now(), text: input, completed: false };
          setState([...state, newTodo]);
          setInput("")
        }
      }
     const handleDelete = () => {
        const updatedState = state.filter((item) => !item.completed);
        setState(updatedState);
      };

    return(
        <>

        <Card title="To Do List"  style={{ width: 300}}>
        <Space.Compact style={{ width: '100%' }}>
          <Input
            type="text"
            placeholder="Add item"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <Button type="primary" onClick={handleClick}>
            Add
          </Button>
        </Space.Compact>
            <ul>
                {state.map((item) => (
                    <li 
                    key = {item.id} 
                    onClick ={() => handleToggle(item.id)} 
                    style={
                        {
                            backgroundColor: item.completed ? "green": '#1677ff',
                    listStyleType: 'none',
                    marginTop:'10px',
                    marginLeft:'-40px',
                    paddingLeft:'10px',
                    paddingTop:'5px',
                    paddingBottom:'5px',
                    borderRadius:'7px',
                    color:'white'
                        }
                    }

                    >
                    {item.text}</li>
                ))}
            </ul>
            <Button type="primary" onClick={handleDelete}>
                 Remove
            </Button>

        </Card>
        </>    
    )
 }