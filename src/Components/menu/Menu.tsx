import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";
function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="menu_item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="list_item" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="menu_itemTitle">{listItem.title}</span>
            </Link>
          ))}

        </div>
      ))}
    </div>
  );
}

export default Menu;
