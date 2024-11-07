export default function Item({ name, quantity, category }) {
    return (
        <li className="p-2 m-1 bg-slate-800 max-w-sm hover:bg-slate-700">
            <div className="text-xl font-bold">{name}</div>
            <div className="text-sm">Buy {quantity} in {category}</div>
        </li>
    );
}