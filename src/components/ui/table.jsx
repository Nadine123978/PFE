export const Table = ({ children }) => (
    <table className="w-full text-left">{children}</table>
  );
  
  export const TableHeader = ({ children }) => (
    <thead className="bg-gray-100">{children}</thead>
  );
  
  export const TableRow = ({ children }) => <tr>{children}</tr>;
  
  export const TableHead = ({ children }) => (
    <th className="px-4 py-2 text-sm font-semibold text-gray-700">{children}</th>
  );
  
  export const TableBody = ({ children }) => <tbody>{children}</tbody>;
  
  export const TableCell = ({ children }) => (
    <td className="px-4 py-2 text-sm text-gray-600">{children}</td>
  );
  