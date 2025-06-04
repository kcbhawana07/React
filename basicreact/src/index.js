function customRender(reactElement,container){
    // const domElement=document.createElement
    // (reactElement.type)
    // domElement.innerHTML=reactElement.chidren
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)


let domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children

for (const prop in reactElement.props) { 
    if(prop==document.getElementById.chidren) continue;
    domElement.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild(domElement)


}





let reactElement={
    type:'a',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    },
    children:'Click me to visit google'
}


let mainContaineer=document.getElementById("root")

customRender(reactElement,mainContaineer)