const Navbar = () => {
  const links = [
    { id: 1, text: "CHARACTERS", url: "#", current: false },
    { id: 2, text: "COMICS", url: "#", current: false },
    { id: 3, text: "MOVIES", url: "#", current: false },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "GAMES", url: "#", current: false },
    { id: 6, text: "COLLECTIBLES", url: "#", current: false },
    { id: 7, text: "VIDEOS", url: "#", current: false },
    { id: 8, text: "FANS", url: "#", current: false },
    { id: 9, text: "NEWS", url: "#", current: false },
    { id: 10, text: "SHOP", url: "#", current: false },
  ];

  /* navbar dinamica */
  const linkList = links.map((link) => (
    <li key={link.id}>
      <a href={link.url} className={link.current ? "active" : ""}>
        {link.text}
      </a>
    </li>
  ));

  return (
    <nav>
      <figure className="cont-logo">
        <img src="/dc-logo.png" alt="logo" />
      </figure>

      <ul>{linkList}</ul>
    </nav>
  );
};

export default Navbar;
