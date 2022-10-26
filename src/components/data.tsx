

export function Data(){
    const dataOptions = [
        {
            name: "Joffrey",
            family: "Baratheon",
            age: 20,
            weapons: "",
            service: "",
            hability: 1,
        },
        {
            name: "Jaime",
            family: "Lanister",
            age: 30,
            weapons: "Axe",
            hability: 10,
        },
        {
            name: "Daenerys",
            family: "Targaryen",
            age: 16,
            weapons: "Axe",
            hability: 10,
        },
        {
            name: "Tyrion",
            family: "Lannister",
            age: 35,
            weapons: "",
            service: "John Snow",
            hability: 0,
        },
        {
            name: "Bronn",
            family: "",
            age: 25,
            weapons: "",
            service: `Jaime`,
            hability: 10,
        },
    ];
    return(
        <>
        <div>
            {dataOptions.map((item)=> (
                <><h2 key={item.name}></h2><li key={item.age}>
                    
                </li></>
            ))}

        </div>
        
        
        </>
    )
}


