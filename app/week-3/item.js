export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-gray-800 p-4 mb-2 rounded-lg">
        <div className="text-white font-bold">{name}</div>
        <div className="text-gray-400">Buy {quantity} in {category}</div>
      </li>
    );
  }