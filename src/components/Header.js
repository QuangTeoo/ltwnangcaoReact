function Item(props) {
  return (
    <div>
      <li>
        <a href={props.link}>{props.content}</a>
      </li>
    </div>
  );
}

function Menu({list}) {
    return(
        <ul>
            {list.map((item) => (
                <Item link={item.url} content={item.text} />
            ))}
        </ul>
    )
}
function Header() {
  const list = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
  ];
  return (
    <div>
      <Menu list={list} />
    </div>
  );
}
export { Header };