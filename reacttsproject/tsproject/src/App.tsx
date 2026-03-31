import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'
import type { Chai } from './types'
import { ChaiList } from './components/ChaiList';
import { OrderForm } from './components/OrderFrom';
import { Card } from './components/Card';

const menu: Chai[] = [
  { id: 1, name: 'Green Tea', price: 2.99, isSpecial: true },
  { id: 2, name: 'Black Tea', price: 3.49, isSpecial: true },
  { id: 3, name: 'Oolong Tea', price: 3.99 },
]

function App() {
  return (
    <>
      <h1>Hello, React!</h1>
      
      <ChaiCard name="Green Tea" price={2.99} isSpecial={true} />
      <ChaiCard name="Black Tea" price={3.49} isSpecial={true} />
      <ChaiCard name="Oolong Tea" price={3.99} />
      <Counter />
      <ChaiList items={menu} />
      <OrderForm
        onSubmit={(order) => {
          console.log('Order submitted:', order);
        }}
      />
      <Card title="Green Tea" footer="Special Offer!" description="A refreshing cup of green tea." imageUrl="/green-tea.jpg" />
    </>
  )
}

export default App
