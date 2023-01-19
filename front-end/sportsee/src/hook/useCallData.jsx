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
        
        const userActivitys = dataUser.USER_ACTIVITY.find((item) => item.userId === parseInt(id))
       
        const userSessions = dataUser.USER_AVERAGE_SESSIONS.find((item) => item.userId === parseInt(id))
        
        if(!userDatas || !userActivitys || !userSessions) {
            throw new Response('Not Found', { status: 404 })
        }
        setUserData(userDatas);
        setUserActivity(userActivitys)
        setUserSession(userSessions)
         })
        .catch((err) => {
            setError(err)
        })
    }, [id])

    return { userData, userActivity, userSession, error }
}

export default useCallData
