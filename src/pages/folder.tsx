const list = [
  {
    name: '01',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
  },
  {
    name: 'Hour',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
  },
  {
    name: 'Of',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
  },
  {
    name: 'Silence',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
  },
  {
    name: 'Occasionally',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
  },
  {
    name: 'Broken',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
  },
  {
    name: 'Up',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
  },
  {
    name: 'By',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
  },
  {
    name: 'Lego',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
  },
  {
    name: 'Yoda',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB'
  },
  {
    name: 'Death',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB'
  },
  {
    name: 'Sound',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB'
  },
];

const Folder = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid gap-4 p-5 h-full w-full grid-cols-auto">
        {list.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-${item.color}-500 relative rounded-2xl p-5 opacity-20 hover:opacity-50 w-full h-full flex justify-center items-center`}
            onClick={(e) => { e.preventDefault(); window.open(item.url, '_blank'); }} 
          >
            <div className="flex justify-center items-center absolute inset-0">
              <h1 className="text-6xl font-bold">{item.name}</h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Folder;