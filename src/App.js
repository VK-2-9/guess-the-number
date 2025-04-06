import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Left from "./components/Left";
import Right from "./components/Right";
function App() {

  const random=Math.floor(Math.random() * 10) + 10
  console.log(random)

  return (

    

    <div  >
        <Top>

        </Top>
        <Bottom random={random}> 

        </Bottom>
    </div>
  );
}

export default App;
