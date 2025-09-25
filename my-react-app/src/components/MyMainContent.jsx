//immagini per barra blu
import digitalComics from "../assets/buy-comics-digital-comics.png";
import merchandise from "../assets/buy-comics-merchandise.png";
import subscription from "../assets/buy-comics-subscriptions.png";
import shopLocator from "../assets/buy-comics-shop-locator.png";
import powerVisa from "../assets/buy-dc-power-visa.svg";

const MyMainContent = () => {
  return (
    <main>
      <div className="black-bar">
        <div className="black-bar-space">
          <p>--&gt; Content goes here &lt;--</p>
        </div>
      </div>

      <div className="blue-bar">
        <div className="blue-bar-space">
          <ul>
            <li>
              <a href="#">
                <img src={digitalComics} alt="Digital Comics" />
                <span>DIGITAL COMICS</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={merchandise} alt="DC Merchandise" />
                DC MERCHANDISE
              </a>
            </li>
            <li>
              <a href="#">
                <img src={subscription} alt="Subscription" />
                SUBSCRIPTION
              </a>
            </li>
            <li>
              <a href="#">
                <img src={shopLocator} alt="Shop Locator" />
                COMIC SHOP LOCATOR
              </a>
            </li>
            <li>
              <a href="#">
                <img src={powerVisa} alt="DC Power Visa" />
                DC POWER VISA
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MyMainContent;
