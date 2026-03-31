import { useState, type ChangeEvent } from 'react'


interface OrderFormProps {
  onSubmit: (order: { name: string; email: string; phone: string }) => void;

}
export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number | string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, email, phone: phone.toString() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order Form</h2>
      <label htmlFor="name">Name:</label>
      <input className='form-control' value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" id="name" name="name" required />
      <label htmlFor="email">Email:</label>
      <input className='form-control' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="email" id="email" name="email" required />
      <label htmlFor="phone">Phone:</label>
      <input className='form-control' value={phone} onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(Number(e.target.value) || 0)} type="number" id="phone" name="phone" required />
      <button type="submit">Placed Order</button>
    </form>
  )
}