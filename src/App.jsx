import AppRouter from "./routes/AppRouter";
import axios from "axios";

function App() {
  axios.interceptors.request.use(
    (config) => {
      if (config.url.includes("localhost:8001")) {
        config.url = config.url.replace("localhost:8001", "10.0.20.12:8001");
        // config.url = config.url.replace("localhost:8001", "192.168.1.122:8001");
        // config.url = config.url.replace("localhost:8001", "10.0.0.34:8001");
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return (
    <div className="text-sm text-text-d w-full h-screen font-quicksand">
      <AppRouter />
    </div>
  );
}

export default App;
