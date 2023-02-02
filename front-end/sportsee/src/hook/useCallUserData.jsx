import { useEffect, useState } from 'react'
import API from '../API/Api'



/**
 * Call class API for get Data and return
 * @param { Number } id
 * @return { Array }
 */
function useCallUserData(id) {
    const [userData, setUserData] = useState([])
    const [error, setError] = useState(null)


    useEffect(() => {
        async function getData() {
            //New instance class API
            const callAPI = new API()
            //Get data with :id/path
            await callAPI.get(`${id}`)
                .then((data) => {
                    setUserData(data);
                })
                .catch((error) => {
                    setError(error)
                }
                )

        }
        getData()
    }, [id])
    // return Data or Error 
    return { userData, error }
}

export default useCallUserData
