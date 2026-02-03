import { useState } from "react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function Index() {
  const [email, setEmail] = useState("");

  // Animation hooks for each section
  const excerptAnimation = useInViewAnimation();
  const mailingListAnimation = useInViewAnimation();
  const orderNowAnimation = useInViewAnimation();
  const contentWarningAnimation = useInViewAnimation();
  const audiobookAnimation = useInViewAnimation();
  const contactAnimation = useInViewAnimation();
  const readerPhotosAnimation = useInViewAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-darkGray flex justify-center items-center px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col justify-center items-center gap-0 lg:gap-[-50px]">
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-[170px] text-white text-center leading-none">
            Crimson Fall
          </h1>
          <p className="font-cinzel text-xl sm:text-2xl md:text-3xl lg:text-[55px] text-black text-center">
            by M.A. Glaude
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-crimson flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 px-4 py-4 md:py-6">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white/90 font-roboto text-base md:text-xl lg:text-[30px] font-normal uppercase tracking-tight hover:text-white transition-colors"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("excerpt")}
          className="text-white/90 font-roboto text-base md:text-xl lg:text-[30px] font-normal uppercase tracking-tight hover:text-white transition-colors"
        >
          Excerpt
        </button>
        <button
          onClick={() => scrollToSection("content-warning")}
          className="text-white/90 font-roboto text-base md:text-xl lg:text-[30px] font-normal uppercase tracking-tight hover:text-white transition-colors"
        >
          Content Warning
        </button>
        <button
          onClick={() => scrollToSection("mailing-list")}
          className="text-white/90 font-roboto text-base md:text-xl lg:text-[30px] font-normal uppercase tracking-tight hover:text-white transition-colors"
        >
          Mailing List
        </button>
        <button
          onClick={() => scrollToSection("reader-photos")}
          className="text-white/90 font-roboto text-base md:text-xl lg:text-[30px] font-normal uppercase tracking-tight hover:text-white transition-colors"
        >
          Reader Photos
        </button>
        <button
          onClick={() => scrollToSection("order-now")}
          className="text-white/90 font-roboto text-base md:text-xl lg:text-[30px] font-normal uppercase tracking-tight hover:text-white transition-colors"
        >
          Order Now
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        {/* About Section */}
        <section id="about" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Book Cover */}
            <div className="flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4eba651494f4c6be1e31aa5ebc9598b3f8f0e18f?width=872"
                alt="Crimson Fall Book Cover"
                className="w-64 md:w-80 lg:w-[436px] h-auto rounded shadow-[0_0_20px_rgba(139,0,0,0.5)]"
              />
            </div>

            {/* About Content */}
            <div className="flex-1 flex flex-col justify-center items-center gap-6 lg:gap-8">
              <p className="text-black text-center font-roboto text-lg md:text-xl lg:text-2xl italic">
                Blood, Jazz, and Forbidden Love: A vampire's quest for redemption in a city on the
                edge of chaos.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
                <span className="bg-crimson text-white/80 font-roboto text-base md:text-xl lg:text-[30px] px-4 md:px-5 py-1 md:py-2 rounded-md">
                  Supernatural
                </span>
                <span className="bg-crimson text-white/80 font-roboto text-base md:text-xl lg:text-[30px] px-4 md:px-5 py-1 md:py-2 rounded-md">
                  Thriller
                </span>
                <span className="bg-crimson text-white/80 font-roboto text-base md:text-xl lg:text-[30px] px-4 md:px-5 py-1 md:py-2 rounded-md">
                  Vampire
                </span>
                <span className="bg-crimson text-white/80 font-roboto text-base md:text-xl lg:text-[30px] px-4 md:px-5 py-1 md:py-2 rounded-md">
                  Romance
                </span>
                <span className="bg-crimson text-white/80 font-roboto text-base md:text-xl lg:text-[30px] px-4 md:px-5 py-1 md:py-2 rounded-md">
                  Historical
                </span>
                <span className="bg-crimson text-white/80 font-roboto text-base md:text-xl lg:text-[30px] px-4 md:px-5 py-1 md:py-2 rounded-md">
                  Urban Fantasy
                </span>
                <span className="bg-crimson text-white/80 font-roboto text-base md:text-xl lg:text-[30px] px-4 md:px-5 py-1 md:py-2 rounded-md">
                  Urban Gothic
                </span>
              </div>

              <p className="text-black text-center font-roboto text-lg md:text-xl lg:text-2xl">
                In 1920s Chicago, a newly-turned vampire struggling to retain her fading humanity gets
                caught between warring factions of vampires and vampire-hunters. With a conflicted
                hunter as her only ally, she must unravel a conspiracy dedicated to fanning the flames
                of conflict before the city erupts in violence.
              </p>

              {/* Amazon Button */}
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-md group"
              >
                <div className="relative rounded-2xl border-3 border-black bg-black shadow-lg overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl border-3 border-[#BF7171] bg-white translate-y-[1px]"></div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-crimson to-crimson/70 translate-y-1 group-hover:translate-y-0.5 transition-transform"></div>
                  <div className="relative px-10 py-6 text-center">
                    <span className="text-white/90 font-roboto text-xl md:text-2xl lg:text-[30px] font-semibold uppercase drop-shadow-md">
                      Amazon - Print and e-Book
                      <br />
                      Available now!
                    </span>
                  </div>
                </div>
              </a>

              {/* Review */}
              <div className="text-center">
                <p className="text-black font-roboto text-lg md:text-xl lg:text-2xl mb-2">
                  "A debut novel that quickly finds its voice and reels you into its plot."
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#FFD700] font-ptSerif text-xl md:text-2xl drop-shadow-[2px_2px_0_#555]">
                    ★★★★★
                  </span>
                  <span className="text-black font-ptSerif text-lg md:text-xl lg:text-2xl">
                    Goodreads Review
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-black text-center font-roboto text-lg md:text-xl lg:text-2xl mb-3">
                  Follow on social media for more information:
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f82c9a105a2169606167c74bb57fb08d851bcb7c?width=160"
                      alt="Facebook"
                      className="w-16 md:w-20 h-16 md:h-20"
                    />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1df15fb3832a893380975a64a57c66ce959d9658?width=160"
                      alt="YouTube"
                      className="w-16 md:w-20 h-16 md:h-20"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Excerpt Section */}
        <section
          ref={excerptAnimation.ref}
          id="excerpt"
          className={`py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white animate-fade-in-up ${
            excerptAnimation.isVisible ? "visible" : ""
          }`}
        >
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="relative mb-8 lg:mb-12">
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[70px] text-crimson">
                Excerpt
              </h2>
              <div className="w-full h-0.5 bg-crimson mt-4 lg:mt-6"></div>
            </div>

            {/* Excerpt Text */}
            <div className="relative">
              <p className="font-tinos text-xl md:text-2xl lg:text-[32px] leading-relaxed lg:leading-[55px] tracking-wide text-black">
                <span className="text-crimson text-6xl md:text-7xl lg:text-[130px] float-left leading-[60px] mr-2 mt-2">
                  R
                </span>
                osalind opened her mouth to reply, but her words caught in her
                throat. The man's pulse was visible in his neck as he tilted his
                head questioningly, a rhythmic call that drowned out everything
                else. She could almost taste his blood on her tongue, imagine
                how it would slip past her lips and flood through her cold body
                with delicious heat.
                <br />
                <br />
                "I … I …" she stammered, gripping the edge of the bar so tightly
                that her knuckles, impossibly, blanched even whiter against her
                deathless pallor.
                <br />
                <br />
                "First time here?" the bartender asked, misreading her
                hesitation. He leaned in closer, his scent overwhelming her
                senses. "Don't worry. I'll fix you up something special."
                <br />
                <br />
                Rosalind's world narrowed to that pulsing vein. For a moment,
                she wished that he would sense what she was. That he would
                panic. Run, so that she could give chase. She didn't want to
                just feed—she wanted to hunt. Rosalind's lips started to curl
                away from her teeth when something broke through her growing
                bloodlust.
              </p>
            </div>
          </div>
        </section>

        {/* Mailing List Section */}
        <section id="mailing-list" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="relative mb-8 lg:mb-12">
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[70px] text-crimson">
                Mailing List
              </h2>
              <div className="w-full h-0.5 bg-crimson mt-4 lg:mt-6"></div>
            </div>

            {/* Newsletter Form */}
            <div className="max-w-2xl mx-auto bg-[#F6F6F6] p-6 md:p-8 lg:p-10 rounded-md">
              <h3 className="font-openSans text-3xl md:text-4xl lg:text-5xl text-black mb-6 lg:mb-12">
                Newsletter
              </h3>
              <p className="font-openSans text-lg md:text-xl lg:text-[22px] text-black mb-6 lg:mb-12">
                Sign up for my mailing list to get updates about new release
                plus BONUS content like sneak previews and deleted scenes!
              </p>

              <form className="space-y-6 lg:space-y-8">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-6 text-lg md:text-xl lg:text-[22px] font-openSans text-black/75 border border-[#DEDEDE] rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson"
                />

                {/* reCAPTCHA placeholder */}
                <div className="flex justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/5326ccdca0e82586b1568be153b0cbee9f5d04f1?width=991"
                    alt="reCAPTCHA"
                    className="max-w-full h-auto"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-openSans text-lg md:text-xl lg:text-[22px] font-bold py-6 rounded-lg hover:bg-black/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Order Now Section */}
        <section id="order-now" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="relative mb-8">
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[70px] text-crimson">
                Order Now
              </h2>
              <div className="w-full h-0.5 bg-crimson mt-4 lg:mt-6"></div>
            </div>

            <p className="font-roboto text-lg md:text-xl lg:text-2xl text-black mb-8 lg:mb-10">
              Crimson Fall is available in print and e-Book editions, currently
              exclusively on Amazon. For news about future releases and
              availability from other vendors, please sign up for my mailing
              list.
            </p>

            {/* Amazon Button */}
            <div className="flex justify-center">
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-md group"
              >
                <div className="relative rounded-2xl border-3 border-black bg-black shadow-lg overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl border-3 border-[#BF7171] bg-white translate-y-[1px]"></div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-crimson to-crimson/70 translate-y-1 group-hover:translate-y-0.5 transition-transform"></div>
                  <div className="relative px-10 py-6 text-center">
                    <span className="text-white/90 font-roboto text-xl md:text-2xl lg:text-[30px] font-semibold uppercase drop-shadow-md">
                      Amazon - Print and e-Book
                      <br />
                      Available now!
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Content Warnings Section */}
        <section id="content-warning" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="relative mb-8">
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[70px] text-crimson">
                Content Warnings
              </h2>
              <div className="w-full h-0.5 bg-crimson mt-4 lg:mt-6"></div>
            </div>

            <div className="bg-lightGray p-6 md:p-8 lg:p-12 rounded-md">
              <p className="font-roboto text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
                Being this novel generally seeks for realistic depiction of
                violence in violent depictions of the times things may present
                include: Violence (blood and gore), Death, Suicidal ideation,
                Depression, and more. Please reach out to the author at{" "}
                <a
                  href="mailto:author@crimson-fall.com"
                  className="text-crimson hover:underline"
                >
                  author@crimson-fall.com
                </a>{" "}
                for a detailed content warning list.
              </p>
            </div>
          </div>
        </section>

        {/* Audiobook Section */}
        <section id="audiobook" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="relative mb-8">
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[70px] text-crimson">
                Audiobook
              </h2>
              <div className="w-full h-0.5 bg-crimson mt-4 lg:mt-6"></div>
            </div>

            <div className="space-y-6">
              <p className="font-roboto text-lg md:text-xl lg:text-2xl text-black">
                There is no "proper" audiobook at this time, though it is
                something being explored.
              </p>

              <p className="font-roboto text-lg md:text-xl lg:text-2xl text-black">
                <span className="uppercase">
                  HOWEVER — for accessibility purposes — there is a{" "}
                </span>
                <a
                  href="#"
                  className="text-crimson underline hover:no-underline"
                >
                  free audiobook
                </a>
                <span className="uppercase">
                  {" "}
                  made with a synthetic voice. The intention is to provide
                  something that is slightly better than what low quality
                  text-to-speech software can provide.
                </span>
              </p>

              <p className="font-roboto text-base md:text-lg lg:text-xl text-black italic pl-8 border-l-4 border-crimson">
                M. A. Glaude does not believe that this is a replacement for
                human audiobook performers. It is only meant to be a
                supplementary service until such time as a proper audiobook can
                be produced. The AI-generated narration may contain occasional
                pronunciation irregularities. Thank your for your understanding.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            {/* Section Title */}
            <div className="relative mb-8">
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[70px] text-crimson">
                Contact M. A. Glaude
              </h2>
              <div className="w-full h-0.5 bg-crimson mt-4 lg:mt-6 max-w-5xl mx-auto"></div>
            </div>

            <a
              href="mailto:author@crimson-fall.com"
              className="font-roboto text-3xl md:text-5xl lg:text-[70px] text-black hover:text-crimson transition-colors inline-block"
            >
              author@crimson-fall.com
            </a>
          </div>
        </section>

        {/* Reader Photos Section */}
        <section id="reader-photos" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="relative mb-8 lg:mb-12">
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-[70px] text-crimson">
                Reader Photos
              </h2>
              <div className="w-full h-0.5 bg-crimson mt-4 lg:mt-6"></div>
            </div>

            {/* Film Strip Carousel */}
            <div className="overflow-hidden bg-[#1A1A1A] rounded-xl">
              <div className="overflow-x-auto">
                <div className="flex gap-8 md:gap-12 p-4 md:p-6 min-w-max">
                  {/* Photo 1 */}
                  <div className="flex-shrink-0 bg-[#1A1A1A] border border-[#222] rounded-2xl p-1 shadow-lg">
                    <div className="bg-[#2A2A2A] border-3 border-[#444] rounded-xl p-5 shadow-inner">
                      <div className="w-48 md:w-64 h-64 md:h-80 bg-gradient-to-br from-purple-900 to-purple-700 rounded-lg mb-4"></div>
                      <p className="text-white/65 font-roboto text-sm md:text-base text-center">
                        Photo by r1ma78
                      </p>
                    </div>
                  </div>

                  {/* Photo 2 */}
                  <div className="flex-shrink-0 bg-[#1A1A1A] border border-[#222] rounded-2xl p-1 shadow-lg">
                    <div className="bg-[#2A2A2A] border-3 border-[#444] rounded-xl p-5 shadow-inner">
                      <div className="w-80 md:w-96 h-64 md:h-80 bg-gradient-to-br from-red-900 to-red-700 rounded-lg mb-4"></div>
                      <p className="text-white/65 font-roboto text-sm md:text-base text-center">
                        Photo by Melv
                      </p>
                    </div>
                  </div>

                  {/* Photo 3 */}
                  <div className="flex-shrink-0 bg-[#1A1A1A] border border-[#222] rounded-2xl p-1 shadow-lg">
                    <div className="bg-[#2A2A2A] border-3 border-[#444] rounded-xl p-5 shadow-inner">
                      <div className="w-64 md:w-80 h-64 md:h-80 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg mb-4"></div>
                      <p className="text-white/65 font-roboto text-sm md:text-base text-center">
                        Photo by Faenion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-darkGray py-12 md:py-16 px-4">
        <div className="text-center">
          <p className="font-roboto text-2xl md:text-3xl lg:text-5xl text-black">
            © 2025 M. A. Glaude. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
