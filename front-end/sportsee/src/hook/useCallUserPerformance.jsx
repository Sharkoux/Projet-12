import { useEffect, useState } from 'react'
import API from '../API/Api'




/**
 * Call class API for get Data and return
 * @param { Number } id
 * @return { Object }
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
                    
                    //Create Dictionary for format data
                    const dict = [
                        { kind: 1, trad: "Cardio", position: 5 },
                        { kind: 2, trad: "Energie", position: 4 },
                        { kind: 3, trad: "Endurance", position: 3 },
                        { kind: 4, trad: "Force", position: 2 },
                        { kind: 5, trad: "Vitesse", position: 1 },
                        { kind: 6, trad: "Intensité", position: 0 }]

                    console.log(data)
                    // Format Data, add traduction and position
                    const resp = data?.data?.data?.map((item) => {

                        const meta = dict.find(g => g.kind === Number(item.kind));
                        const global = { ...item, ...meta };
                        const { kind, ...rest } = global;
                        return rest
                    }).sort((a, b) => a.position - b.position);
                    console.log(resp)
                    setUserPerformance(resp);
                })
                .catch((err) => {
                    setError(err)
                }
                )
        }
        getData()
    }, [id])
    // return Data or Error 
    return { userPerformance, error }
}

export default useCallUserPerformance
