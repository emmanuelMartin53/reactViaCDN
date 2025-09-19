const App = () => {
      return (
        <div>
          <h2 className="title">Salut</h2>
        </div>
      )
}

    //  class App extends React.Component {
    //       render () {
    //         return (
    //           React.createElement("div", null, React.createElement("h2", { className: "title"}, "Salut à tous"))
    //         )
    //       }
    //     }


        const container = document.getElementById("app");
        const root = ReactDOM.createRoot(container);
        root.render(<App />)
