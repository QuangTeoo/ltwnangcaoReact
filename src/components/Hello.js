function Hello() {
  const person = {
    name: "Peter",
    theme: {
      backgroundColor: "green",
      color: "white",
    },
  };
  return (
    <div>
      <div style={person.theme}>
        <h1>Xin chào:{person.name}</h1>
      </div>
      <div>Chúc bạn thành công </div>
    </div>
  );
}
function HelloPerson(props) {
  return (
    <div>
      <h1>Xin chào: {props.name} </h1>
    </div>
  );
}
function HelloQTeo() {
    const hiAll = () =>{
        alert("Hello everyone")
    }
    const hiYou = (name) => {
        alert("Hello you " + name)
    }
  return (
    <div>
      <span>
        <button onClick={hiAll} style={{marginRight :"10px"}}>Hi All</button>
        <button onClick={()=>hiYou("Quang Tèo")}>Hi You</button>
      </span>
    </div>
  );
}
export { Hello, HelloPerson, HelloQTeo };
