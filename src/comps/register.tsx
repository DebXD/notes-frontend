import { useContext, useState } from "react";
import { loginFn } from "../api/api";
// import { loginResponseType } from "../@types/types";
// import UserContext from "../contexts/userContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => { };

  // const userContext = useContext(UserContext)
  //
  // const userData = { username: username, password: password }
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const data: loginResponseType = await loginFn(userData)
  //     const accessToken = data.data.accessToken
  //     userContext?.userLogin(accessToken)
  //   }
  //   catch (err) {
  //     console.log(err)
  //     if(err.response.status === 400){
  //
  //     console.log("check your credentials again")
  //     }
  //
  //   }

  //}

  return (
    <div className="h-screen items-center justify-center flex dark:bg-neutral-800 dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="border-2 p-5 w-3/4  md:w-2/4 lg:w-1/4 shadow-black border-black dark:border-gray-300 "
      >
        <div className=" inline-block text-center p-5 w-full">
          <h1 className="text-3xl mb-1">Login</h1>
          <hr />
        </div>

        <div className=" block ">
          <label className="block">Username</label>
          <input
            className="p-2 mt-1 w-full border-2 hover:border-black dark:border-0 dark:bg-neutral-600 "
            placeholder="demouser"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className=" block ">
          <label className="block">Email</label>
          <input
            className="p-2 mt-1 w-full border-2 hover:border-black dark:border-0 dark:bg-neutral-600 "
            placeholder="demouser"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="block mt-2">
          <label className="block">Password</label>
          <input
            className="p-2 mt-1 w-full border-2 hover:border-black dark:border-0 dark:bg-neutral-600 "
            placeholder="*********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="justify-center flex ">
            <button
              type="submit"
              className="px-5 py-2 rounded border-2 mt-3 hover:border-black"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Register;