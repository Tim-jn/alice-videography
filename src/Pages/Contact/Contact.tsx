import Banner from "../../Components/Banner/Banner";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import Footer from "../../Components/Footer/Footer";
import SEO from "../../Components/SEO/SEO";
import SkipLink from "../../Components/SkipLink/SkipLink";
import "./Contact.scss";

export default function Contact() {
  return (
    <main className="contact">
      <SkipLink />
      <SEO
        title="Contact"
        description="Get in touch with Alice J. for videography projects. Available for music videos, corporate work, and creative collaborations across Europe."
        keywords="contact videographer, hire videographer Belgium, video production contact, alice j contact"
      />
      <Banner />
      <DropDownMenu />
      <section id="main-content" className="contact-content">
        For all inquiries, you can reach me in DM via my socials, or by mail at
        alicej.pro@hotmail.com
        <br />
        I'm based in Belgium but open to work with clients from all over Europe
        !
        <div className="contact-links">
          <a 
            className="instagram" 
            href="https://www.instagram.com/jnmrtmedia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Alice J.'s Instagram profile"
          >
            Instagram
          </a>
          <a 
            className="facebook" 
            href="https://www.facebook.com/jnmrtmedia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Alice J.'s Facebook page"
          >
            Facebook
          </a>
        </div>
        Pour toute demande, vous pouvez me joindre en DM sur mes réseaux, ou par
        mail à alicej.pro@hotmail.com
        <br />
        Je suis basée en Belgique mais ouverte à l'idée de travailler avec des
        client de tous coins de l'Europe !
      </section>
      <Footer />
    </main>
  );
}
