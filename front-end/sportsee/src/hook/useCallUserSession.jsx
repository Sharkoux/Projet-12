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
                    setUserSession(data);
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
