// to persist the user in the login 

import { Outlet}  from 'react-router-dom';
import { useState,useEffect } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';


const persistLogin = () => 
{
    const [isLoading,setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => 
    {
       
        const verifyRefreshToken = async () =>
        {
            try{

                await refresh();
            }
            catch
            {

            }
        }

    },[])
}

export default persistLogin;