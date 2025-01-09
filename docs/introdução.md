#
Podcast Manager

## Descrição:
Descrever a aplicação.


## Domínio
Podcast Feito em vídeos



## Features

 - Listar todos os podcasts em sessões de categorias
  - [Esportes, Cristão, Deus]
- Filtrar podcasts por genero de podcasts


## Como

#### Listar todos os podcasts em sessões de categorias
Vou retornar em uma API REST o:
nome do podcast, nome do episódio, imagem de capa e link do podcast.

```js
[

{
    category: "cristão"
    podCastName: "JesusCopy"
    episodeName: "O PREÇO DA MATURIDADE - Luciano Subirá - JESUSCOPY"
    image: "https://i.ytimg.com/vi/q8fA2faXkFg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCVrRmGrvH1S45EpXBPfoPZRNRL3Q"
    link: "https://www.youtube.com/watch?v=q8fA2faXkFg"

},
{
    category: "esportes"
    podCastName: ""
    episodeName: "ANDRÉ HENNING - Flow Sport Club #228"
    image: "https://i.ytimg.com/vi/CBBWKEzf6wI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDZlSiZ6gOUdxkuzAI88IuheBy0Xw"
    link: "https://www.youtube.com/watch?v=CBBWKEzf6wI&pp=ygUQcG9kY2FzdCBlc3BvcnRlcw%3D%3D"

}

]


```
