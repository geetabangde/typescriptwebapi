interface ChaiCardProps {
  name: string
  price: number
  isSpecial?: boolean
}

export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProps) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      {isSpecial && <span className="special">Special!</span>}
    </div>
  )
}