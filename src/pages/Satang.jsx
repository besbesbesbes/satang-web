import useMainStore from "../stores/mainStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddTran from "../components/AddTran/AddTran";
import Trans from "../components/Trans/Trans";
import Acct from "../components/Acct/Acct";
import Debt from "../components/Debt/Debt";
import Report from "../components/Report/Report";
import Setting from "../components/Setting/Setting";
import Trips from "../components/Trips/Trips";
import { useEffect } from "react";
import consoleLog from "../utils/consoleLog";
import useUserStore from "../stores/userStore";
import { useNavigate } from "react-router-dom";

function Satang() {
  const navigate = useNavigate();
  const curPage = useMainStore((state) => state.curPage);
  const setCurPage = useMainStore((state) => state.setCurPage);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    consoleLog("useEffect Stang");
    setCurPage(user.startPage);
  }, []);
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* header */}
      <Header />
      {/* main */}
      <div
        className="w-full h-[calc(100vh-80px)] mt-[40px] bg-slate-100 m-auto relative flex flex-col transition-transform duration-500 "
        style={{
          transform: `translateX(-${curPage * window.innerWidth}px)`,
        }}
      >
        <AddTran />
        <Trans />
        <Acct />
        <Debt />
        <Trips />
        <Report />
        <Setting />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Satang;
