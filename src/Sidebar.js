import Sugestao from './SidebarSuggestions'
import User from './User';

export default function Sidebar() {
  
  const suggestions = [
    {
        image: "./img/bad.vibes.memes.svg",
        name: "bad.vibes.memes",
        razao: "Segue você",
    },
    {
        image: "./img/chibirdart.svg",
        name: "chibirdart",
        razao: "Segue você",
    },
    {
        image: "./img/razoesparaacreditar.svg",
        name: "razoesparaacreditar",
        razao: "Novo no Instagram",
    },
    {
        image: "./img/adorable_animals.svg",
        name: "adorable_animals",
        razao: "Segue você",
    },
    {
        image: "./img/smallcutecats.svg",
        name: "smallcutecats",
        razao: "Segue você",
    },
];

  return (
    <div class="sidebar">
      <User image="./img/catanacomics.svg" userName="catanacomics" name="Catana"/>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {suggestions.map(suggestion => <Sugestao 
        image={suggestion.image} 
        name={suggestion.name}
        razao={suggestion.razao}
        />)}

      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
