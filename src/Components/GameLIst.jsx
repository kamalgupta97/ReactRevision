import React, { useEffect, useState } from 'react';

export const GameLIst = () => {
    const [games, setGames] = React.useState([])
    const [isError, setisError] = React.useState(false)
    const [isLoading, setisLoading] = React.useState(true)
    const [onMountGames, setonMountGames] = React.useState([])
    const [isvisited, setisvisited] = React.useState(false)

    const getData = (url) => {
        setisLoading(true)
        fetch(url).then((res) => res.json()).then((res) => {
            setGames(res)
            setonMountGames(res)
            setisLoading(false)
        }).catch(err => {
            setisError(true)
            setisLoading(false)
            console.log(err);
        })
    }

    useEffect(() => {
        getData('http://localhost:3001/games?_sort=gamename&_order=asc')

    }, [])
    useEffect(() => {
        fetch('http://localhost:3001/games').then((res) => res.json()).then((res) => {
            setisLoading(false)

            res = res.sort((a, b) => b.gamename < a.gamename ? -1 : 1)
            setGames(res)
            setonMountGames(res)
            console.log(res);
        }).catch(err => {
            setisError(true)
            setisLoading(false)
            console.log(err);
        })

    }, [isvisited])
    const [ascprice, setascprice] = useState(true)
    const [ascName, setascName] = useState(true)
    const [ascRating, setascRating] = useState(true)
    const handleSortByPrice = () => {
        if (ascprice) {
            getData('http://localhost:3001/games?_sort=gameprice&_order=asc')

        }
        else {
            getData('http://localhost:3001/games?_sort=gameprice&_order=desc')


        }
        setascprice(!ascprice)
    }
    const handleSortByName = () => {
        if (ascName) {
            getData('http://localhost:3001/games?_sort=gamename&_order=asc')


        }
        else {
            getData('http://localhost:3001/games?_sort=gamename&_order=desc')


        }
        setascName(!ascName)
    }
    const handleSortByRating = () => {
        if (ascRating) {
            getData('http://localhost:3001/games?_sort=gamerating&_order=asc')

        }
        else {
            getData('http://localhost:3001/games?_sort=gamerating&_order=desc')

        }
        setascRating(!ascRating)
    }
    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value)

        if (search !== "") {

            let updatedgames = games.filter(item => item.gamename.toLowerCase().startsWith(search.toLowerCase()))
            setGames(updatedgames)

        }
        else {

            setGames(onMountGames)
        }

    }





    return !isLoading && !isError && (<div id="dev">
        <input type="text" id="searchbox" placeholder='Search' value={search} onChange={handleSearch} />

        <table id="table">
            <thead>
                <tr>
                    <td>Name<button onClick={() => handleSortByName()}>Sort</button></td>
                    <td>Author</td>
                    <td>Tags</td>
                    <td className='gameprice'>Price<button id="sortbyprice" onClick={() => handleSortByPrice()}>Sort</button></td>
                    <td>isForKids</td>
                    <td className="gamerating">ratings<button id="sortbyrating" onClick={() => handleSortByRating()}>Sort</button></td>

                </tr>

            </thead>
            <tbody>
                {
                    games?.map(({ gamename, gameauthor, gameprice, gametags, forkids, gamerating }) => <tr className='gamerow'>
                        <td className='gamename'>{gamename}</td>
                        <td>{gameauthor}</td>
                        <td>{gametags}</td>
                        <td>{gameprice}</td>
                        <td>{forkids ? "Yes" : "No"}</td>
                        <td>{gamerating}</td>
                    </tr>)
                }


            </tbody>

        </table>
    </div>)

};
