import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>CustomApp</div>

  );
}


// let ReactElement={
//     type:'a',
//     props:{
//         href:'https://www.google.com/',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }


const anotherUser="React Tutorial"

let anotherElement=(
  <a href='"https://goggle.com' target="_blank">Visit Google</a>
  
)

let ReactElement=React.createElement(
  'a',
  {href:"https://goggle.com"},
  "click me to visit goggle",
  anotherUser,
  anotherElement
)



ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)
export default MyApp