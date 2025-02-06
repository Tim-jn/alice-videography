import BackToTop from "../../Components/BackToTop/BackToTop";
import Banner from "../../Components/Banner/Banner";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import Footer from "../../Components/Footer/Footer";
import "./Bio.scss";

export default function Bio() {
  return (
    <main className="bio">
      <Banner />
      <DropDownMenu />
      <BackToTop />
      <section className="bio-content">
        Hi there! I'm Alice. I've started working in videography in 2015 while
        studying Performing Arts at uLiège. I'm a video geek and basically
        self-taught - I love to constantly discover new things I can do with my
        gear and new ways to express myself through my work. I love challenges
        and creative ideas! Since 2022, I've centered my work around music videos
        and after movies but I also do corporate and editing work. You can see that
        I thrive through long terms collaborations, with bands such as Young
        Enough, Pool Party Chicks or Alcatraz Metal Festival (BE). If you're looking for 
        a young motivated (queer) girl to help you build your visual identity, just 
        contact me!
        I'd be happy to chat 🌸
        <br />
        <br />
        Hello! Moi, c'est Alice. J'ai commencé à travailler dans la réalisation
        en 2015, pendant mes études en Arts du Spectacle à l'uLiège. Je suis une
        nerd de la vidéo et j'ai appris principalement par moi-même - j'aime
        découvrir constamment de nouvelles choses et possibilités pour
        m'exprimer à travers mon travail. J'adore le challenge et les idées
        novatrices! Depuis 2022, j'ai recentré mon travail autour des clips musicaux, 
        after movies, mais je réalise également du corporate et du
        travail de montage. Comme vous pouvez remarquer, je m'épanouis
        particulièrement à travers des collaborations sur le long terme, avec
        des groupes comme Young Enough ou Pool Party Chicks ou encore au festival 
        Alcatraz Metal (BE). Si vous êtes à la recherche d'une personne jeune (queer) 
        et motivée pour vous aider à construire votre identité visuelle, 
        contactez-moi ! Je serai heureuse d'en discuter avec vous 🌸
      </section>
      <Footer />
    </main>
  );
}
