

function loginForm(){
  
    return(
       <div class="container">
      <form>   
         <div class="icon">
      <div className="avatar" id="logo">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-90 ring-offset-2">
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
  </div>
  </div>
      </div>
  <br/>
<div>
<label for="username"> username:</label>
<input type="text" placeholder="Enter your username" className="input input-bordered input-error w-full max-w-xs " />
</div><br></br>
<div>
<label for="password">password:</label>
<input type="password" placeholder="Enter your username" className="input input-bordered input-error w-full max-w-xs" />
</div><br/>
<div className="form-control">
  <label>
  <input type="checkbox" id="checkbox" className="checkbox-xs" />
    <span>Remember me</span> 
  </label>
</div>
<div>
 <button  type="submit" className="btn  btn-secondary">Login</button>
 </div>
  
      </form>
       </div>
    )
}

export default loginForm;




