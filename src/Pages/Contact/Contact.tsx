import Banner from "../../Components/Banner/Banner";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import Footer from "../../Components/Footer/Footer";
import "./Contact.scss";

export default function Contact() {
  return (
    <main className="contact">
      <Banner />
      <DropDownMenu />
      <section className="contact-content">
        For all inquiries, you can reach me in DM via my socials, or by mail at
        alicej.pro@hotmail.com
        <br />
        I'm based in Belgium but open to work with clients from all over Europe
        !
        <div className="contact-links">
          <a className="instagram" href="https://www.instagram.com/jnmrtmedia/">
            Instagram
          </a>
          <a className="facebook" href="https://www.facebook.com/jnmrtmedia/">
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
