'use client';

import { useEffect, useState } from "react";

export default function ClientPage(){
    const [data, setData] =useState(null);

    useEffect(() => {
        console.log('CLIENT - onde estou?')
        fetch('https://api.restful-api.dev/objects')
        .then(r => r.json())
        .then(setData);
    }, []);

    return(
        <div>
            <h1>Client Component</h1>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    )
}