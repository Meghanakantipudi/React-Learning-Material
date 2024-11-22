/* eslint-disable react/prop-types */
 

function Animals({animals}){
    return (
        <div>
            <ol>
                {animals.map((animal) => (
                    <li>{animal}</li>
                ))}
            </ol>
        </div>
    )
}

export default Animals;