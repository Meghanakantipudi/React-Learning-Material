import Fruit from "./fruit";
function Fruits() {
    let fruits = [{
        id: 1,
        name: "Apple",
        price: 100
    },
    {
        id: 2,
        name: "Mango",
        price: 200
    },
    {
        id: 3,
        name: "watermelo",
        price: 400
    }];
  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
            <Fruit fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}

export default Fruits;