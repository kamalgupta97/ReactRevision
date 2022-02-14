import React, { useEffect, useState } from 'react';
export const GameInput = () => {
    const [name, setname] = useState("")
    const [author, setauthor] = useState("")
    const [tags, settags] = useState("")
    const [price, setprice] = useState("")
    const [isforkid, setisforkid] = useState(false)
    const [decsription, setdecsription] = useState("")
    const [rating, setrating] = useState(5)

    useEffect(() => {

    }, [])

    const handleSUbmit = (e) => {
        e.preventDefault()
        const payload = {
            gamename: name,
            gameauthor: author,
            gameprice: price,
            gametags: tags,
            forkids: isforkid,
            gamedesc: decsription,
            gamerating: rating,

        }
        console.log(payload);
        fetch("http://localhost:3001/games", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(payload)
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => err);

        setname("")
        setauthor("")
        settags("")
        setprice("")
        setisforkid("")
        setdecsription("")
        setrating("")
    }


    return <form id="addgame" onSubmit={handleSUbmit}>
        <input type="text" placeholder='Game Name' name="gamename" value={name} onChange={(e) => setname(e.target.value)} />
        <input type="text" placeholder='Game Author' name="gameauthor" value={author} onChange={(e) => setauthor(e.target.value)} />
        <input type="text" placeholder='Game Tags' name="gametags" value={tags} onChange={(e) => settags(e.target.value)} />
        <input type="text" placeholder='Game Price' name="gameprice" value={price} onChange={(e) => setprice(e.target.value)} />
        <input type="checkbox" name="forkids" isforkid={isforkid} onChange={(e) => setisforkid(!isforkid)} />
        <textarea name="" id="" cols="30" rows="10" name="gamedesc" placeholder='Game Desciption' value={decsription} onChange={(e) => setdecsription(e.target.value)}></textarea>
        <select name="gamerating" id="" value={rating} onChange={(e) => setrating(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <input type="submit" value="Add" />

    </form>;
};
