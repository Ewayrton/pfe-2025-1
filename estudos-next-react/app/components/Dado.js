import { useState } from "react"


export default function Dado({valor}){

    let imagens = {
        1:'../../',
        2: '../../'
    }

    return(
        <>
            <img src={imagens[valor]}/>
        </>
    )
}