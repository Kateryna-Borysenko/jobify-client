import { Link } from "react-router-dom";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Kateryna" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Borysenko"
        />
        <FormRow type="text" name="location" defaultValue="Pinellas Park" />
        <FormRow type="email" name="email" defaultValue="kateryna@gmail.com" />
        <FormRow type="password" name="password" defaultValue="qwe123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
