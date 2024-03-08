import { roboto_condensed } from "@/app/libs/text";
import Link from "next/link";
const base_url = "https://jsonplaceholder.typicode.com/posts";
export default async function AboutUs() {
  const response = await fetch(base_url);
  const posts = await response.json();

  return (
    <div id="about-us" className="box-decoration-slice py-10">
      <div
        className={
          (roboto_condensed.className =
            "w-full mx-auto max-w-screen-2xl p-4 md:p-8 bg-[#1F477B] rounded-md")
        }
      >
        <div className="text-center text-4xl font-extrabold mb-8 md:mb-16 text-white">
          About us content goes here
        </div>
        <div className="flex flex-row md:flex-row">
          <div className="w-full md:w-1/2 mx-0 md:mx-4 mb-8 md:mb-0">
            <p className="mb-6 md:mb-10 font-bold text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              tempore illo accusantium rerum dignissimos veritatis autem
              debitis. Odit, quae explicabo, expedita doloribus minus veniam id
              amet consectetur mollitia doloremque, culpa quas provident placeat
              voluptatum est a ut. Magni minima vel nostrum aliquam aut autem.
              Libero eius quae officia excepturi delectus, nam molestias
              explicabo magnam, temporibus ducimus ab neque doloribus veritatis
              ullam! Repellat ipsum natus quasi aspernatur, iusto dolores
              obcaecati ducimus cumque vitae. Reprehenderit, nobis quod. Unde
              pariatur at ipsum dolores voluptatibus esse architecto soluta
              natus? Ea, aspernatur! Sunt voluptatem tempore minus natus
              consequuntur ad repellat sapiente, alias nisi? Iste, laudantium.
            </p>
            {/* {posts[1].body} */}
            <Link href={"/about-detail"}>
              <button className="cursor-pointer bg-slate-100 border-2 border-black shadow-md py-4 px-2 rounded-md ">
                Know More
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 mx-0 md:mx-4 text-black">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                OUR MISSION
              </div>
              <div className="collapse-content">
                <p className="mb-6 md:mb-10">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nostrum ipsum officia placeat, doloremque, expedita facilis
                  deleniti itaque odio quisquam minima officiis eaque iusto
                  maxime iure magnam. Voluptatibus sapiente nisi quae laborum
                  quod illum saepe, assumenda at quaerat numquam ipsam aperiam,
                  ea laboriosam facere sunt quam quia consequatur et, corporis
                  eum?
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                OUR VISION
              </div>
              <div className="collapse-content">
                <p className="mb-6 md:mb-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit deserunt molestias dolores alias et? Delectus, rerum!
                  Ipsam, similique quasi esse asperiores facilis illum hic
                  sapiente? Eius earum reprehenderit id magnam expedita ratione
                  veniam voluptatum a harum tempore quae nostrum eos quos
                  commodi inventore iusto, recusandae repudiandae doloremque
                  sequi numquam? Molestiae.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                OUR VALUES
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  error voluptas sed tenetur voluptatibus voluptatem quasi!
                  Quod, similique sint nemo magnam veniam odio earum saepe neque
                  maxime maiores sit quasi mollitia consequatur unde!
                  Temporibus, commodi? In sunt quis omnis, sit aliquam placeat!
                  Dolore esse consectetur facilis, iure quos laudantium neque
                  ullam. Magnam inventore ducimus saepe sit possimus dicta,
                  perferendis ratione dolorem consectetur quia? Eos aliquam
                  tempore, ipsam cumque quis soluta ullam sed facere in dolore!
                  Doloribus incidunt voluptatum iure repellat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
