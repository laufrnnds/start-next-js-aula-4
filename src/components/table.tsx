interface TableProps {
  columns: { key: string; label: string }[];
  data: any[];
}

export default function Table({ columns, data }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-xl m-4">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column, index) => {
                if (index === 0) {
                  return (
                    <td
                      key={item.id}
                      className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                    >
                      {item[column.key as keyof typeof item]}
                    </td>
                  );
                }
                return (
                  <td
                    key={item.id}
                    className="whitespace-nowrap px-4 py-2 text-gray-700"
                  >
                    {item[column.key as keyof typeof item] || "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
