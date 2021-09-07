import React from "react";
import Car from "./Car";

function CarList() {
    const cars = [
        {
            id: 1,
            brand: "Audi",
            model: "R6",
        },
        {
            id: 2,
            brand: "Porsche",
            model: "911",
        }
    ]

    const carList = cars.map(car => <Car key={car.id} car={car}/>)
    return <>{carList}</>
}

export default CarList