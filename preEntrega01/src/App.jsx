import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

function App() {
  return(
    <>    
    <nav class=" bg-success bg-gradient" >
    <CartWidget />
    </nav>
    <main className='bg-success-subtle' >
    <ItemListContainer name={['Fideos',' ravioles',' sorrentinos']}/>
    </main>
    </>
  )
}

export default App
