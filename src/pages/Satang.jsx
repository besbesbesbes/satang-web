import useMainStore from "../stores/mainStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddTran from "../components/AddTran/AddTran";
import Trans from "../components/Trans/Trans";
import Acct from "../components/Acct/Acct";
import Debt from "../components/Debt/Debt";
import Report from "../components/Report/Report";
import Setting from "../components/Setting/Setting";

function Satang() {
  const curPage = useMainStore((state) => state.curPage);

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
        <Report />
        <Setting />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Satang;
