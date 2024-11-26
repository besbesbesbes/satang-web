import AppRouter from "./routes/AppRouter";

function App() {
  // Axios interceptor to replace localhost with the desired IP
  // axios.interceptors.request.use(
  //   (config) => {
  //     // Check if the request URL contains 'localhost:8000'
  //     if (config.url.includes("localhost:8001")) {
  //       // config.url = config.url.replace("localhost:8001", "192.168.1.126:8001");
  //       config.url = config.url.replace("localhost:8001", "10.0.0.34:8001");
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  return (
    <div className="text-sm text-text-d w-full h-screen font-quicksand">
      <AppRouter />
    </div>
  );
}

export default App;
