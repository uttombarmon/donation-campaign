import { useLoaderData } from "react-router-dom";
import Card from "./Card";
// import { useState } from "react";

function Home() {
  // const {cardses,setCard} = useState([]);
  const arr = [];
  const cards = useLoaderData();
  function donateCard(card) {
    console.log(card);
    arr.push(card);
    // console.log(JSON.strigify(arr));
    localStorage.setItem("cards", JSON.stringify(arr));

}
  console.log(cards);
  return (
    <>
      <div className="w-full h-[500px] relative">
        <div className="w-full h-full">
          <div className=" w-full my-auto h-full flex text-center">
            <div className="h-fit w-full self-center ">
              <h1 className=" text-3xl font-bold my-5">
                I Grow By Helping People In Need
              </h1>
              <form>
                <input
                  className=" w-fit h-fit py-2 px-4 bg-[#FFFFFF] border-2 border-[#DEDEDE] rounded-tl-lg rounded-bl-lg"
                  type="text" placeholder="Search...."
                />
                <button className=" bg-[#FF444A] text-white py-2 text-lg px-4">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className=" -z-10 opacity-5 w-full h-full absolute top-0"
          style={{
            backgroundImage: "url('../src/assets/Clothing.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}></div>
      </div>
      <div className=" mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards?.map((card) => <Card donateCard={donateCard} key={card.id} card={card}/>)}
      </div>
    </>
  );
}

export default Home;
