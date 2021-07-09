
import './App.css';
// accessing the component
import Para from './Para';
import Heading from './Heading';
import Category from './Category';
import Welcome from './Welcome';
import Student from './Student';

// parent component

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

var fname= "Abhishek";
var lname = "Dixit";

const getValue = () => {
  console.log('getValue');
}

// if else in props:
const category = "nveg";

function ShowCategory(){
  if(category == "veg"){
    return <Category name="veg"/>
  }else{
    return <Category name="non-veg"/>
  }
}

function App() {
  return (
    <>
    <Heading/>
    {/* child component */}
    <Para date={currentDate} time={currentTime} val={getValue} key='1' />
    <ShowCategory/>
    
    {
      (category == 'veg') ? <Category name="veg"/> : <Category name="non-veg"/> 
    }

    <Welcome/>

    <Student prop1={fname} prop2={lname}/>
    </>
  );
}


export default App;
