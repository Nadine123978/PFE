export const Pagination = ({ totalPages }) => (
    <div className="flex gap-2 justify-center mt-4">
      {[...Array(totalPages)].map((_, i) => (
        <button key={i} className="px-3 py-1 border rounded hover:bg-gray-100">
          {i + 1}
        </button>
      ))}
    </div>
  );
  