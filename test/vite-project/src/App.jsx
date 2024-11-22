import Form from "./components/Form";
function App() {

  // let seatNumbers = [1,2,3,4,5,6,7,8,9,10];
  // return (
  //   <>
  //     <h1>Hello Vite + React!</h1>
  //     <Hello name= "Adam" seatNumbers = {seatNumbers}/>
  //     <Hello name= "Jhon" seatNumbers = {seatNumbers}/>
  //     <Hello name= "Jame" seatNumbers = {seatNumbers}/> 
  //     <Bye />
  //   </>
  // )

// Output:
// Hello Vite + React!
// Hello Adam 12345678910
// Hello Jhon 12345678910
// Hello Jame 12345678910
// Bye from Bye Component

  // let person = {
  //   name: "Adam",
  //   phone: 12345678910,
  //   seats : [1,9,10]
  // }
  // return (<>
  //   <Hello person = {person}/>
  //   <Bye />
  //   <Animals animals = {["cat", "dog", "elephant", "lion"]}/>
  //   <Fruits />
  // </>);
  return (
    // <Message />
    // <Calc/>
    <Form/>
  )
}

export default App
