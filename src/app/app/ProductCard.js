export default function ProductCard({ title, price, oldPrice, save, image }) {
    return (
      <div className="border rounded-lg shadow-sm hover:shadow-md p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-contain mb-3"
        />
        <h3 className="text-md font-semibold">{title}</h3>
        <div className="text-sm text-gray-600">
          <span className="text-green-600 font-bold">₹{price}</span>{' '}
          <span className="line-through ml-2">₹{oldPrice}</span>
        </div>
        <p className="text-sm text-blue-500 mt-1">Save ₹{save}</p>
      </div>
    );
  }
  