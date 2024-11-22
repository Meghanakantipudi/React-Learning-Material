// function Hello(props) {
//     let message = "Hello from Hello component";
//     function sayHello() {
//         return "Hello from sayHello function";
//     }
//   return (
//     <>
//         <h1>{message} {10+20}</h1>
//         <h2>{sayHello()}</h2>
//         <h1>{props.message1}</h1>
//     </>
//   )
// }

// function Hello({name, seatNumbers}) { // Destrcuturing props
//   return (
//     <>
//         <h1>Hello {name} {seatNumbers}</h1>
//     </>
//   )
// }

function Hello({person}){
    return(
        <>
            <h1>Hello {person.name}! This my phone number {person.phone}</h1>
            <h2>Seat NUmbers {person.seats}</h2>
        </>
    )
}

export default Hello;