import { useEffect, useState } from "react";
import { icons } from "../icons/mainIcon";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/userStore";
import { loginApi } from "../apis/auth-api";
import useMainStore from "../stores/mainStore";

function Login() {
  const [fallingIcons, setFallingIcons] = useState([]);
  const navigate = useNavigate();
  const setCurPage = useMainStore((state) => state.setCurPage);
  const setToken = useUserStore((state) => state.setToken);
  const setUser = useUserStore((state) => state.setUser);
  const [input, setInput] = useState({
    username: "besbesbes",
    password: "123456789",
  });
  const [errMsg, setErrMsg] = useState("");
  const [isShowErrMsg, setIsShowErrMsg] = useState(false);
  const {
    SatangIcon,
    LoginIcon,
    AddTranIcon,
    TransIcon,
    AcctIcon,
    DebtIcon,
    ReportIcon,
    SettingIcon,
  } = icons;

  const hdlLogin = async (e) => {
    e.preventDefault();
    try {
      // validate
      if (!input.username.trim() || !input.password.trim()) {
        hdlError("Please fill username and password!");
        return;
      }
      // call api
      const body = { username: input.username, password: input.password };
      const result = await loginApi(body);
      if (!result?.data?.token) {
        hdlError("Please contact administor!");
        return;
      }
      setToken(result.data.token);
      setUser(result.data.userData);
      navigate(0);
    } catch (err) {
      //   console.log(err?.response?.data?.error || err.message);
      console.log(err);
      hdlError(err?.response?.data?.error || err.message);
    } finally {
      setInput({
        username: "",
        password: "",
      });
    }
  };

  const hdlChangeInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const hdlError = (msg) => {
    setErrMsg(msg);
    setIsShowErrMsg(true);
    setTimeout(() => {
      setIsShowErrMsg(false);
    }, 2000);
  };

  const generateFallingIcons = () => {
    const iconCount = 20; // Number of icons to fall
    const iconsArray = [];
    const iconList = [
      SatangIcon,
      LoginIcon,
      AddTranIcon,
      TransIcon,
      AcctIcon,
      DebtIcon,
      ReportIcon,
      SettingIcon,
    ]; // Add other icons here

    for (let i = 0; i < iconCount; i++) {
      // Randomly pick an icon from the iconList
      const RandomIcon = iconList[Math.floor(Math.random() * iconList.length)];

      iconsArray.push({
        id: i,
        left: Math.random() * 100 + "%", // Random horizontal position
        animationDelay: Math.random() * 2 + "s", // Random animation delay
        animationDuration: Math.random() * 5 + 5 + "s", // Random falling duration
        Icon: RandomIcon, // Store the random icon
      });
    }
    setFallingIcons(iconsArray);
  };

  useEffect(() => {
    generateFallingIcons();
  }, []);

  return (
    <div className="w-full h-screen bg-prim-02 flex flex-col relative">
      {/* Main Content */}
      <div className="min-w-[300px] min-h-[100px] m-auto rounded-[16px] bg-prim-06 shadow-xl items-center flex flex-col p-5 translate-y-[-100px] gap-2 border z-10 relative transition-all duration-300">
        {/* logo */}
        <div className="flex items-center">
          <SatangIcon className="w-[30px] text-text-l p-1 bg-acct-06 rounded-full absolute" />
          <div className="border border-acct-06 p-1 rounded-full font-bold text-acct-06 pl-[30px]">
            Satang
          </div>
        </div>
        <div className="text-xs font-bold flex flex-col justify-center items-center text-prim-03">
          <p>Minimal effort, maximum control</p>
          <p>your wallet, simplified</p>
        </div>
        {/* form */}
        <form
          className="flex flex-col mt-5 gap-5 w-full px-5 items-center"
          onSubmit={hdlLogin}
        >
          <input
            type="text"
            className="w-full border h-[30px] rounded-full focus:outline-none px-3"
            placeholder="Username or email"
            name="username"
            value={input.username}
            onChange={hdlChangeInput}
          />
          <input
            type="password"
            className="w-full border h-[30px] rounded-full focus:outline-none px-3"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={hdlChangeInput}
          />
          {/* errMsg */}
          <p
            className={`text-acct-07 transition-all duration-300 opacity-0 ${
              isShowErrMsg ? "opacity-100 translate-y-0" : "-translate-y-2"
            }`}
          >
            {errMsg}
          </p>
          <button className="px-16 font-bold text-text-l rounded-full h-[30px] bg-acct-06 flex items-center gap-1  hover:scale-105 transition-all duration-300">
            <LoginIcon className="w-[20px] h-[20px]" />
            <p>Login</p>
          </button>
        </form>
      </div>

      {/* Falling icons animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {fallingIcons.map((icon) => (
          <div
            key={icon.id}
            className="falling-icon"
            style={{
              left: icon.left,
              animationDelay: icon.animationDelay,
              animationDuration: icon.animationDuration,
            }}
          >
            <icon.Icon className="w-[30px] h-[30px] text-prim-03" />{" "}
            {/* Dynamic Icon */}
          </div>
        ))}
      </div>

      {/* Custom styles for falling icons */}
      <style>{`
        .falling-icon {
          position: absolute;
          top: -50px;
          animation: fall linear infinite;
        }

        @keyframes fall {
          0% {
            top: -50px;
          }
          100% {
            top: 100vh;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;
