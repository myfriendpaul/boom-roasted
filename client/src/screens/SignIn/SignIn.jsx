import { useState } from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import  Navigation from '../../components/Navigation/Navigation'


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
        <button id='buttonEnter' type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { email, password } = form;

  return (
    <div className="form-container">
      <Navigation></Navigation>

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
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <label id='label'>Password</label>
        <input
          className="input"
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  );
};

export default SignIn;
