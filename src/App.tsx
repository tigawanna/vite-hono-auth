import "./App.css";

function App() {
  return (
    <div className="w-full h-full">
      <h1>Hello</h1>
      <button
        className=""
        onClick={() => [
          fetch("/api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: "test",
              password: "test",
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("===================== login response ====================",data);
            })
            .catch((err) => console.log("==================== login error ====================",err)),
        ]}>
        login
      </button>
    </div>
  );
}

export default App;
