import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";

function User() {
  const route = useRouter();
  const { user, error, isLoading } = useUser();

  {
    if (!user) {
      return (
        <div onClick={() => route.push("/api/auth/login")}>
          <FaUserCircle />
          <h3>Login</h3>
        </div>
      );
    } else {
      return (
        <Profile onClick={() => route.push("/profile")}>
          <img src={user.picture} alt={user.name} />
          <h3>Profile</h3>
        </Profile>
      );
    }
  }
}

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  img {
    border-radius: 50%;
    height: 30px;
    width: auto;
  }
  @media (max-width: 800px) {
    img {
      width: 25px;
      height: auto;
    }
  }
  h3 {
    text-align: center;
  }
`;

export default User;
