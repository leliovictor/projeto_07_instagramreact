import React from 'react';

export default function Post(props) {
  
  const [liked,setLiked] = React.useState(false);

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.user} />
          {props.name}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img onClick={() => setLiked(true)} src={props.image} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {liked ? <ion-icon onClick={()=>setLiked(false)} id="heart" name="heart"></ion-icon> : <ion-icon onClick={()=>setLiked(true)} name="heart-outline"></ion-icon>}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imageWhoLiked} />
          <div class="texto">
            Curtido por <strong>{props.whoLiked}</strong> e{" "}
            <strong>outras {props.howManyLiked} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
