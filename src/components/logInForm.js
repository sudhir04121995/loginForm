
import useForm from "../handler/useForm";
import validation from "../validation/loginFormValidation";


function LoginForm() {
  
  const {handleRememberMeChange,handleChange, handleSubmit, data ,error} = useForm(validation);

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div class="icon">
          <div className="avatar" id="logo">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-90 ring-offset-2">
              <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
              alt="logo" />
            </div>
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="UserName" for="username">
            {" "}
            username:
          </label>
          <input
            id="UserName"
            type="text"
            placeholder="Enter your username"
            value={data.name}
            className="input input-bordered input-error w-full max-w-xs "
            onChange={handleChange}
            name="name"
          />
          {error.name&&<div className="error">{error.name}</div>}
        </div>
        <br></br>
        <div>
          <label htmlFor="Password" for="password">
            password:
          </label>
          <input
            id="Password"
            type="password"
            placeholder="Enter your username"
            value={data.password}
            className="input input-bordered input-error w-full max-w-xs"
            onChange={handleChange}
            name="password"
          />
          {error.password && <div className="password">{error.password}</div>}
        </div>
        <br />
        <div className="form-control">
          <label>
            <input type="checkbox" id="checkbox" className="checkbox-xs" onChange={handleRememberMeChange}/>
            <span>Remember me</span>
          </label>
        </div>
        <div>
          <button type="submit" className="btn  btn-secondary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
} 

export default LoginForm;
