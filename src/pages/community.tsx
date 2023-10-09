const list = [
    {
        id: 1,
        name: 'Unifesp',
        url: 'content1',
        image: 'https://sp.unifesp.br/epm/images/noticias/ccs-logo4.png',
    },
    {
        id: 2,
        name: 'Usp',
        url: 'content2',
        image: 'https://posgraduacao.fob.usp.br/wp-content/uploads/sites/731/2019/03/usp.jpg.png',
    },
    {
        id: 3,
        name: 'Unicamp',
        url: 'content3',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 4,
        name: 'Unesp',
        url: 'content4',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 5,
        name: 'PUC',
        url: 'content5',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 6,
        name: 'Mackenzie',
        url: 'content6',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 7,
        name: 'USP',
        url: 'content7',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 8,
        name: 'Unicamp',
        url: 'content8',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 9,
        name: 'Unesp',
        url: 'content9',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 10,
        name: 'PUC',
        url: 'content10',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 11,
        name: 'Mackenzie',
        url: 'content11',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 12,
        name: 'USP',
        url: 'content12',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 13,
        name: 'Unicamp',
        url: 'content13',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    {
        id: 14,
        name: 'Unesp',
        url: 'content14',
        image: 'https://i.redd.it/g119ewgm4mm71.jpg',
    },
    ];

    export default function Community() {
        return (
            <div className="h-fit flex justify-center items-center mt-20">
                <div className="grid grid-flow-row gap-1 p-2 w-full h-full">
                    {list.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`grid-item bg-grey-500 rounded-2xl opacity-20 hover:opacity-70 w-full h-1/5 flex justify-center items-center border border-gray-400`}
                        >
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain rounded-2xl"
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
    }

//Função para criar comunidade inserindo na lista

function createCommunity() {
    const communityName = (document.getElementById("communityName") as HTMLInputElement)?.value;
    const communityUrl = (document.getElementById("communityUrl") as HTMLInputElement)?.value;
    const communityImage = (document.getElementById("communityImage") as HTMLInputElement)?.value;

    const community = {
        id: 1,
        name: communityName,
        url: communityUrl,
        image: communityImage,
    };

    list.push(community);
    console.log(list);
}