import { useEffect } from "react";
import { signOut } from "../../services/users";
import { useHistory } from "react-router-dom";
import "./SignOut.css";
import Layout from "../../components/Layout/Layout";

const SignOut = (props) => {
  const { setUser } = props;
  const history = useHistory();

  useEffect(() => {
    const signOutUser = async () => {
      await signOut();
      setUser(null);
      history.push("/sign-out");
    };
    signOutUser();
  }, [history, setUser]);

  return (
    <Layout className="mediaSignup" user={props.user}>
      <div className="signOut">
        <p id="paragraph">We’ll miss you! Come back and visit us anytime boo</p>
      </div>
    </Layout>
  );
};

export default SignOut;
