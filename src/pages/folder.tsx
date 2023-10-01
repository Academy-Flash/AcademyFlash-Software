const list = [
  {
    name: '01',
    color: 'gray',
  },
  {
    name: '02',
    color: 'gray',
  },
  {
    name: '03',
    color: 'gray',
  },
  {
    name: '04',
    color: 'gray',
  },
  {
    name: '05',
    color: 'gray',
  },
  {
    name: '06',
    color: 'gray',
  },
  {
    name: '07',
    color: 'gray',
  },
  {
    name: '08',
    color: 'gray',
  },
  {
    name: '09',
    color: 'gray',
  },
  // {
  //   name: '10',
  //   color: 'gray',
  // }
];

const folder = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4 h-4/5 w-4/5">
        {list.map((item, index) => (
          <div
            key={index}
            className={`bg-${item.color}-500 h-full relative rounded-2xl gap-5 p-5 opacity-20 hover:opacity-50`}
          >
            <div className="flex justify-center items-center absolute inset-0">
              <h1 className="text-6xl font-bold">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default folder;
