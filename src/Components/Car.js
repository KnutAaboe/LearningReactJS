import React from "react";

function Car({car}){
    return(
        <>
            <h2>
                I am a {car.brand}: {car.model}.
            </h2>
        </>
    )
}

export default Car