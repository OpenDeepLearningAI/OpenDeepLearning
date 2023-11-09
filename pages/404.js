import Image from "next/image";
import Gif from "public/gif/portal.gif"
import { useEffect } from "react";
import { Link } from "nextra-theme-docs";

function App() {
  useEffect(() => {
    // Get the stars and background elements
    const stars = document.getElementById("stars");
    const backG = document.getElementById("backG");

    // Create a function to generate a single star
    function generateStar(randomAngle = Math.floor(Math.random(100) * 360)) {
      const star = document.createElement("div");
      star.classList.add("singleStar");

      // Set the star's position and size
      const left = Math.floor(Math.random() * 100);
      const top = Math.floor(Math.random() * 100);
      const size = Math.floor(Math.random() * 4);
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.left = (left / 100) * 100 + "%";
      star.style.top = (top / 100) * 100 + "%";

      // Add the star to the stars element
      stars.appendChild(star);

      // Add a mouseover event listener to the star
      star.addEventListener("mouseover", () => {
        // Rotate the star
        star.style.rotate = `${Math.floor(Math.random(100) * 360) - randomAngle / 5
          }deg`;

        // Add the shootingStar class to the star
        star.classList.add("shootingStar");

        // Remove the star after 2 seconds
        setTimeout(() => {
          star.style.display = "none";
        }, 2000);
      });
    }

    // Generate 300 stars
    for (let i = 0; i <= 150; i++) {
      generateStar();
    }
  }, []);

  return (
    <div id="main" className="section" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div id="backG">
        <div id="starsContainer">
          <div id="stars">
              <Image src={Gif} alt="gif" width={300} height={300} />
              <h1 style={{ color: "greenyellow", fontSize: "2rem", fontFamily: "sans-serif" }}>Error 404 <br /> <Link href="/" style={{ color: "greenyellow", fontSize: "1.5rem" }}>Back to home</Link></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
