import { useEffect, useState } from 'react'
import API from '../API/Api'
import energy from '../asset/energy.png'
import proteine from '../asset/protein-icon.png'
import lipide from '../asset/cheeseburger.png'
import apple from '../asset/apple.png'



/**
 * Call class API for get Data and return
 * @param { Number } id
 * @return { Object }
 */
function useCallUserData(id) {
    const [userData, setUserData] = useState({ formated: [], raw: {}, score: {} })
    const [error, setError] = useState(null)


    useEffect(() => {
        async function getData() {
            //New instance class API
            const callAPI = new API()
            //Get data with :id/path
            await callAPI.get(`${id}`)
                .then((data) => {
                    let res
                    let scores
                    // Format Data from object list to array with add name and icon 
                    if (data.data.keyData) {
                        const formatData = {
                            calorieCount: { label: 'Calories', icon: { energy } },
                            carbohydrateCount: { label: 'Glucides', icon: { apple } },
                            lipidCount: { label: 'Lipides', icon: { lipide } },
                            proteinCount: { label: 'Proteines', icon: { proteine } },
                        }

                         res = Object.entries(data.data.keyData).map(([key, value], index) => {
                            return { key, value, label: formatData[key]?.label, icon: formatData[key]?.icon }
                        })

                    }

                    // If name data score is different
                    if (data.data?.todayScore) {
                      scores = data.data.todayScore;
                    }
                    if (data.data?.score) {
                      scores = data.data.score
                    }

                    setUserData({formated: res, raw: data, score: {scores}});
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
