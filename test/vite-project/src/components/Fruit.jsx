function Fruit({ fruit }) {
  return (
    fruit.price <= 200 ? <li key={fruit.id}>{fruit.name} - {fruit.price}</li> : null
  )
}

export default Fruit;