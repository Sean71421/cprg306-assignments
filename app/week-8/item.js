export default function Item( { name, quantity, category, onSelect }) {
    return (
        <li 
            className="bg-slate-800 mb-2 p-4 rounded-lg hover:bg-slate-700 cursor-pointer"
            onClick={onSelect}
        >
            <div className="text-xl font-bold">{name}</div>
            <div className="text-sm text-gray-400">Buy {quantity} in {category}</div>
        </li>
    );
}