export default function ProductCard({ title, price, oldPrice, save, image }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg p-4 transition duration-300 transform hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-44 object-contain mb-3 rounded-lg"
      />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      <div className="mt-1 text-md">
        <span className="text-green-600 font-bold">₹{price}</span>{' '}
        {oldPrice && (
          <span className="line-through text-gray-400 ml-2">₹{oldPrice}</span>
        )}
      </div>

      {save && (
        <p className="text-sm text-blue-600 mt-1">Save ₹{save}</p>
      )}
    </div>
  );
}
