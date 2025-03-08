// import { useState, useEffect } from "react";

// import natalya from "../assets/images/Natalya.webp";

const HeroBlock = () => {
  // const [showText, setShowText] = useState(true);
  // const [effect, setEffect] = useState(false);

  // const identity = "hero";

  // useEffect(() => {
  //   if (effect & !showText) {
  //     document.getElementById(identity)?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   }
  // }, [effect, showText]);

  // const handleClick = () => {
  //   setShowText(!showText);
  //   setEffect(true);
  // };

  // const scrollToFooter = () => {
  //   const footer = document.getElementById("footer");
  //   footer?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <div className="flex flex-col gap-12 sm:grid md:flex-none sm:grid-cols-2">
        <div className="bg-blue-200">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam
            rerum numquam facere iusto tempore error, magni excepturi corporis
            nulla delectus provident ipsum suscipit aperiam saepe labore laborum
            facilis quo? Delectus vel modi maxime! Magnam, excepturi error neque
            blanditiis illo laboriosam cumque corrupti repudiandae iure
            temporibus obcaecati eos illum fugit. Facere dignissimos, eos est
            tenetur laboriosam qui! Modi, libero dolorem!
          </p>
        </div>
        <div className="md:bg-red-200">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            molestias eius dignissimos repellat, praesentium minima rem nam
            provident aperiam reprehenderit id accusantium ut quidem, porro
            excepturi, voluptatem fuga possimus ipsam? Expedita laboriosam
            maiores, nulla saepe, facere eaque at aliquid nemo corporis
            reprehenderit doloremque asperiores molestiae. Magni sit eius illo
            veritatis libero velit quisquam, molestias dicta! Neque corrupti cum
            aperiam esse. Doloribus provident ut eos consequuntur esse officia
            illum dolore, consequatur natus mollitia possimus modi voluptate
            sequi ipsa eveniet eaque, velit recusandae temporibus ea,
            repudiandae voluptatem ex iusto eum! Facere, error. Reprehenderit
            distinctio eius doloribus quaerat, nisi nesciunt mollitia ad autem
            harum magni, maiores itaque numquam officiis deleniti voluptatum
            vero aliquam possimus vitae alias unde necessitatibus voluptate?
            Nulla dolor libero fugit. Necessitatibus voluptatum eos blanditiis
            facere minima aut ullam dolorem iure doloremque dolore beatae
            deleniti eius cumque animi quasi vel, molestias quae consequuntur
            autem. Exercitationem quasi vel itaque assumenda quos reiciendis?
            Non accusamus culpa commodi minus incidunt necessitatibus quia odio
            corrupti tenetur nesciunt quidem, excepturi temporibus itaque
            numquam. Amet facilis, est numquam veniam blanditiis iste provident
            culpa, nulla reprehenderit aspernatur facere.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroBlock;
