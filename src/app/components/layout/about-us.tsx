import Link from "next/link";
const base_url = "https://jsonplaceholder.typicode.com/posts";
export default async function AboutUs() {
  const response = await fetch(base_url);
  const posts = await response.json();

  return (
    <div id="about-us" className="h-screen flex items-center">
      <div className="flex flex-col w-full items-center gap-60">
        <div className="text-center text-4xl font-extrabold">
          About us content goes here
        </div>
        <div className="flex flex-col">
          <div className="border-2">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore
            illo accusantium rerum dignissimos veritatis autem debitis. Odit,
            quae explicabo, expedita doloribus minus veniam id amet consectetur
            mollitia doloremque, culpa quas provident placeat voluptatum est a
            ut. Magni minima vel nostrum aliquam aut autem. Libero eius quae
            officia excepturi delectus, nam molestias explicabo magnam,
            temporibus ducimus ab neque doloribus veritatis ullam! Repellat
            ipsum natus quasi aspernatur, iusto dolores obcaecati ducimus cumque
            vitae. Reprehenderit, nobis quod. Unde pariatur at ipsum dolores
            voluptatibus esse architecto soluta natus? Ea, aspernatur! Sunt
            voluptatem tempore minus natus consequuntur ad repellat sapiente,
            alias nisi? Iste, laudantium. */}
            {posts[1].body}
            <Link href={"/about-detail"}>
              <div className="text-center mt-10">Click here for more</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
