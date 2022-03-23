import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [instruction, setInstruction] = useState("");
  const [Cheesepizza, setCheesepizza] = useState("");
  const [madpizza, setmadpizza] = useState("");

  const handler = () => {
    const order = `<h2>Order for ${quantity} ${size} pizza(s) that are ${
      Cheesepizza ? `not cheese` : `have cheese`
    }
    and
    ${madpizza ? `not mad cheese` : `have mad cheese`}  for ${name}</h2>
                <h2>Instructions: ${instruction}</h2>`;
    document.getElementById("root").innerHTML = order;
  };

  return (
    <form onSubmit={handler}>
       <h1>Welcome To</h1>
      <h2> I &#128151; PIZZA </h2>
      <img
        width="200px"
        src="https://image.shutterstock.com/image-photo/large-pizza-on-wooden-table-260nw-278281460.jpg"
      />
      <h4> YOUR ORDERS </h4>
      <div>
        <label>
          Name:&nbsp;: &nbsp;
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        
      </div>
      <br></br>
      <div>
        <label>
          Size:&nbsp;: &nbsp;
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
            <option>extra large</option>
          </select>
        </label>
      </div>
      <br></br>
      <div>
        <label>
          Cheese pizza:&nbsp;: &nbsp;
          <input
            type="checkbox"
            value={Cheesepizza}
            onChange={(e) => setCheesepizza(e.target.value)}
          />
        </label>
      </div>
      <br></br>
      <div>
        <label>
          Mad pizza:&nbsp;: &nbsp;
          <input
            type="checkbox"
            value={madpizza}
            onChange={(e) => setmadpizza(e.target.value)}
          />
        </label>
      </div>
      <br></br>
      <div id="quantity">
        <label>
          Quantity:&nbsp;: &nbsp;
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>
      <br></br>
      <div>
        <p>Addtitional Instructions</p>
        <textarea
          name="message"
          id="message"
          class="box message"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
        ></textarea>
      </div>
      <br></br>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}