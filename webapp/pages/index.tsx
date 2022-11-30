import React,{useState} from 'react'

const HomePage = () => {
    const [name, setName] = useState('unknown')

    fetch('http://api.hustlian.com/v1/api/users/me')
        .then((res)=> res.json()).then(data => {
            console.log(data)
            const name = data.name
            setName(data.name)
        }).catch(e => {
            console.log(e)
        })

    return (
        <div>
            <h1>Hi {name}</h1> 
        </div>
    )
}

export default HomePage

