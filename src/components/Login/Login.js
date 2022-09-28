import classes from "./Login.module.css";

const Login = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("logged in");
    props.onLogin(true);
  };

  return (
    <div className={classes.login}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
