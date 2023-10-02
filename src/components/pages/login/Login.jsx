import "./Login.scss";
import PageNav from "../../molecules/pageNav/PageNav";
import Button from "../../atoms/button/Button";

const Login = () => {
  return (
    <main className="login">
      <PageNav />

      <form className="form">
        <div className="row">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
          />
        </div>

        <div className="row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  )
}

export default Login;