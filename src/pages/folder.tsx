const list = [
  {
    name: '01',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
    image: 'https://sp.unifesp.br/epm/images/noticias/ccs-logo4.png',
  },
  {
    name: 'Hour',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
    image: 'https://posgraduacao.fob.usp.br/wp-content/uploads/sites/731/2019/03/usp.jpg.png',
  },
  {
    name: 'Of',
    color: 'gray',
    url: 'https://youtu.be/dQw4w9WgXcQ?si=4gAXjowFMiCEn7xA',
    image: 'https://64.media.tumblr.com/276eeec6ab6ee2dce7373580e5ffa35c/tumblr_n2fx9yLS411tvfpg9o1_500.gifv',
  },
  {
    name: 'Silence',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
    image: 'https://i.redd.it/g119ewgm4mm71.jpg',
  },
  {
    name: 'Occasionally',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
    image: 'https://i.redd.it/g119ewgm4mm71.jpg',
  },
  {
    name: 'Broken',
    color: 'gray',
    url: 'https://www.youtube.com/watch?v=M9K2guaz_7E',
    image: 'https://i.redd.it/g119ewgm4mm71.jpg',
  },
  {
    name: 'Up',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
    image: 'https://i.redd.it/g119ewgm4mm71.jpg',
  },
  {
    name: 'By',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
    image: 'https://i.redd.it/g119ewgm4mm71.jpg',
  },
  {
    name: 'Lego',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
    image: 'https://i.redd.it/g119ewgm4mm71.jpg',
  },
  {
    name: 'Yoda',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
    image: 'https://i.redd.it/g119ewgm4mm71.jpg'
  },
  {
    name: 'Death',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
    image: 'https://i.redd.it/g119ewgm4mm71.jpg'
  },
  {
    name: 'Sound',
    color: 'gray',
    url: 'https://youtu.be/uO8SeXh_LaA?si=_iR89mhdnilSSmgB',
    image: 'https://i.redd.it/g119ewgm4mm71.jpg'
  },
];

const Folder = () => {
  return (
    <div className="h-fit flex justify-center items-center mt-20">
      <div className="grid grid-cols-auto gap-2 p-2 w-full h-full">
        {list.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-${item.color}-500 rounded-2xl opacity-20 hover:opacity-70 w-full h-full flex justify-center items-center aspect-square border border-gray-400`}
            onClick={(e) => {
              e.preventDefault();
              window.open(item.url, '_blank');
            }}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-fill rounded-2xl"
              />
            )}
            {!item.image && (
              <h1 className="text-6xl font-bold">{item.name}</h1>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Folder;
  
