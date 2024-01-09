import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { GetCurrentUser } from '../apicalls/users';
import { useDispatch, useSelector } from "react-redux"
import { ShowLoading, HideLoading } from "../redux/loadersSlice"
import { SetUser } from "../redux/usersSlice"
import { message } from "antd"

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.users).user
    const getCurrentUser = async () => {
        try {
            // show loader
            dispatch(ShowLoading())
            // make API call to get current user
            const response = await GetCurrentUser()
            // hide loader
            dispatch(HideLoading())
            if(response.success) {          
                // dispatch current user to usersReducer 
                dispatch(SetUser(response.data))
            } else {
                // dispatch null to usersReducer
                dispatch(SetUser(null))
                // show some error message
                message.error(response.message)
                // delete token from localstorage
                localStorage.removeItem("token")
                // redirect to login page
                navigate("/login")
            }
        } catch (error) {
            // hide loader
            dispatch(HideLoading())
            // dispatch null to usersReducer
            dispatch(SetUser(null))
            // show error
            message.error(error)
            // redirect to login page
            navigate("/login")
        }        
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            // get current user and set it in store
            getCurrentUser()
        } else {
            navigate("/login")
        }
    }, [])

    return (
        user && 
        (
          <div className="layout p-1">
            <div className="header bg-primary flex justify-between p-2">
              <div>
                <h1 className="text-2xl text-white cursor-pointer"
                  onClick={() => navigate("/")}
                >Book My Show</h1>
              </div>
    
              <div className="bg-white p-1 flex gap-1">
                <i className="ri-shield-user-line text-primary mt-1"></i>
                <h1
                  className="text-sm underline"
                  onClick={() => {
                    if (user.isAdmin) {
                      navigate("/admin");
                    } else {
                      navigate("/profile");
                    }
                  }}
                >
                  {user.name}
                </h1>
    
                <i
                  className="ri-logout-box-r-line mt-1"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                ></i>
              </div>
            </div>
            <div className="content mt-1 p-1">{children}</div>
          </div>
        )
      );
}

export default ProtectedRoute