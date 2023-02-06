import { useEffect, useState } from 'react'
import API from '../API/Api'


/**
 * Call class API for get Data and return
 * @param { Number } id
 * @return { Array }
 */

function useCallUserSession(id) {
    const [userSession, setUserSession] = useState([])
    const [error, setError] = useState(null)


    useEffect(() => {
        async function getData() {
            //New instance class API
            const callAPI = new API()
            //Get data with :id/path
            await callAPI.get(`${id}/average-sessions`)
                .then((data) => {

                    //Create Dictionary for format data
                    const dict = [
                        { data: "L", position: 1 },
                        { data: "M", position: 2 },
                        { data: "M", position: 3 },
                        { data: "J", position: 4 },
                        { data: "V", position: 5 },
                        { data: "S", position: 6 },
                        { data: "D", position: 7 }
                    ]

                    // Format Data, add days and position
                    const resp = data.data.sessions.map((item) => {
                        const meta = dict.find(g => g.position === Number(item.day));
                        const global = { ...item, ...meta };
                        const { day, ...rest } = global;
                        return rest
                    }).sort((a, b) => a.position - b.position);


                    setUserSession(resp);
                })
                .catch((error) => {
                    setError(error)
                }
                )
        }
        getData()
    }, [id])
    // return Data or Error 
    return { userSession, error }
}

export default useCallUserSession
