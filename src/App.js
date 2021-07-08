
import './App.css';
// accessing the component
import Para from './Para';
import Heading from './Heading';
import Category from './Category';
import Welcome from './Welcome';

// parent component

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

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

    {/* <Para date={currentDate} time={currentTime} val={getValue} x/> */}
    {/* <List/> */}

    <Welcome/>
    </>
  );
}


export default App;
