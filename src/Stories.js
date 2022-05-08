import Story from "./Story";

export default function Stories() {
  const stories = [
    {
      image: "./img/9gag.svg",
      name: "9gag",
    },
    {
      image: "./img/meowed.svg",
      name: "meowed",
    },
    {
      image: "./img/barked.svg",
      name: "barked",
    },
    {
      image: "./img/nathanwpylestrangeplanet.svg",
      name: "nathanwpylestrangeplanet",
    },
    {
      image: "./img/wawawicomics.svg",
      name: "wawawicomics",
    },
    {
      image: "./img/respondeai.svg",
      name: "respondeai",
    },
    {
      image: "./img/filomoderna.svg",
      name: "filomoderna",
    },
    {
      image: "./img/memeriagourmet.svg",
      name: "memeriagourmet",
    },
  ];

  return (
    <div class="stories">
      {stories.map((story) => (
        <Story image={story.image} name={story.name} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
