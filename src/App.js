
import './App.css';
// accessing the component
import Para from './Para';
import Heading from './Heading';

// parent component

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

function App() {
  return (
    <>
    <Heading/>
    {/* child component */}
    <Para currentDate={currentDate} currentTime={currentTime}/>
    {/* <List/> */}
    </>
  );
}


export default App;
