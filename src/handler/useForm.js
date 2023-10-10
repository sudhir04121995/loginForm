import { useEffect, useState } from "react";
import validation from "../validation/loginFormValidation";




const useForm = (validation) => {
  
    const[error,setError]=useState({})
    const[data,setData]=useState({
        name: "",
        password: ""
      });  
    
     
      const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      
      const handleSubmit = (event) => {
        event.preventDefault(); 
        setError(validation(data))
        
        console.log(data)
      }


      // useEffect(() => {
      //   if(Object.keys(error).length===0 && (!data.name === '' && !data.password === '')){
      //     alert('Login successful!');
      //   }

      // },[error,data]);
    
    

      const [rememberMe, setRememberMe] = useState(
        localStorage.getItem('rememberMe') === 'true'
      );
    
      const handleRememberMeChange = () => {
        const newValue = !rememberMe;
        setRememberMe(newValue);
      };
    
      useEffect(() => {

        localStorage.setItem('rememberMe', String(rememberMe));
      }, [rememberMe]);
  
    
     return {handleRememberMeChange,handleChange,handleSubmit,data,error,rememberMe}
}

export default useForm;




