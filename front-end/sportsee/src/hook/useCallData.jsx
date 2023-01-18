import { useEffect, useState } from 'react'


function useCallData(id) {
    const [userData, setUserData] = useState([])
    const [userActivity, setUserActivity] = useState([])
    const [userSession, setUserSession] = useState([])
    const [userPerformance, setUserPerformance] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        Promise.all([
            fetch('/data.json'),
            fetch('/data.json')
        ])
        .then(([resUser, resTest]) => 
        Promise.all([resUser.json(), resTest.json()])
        )
        .then(([dataUser, dataTest]) => {
        
        const userDatas = dataUser.USER_MAIN_DATA.find((item) => item.id === parseInt(id))
        setUserData(userDatas);
        const userActivitys = dataUser.USER_ACTIVITY.find((item) => item.userId === parseInt(id))
        setUserActivity(userActivitys)
         })
    }, [id])

    return { userData, userActivity, error }
}

export default useCallData
