import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      user: "./img/meowed.svg",
      name: "meowed",
      image: "./img/gato-telefone.svg",
      imageWhoLiked:"./img/respondeai.svg",
      whoLiked: "respondeai",
      howManyLiked: "101.523",
    },
    {
      user: "./img/barked.svg",
      name: "barked",
      image: "./img/dog.svg",
      imageWhoLiked:"./img/adorable_animals.svg",
      whoLiked: "adorable_animals",
      howManyLiked: "99.159",
    },
  ];

  return (
    <div class="posts">
      {posts.map((post) => (
        <Post
          user={post.user}
          name={post.name}
          image={post.image}
          imageWhoLiked={post.imageWhoLiked}
          whoLiked={post.whoLiked}
          howManyLiked={post.howManyLiked}
        />
      ))}
    </div>
  );
}
