import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Container from "../layouts/Container";

const page = () => {
  return (
    <>
      <Header className="bg-black" />

      <section className="py-12 ">
        <Container>
          <h1 className="text-3xl font-semibold mb-3">Privacy policy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            odio fugit ut cum perspiciatis saepe? Ad atque quas provident
            possimus sunt iusto rem ratione architecto recusandae, sit eius
            quasi corrupti et explicabo. Saepe, omnis eligendi veniam dolore
            amet quod aut animi atque quasi, itaque modi distinctio? Laboriosam
            earum aspernatur quas, dolorem a ad? Quaerat non molestias saepe
            odit ipsum! Optio libero tempore id iusto accusantium? Sit eum a
            esse impedit quae modi optio quo perferendis aspernatur suscipit,
            deserunt quisquam voluptatibus. A vel ab quo at, deleniti quidem
            nisi blanditiis eligendi, vero cum voluptatem repellat, illum enim
            impedit porro nihil id tempore dolores magnam alias perspiciatis
            tenetur ipsum! Maiores aut harum beatae fuga optio, placeat
            reiciendis ut nesciunt cum repellat omnis molestias voluptatem
            veniam, in inventore cumque fugiat dignissimos. Quisquam dolore in
            ratione debitis adipisci. Incidunt tempora laboriosam, iure,
            excepturi doloribus iste nisi doloremque, maiores temporibus facere
            rem possimus! Reiciendis ducimus laudantium consequuntur dolore!
            Quasi numquam nesciunt quae rem facilis repellendus praesentium
            atque officia vitae repudiandae, a ex ab voluptatum nulla ratione
            aliquid illum pariatur hic reiciendis commodi voluptatibus! Quasi
            nobis id, deserunt dolor repellendus molestiae velit commodi sint
            maiores nam tempore, dolorem laborum accusamus repudiandae, odio
            explicabo dolorum veniam! Sit!
          </p>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default page;
