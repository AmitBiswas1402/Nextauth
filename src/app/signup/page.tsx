import React,{useState} from 'react'

export default function SignUpPage() {

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })

    const [buttonDisabled, setbuttonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSignup = async () => {
        try {
            
        } catch (error: any) {
            console.log("Signup failed");
                        
        }
    }

  return (
    <div>sign up page</div>
  )
}

