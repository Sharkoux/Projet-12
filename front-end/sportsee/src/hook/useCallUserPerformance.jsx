import { useEffect, useState } from 'react'
import API from '../API/Api'




/**
 * Call class API for get Data and return
 * @param { Number } id
 * @return { Array }
 */

function useCallUserPerformance(id) {
    const [userPerformance, setUserPerformance] = useState([])
    const [error, setError] = useState(null)


    useEffect(() => {
        async function getData() {
            //New instance class API
            const callAPI = new API()
            //Get data with :id/path
            await callAPI.get(`${id}/performance`)
                .then((data) => {
                    setUserPerformance(data);
                })
                .catch((error) => {
                    setError()
                }
                )
        }
        getData()
    }, [id])
    // return Data or Error 
    return { userPerformance, error }
}

export default useCallUserPerformance
