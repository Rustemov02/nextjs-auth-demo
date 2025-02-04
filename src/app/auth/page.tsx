'use client'
import RegisterForm from './register'
import LoginForm from './login'
import { useState } from 'react' 



const AuthPage = () => {

    const [isLogin , setIsLogin] = useState(true)



    return(
        <div className='flex flex-col items-center h-screen'> 
            {isLogin ? <LoginForm/> : <RegisterForm/>}
            <button onClick={()=>setIsLogin(!isLogin)}>{!isLogin ? "Login" : "Register"}</button>
        </div>
    )
}

export default AuthPage