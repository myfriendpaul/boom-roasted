import { useState } from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation'
import Layout from '../../components/Layout/Layout'


const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button id='button' type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button id='button' type="submit">Sign In</button>;
    }
  };

  const { email, password } = form;

  return (
      <Layout>
    <div className="form-container">

      <h3 className="h3SignIn" >Sign In</h3>
      <form
        className="form"
        onSubmit={onSignIn}>
        <label id='label'>Email</label>
        <input
          className="input"
          required
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label id='label'>Password</label>
        <input
          className="input"
          required
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
    </Layout>
  );
};

export default SignIn;
