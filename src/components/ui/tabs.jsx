export const Tabs = ({ children }) => <div>{children}</div>;

export const TabsList = ({ children }) => (
  <div className="flex gap-2 bg-gray-100 p-1 rounded-md">{children}</div>
);

export const TabsTrigger = ({ value, children }) => (
  <button className="px-3 py-1 rounded hover:bg-purple-200">{children}</button>
);
