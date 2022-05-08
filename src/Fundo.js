function FundoIcon (props) {
  return (
    <ion-icon name={props.name}></ion-icon>
  )  
}

export default function Fundo() {
  const icons = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];

  return (
    <div class="fundo-mobile">
      {icons.map(icon=><FundoIcon name={icon}/>)}
    </div>
  );
}
