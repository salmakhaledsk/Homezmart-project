body.style.margin = 0;
const navBar = document.createElement("nav");
navBar.style.display = "flex";
navBar.style.alignItems = "center";
navBar.style.justifyContent = "space-between";
navBar.style.backgroundColor = "#0071ce";
navBar.style.color = "#fff";
navBar.style.padding = "10px 20px";
navBar.style.position = "sticky";
navBar.style.top = "0";
navBar.style.zIndex = "1000";

const logo = document.createElement("a");
logo.href = "#";
const logoImg = document.createElement("img");
logoImg.src = "../Resources/blue.jpg";
logoImg.alt = "Logo";
logoImg.style.width = "100px";
logoImg.style.height = "50px";
logo.appendChild(logoImg);
navBar.appendChild(logo);

const navItems = document.createElement("ul");
navItems.style.display = "flex";
navItems.style.listStyle = "none";
navItems.style.margin = "0";
navItems.style.padding = "0";

const dropdownItems = [
  {
    title: "About",
    subItems: [
      { text: "Business Better", href: "#" },
      { text: "Leadership", href: "#" },
    ],
  },
  {
    title: "News",
    subItems: [
      { text: "Events", href: "#" },
      { text: "Media Library", href: "#" },
    ],
  },
  {
    title: "Purpose",
    subItems: [
      { text: "Opportunities", href: "#" },
      { text: "Community", href: "#" },
    ],
  },
  {
    title: "Investors",
    subItems: [
      { text: "Events", href: "#" },
      { text: "Stock Information", href: "#" },
    ],
  },
  {
    title: "Suppliers",
    subItems: [
      { text: "Suppliers Development", href: "#" },
      { text: "Suppliers Requirement", href: "#" },
    ],
  },
];

dropdownItems.forEach((menu) => {
  const dropdown = document.createElement("li");
  dropdown.style.position = "relative";
  dropdown.style.margin = "0 15px";
  dropdown.style.cursor = "pointer";

  const link = document.createElement("a");
  link.textContent = menu.title;
  link.style.color = "#fff";
  link.style.textDecoration = "none";
  link.style.padding = "5px 10px";

  // Adding hover effect for underline
  link.addEventListener(
    "mouseenter",
    () => (link.style.borderBottom = "2px solid #fff")
  );
  link.addEventListener("mouseleave", () => (link.style.borderBottom = "none"));

  dropdown.appendChild(link);

  const dropdownMenu = document.createElement("ul");
  dropdownMenu.style.display = "none";
  dropdownMenu.style.position = "absolute";
  dropdownMenu.style.top = "100%";
  dropdownMenu.style.left = "0";
  dropdownMenu.style.backgroundColor = "#fff";
  dropdownMenu.style.padding = "10px 0";
  dropdownMenu.style.listStyle = "none";
  dropdownMenu.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  dropdownMenu.style.borderBottomLeftRadius = "8px";
  dropdownMenu.style.borderBottomRightRadius = "8px";
  dropdownMenu.style.zIndex = "1000";

  dropdownMenu.style.transform = "translateY(22px)";

  menu.subItems.forEach((subItem) => {
    const subItemLi = document.createElement("li");
    const subLink = document.createElement("a");
    subLink.href = subItem.href;
    subLink.textContent = subItem.text;
    subLink.style.color = "#0071ce";
    subLink.style.padding = "10px 20px";
    subLink.style.display = "block";
    subLink.style.textDecoration = "none";

    subLink.addEventListener(
      "mouseenter",
      () => (subLink.style.backgroundColor = "#e6f1fc")
    );
    subLink.addEventListener(
      "mouseleave",
      () => (subLink.style.backgroundColor = "#fff")
    );

    subItemLi.appendChild(subLink);
    dropdownMenu.appendChild(subItemLi);
  });

  dropdown.appendChild(dropdownMenu);

  dropdown.addEventListener(
    "mouseenter",
    () => (dropdownMenu.style.display = "block")
  );
  dropdown.addEventListener(
    "mouseleave",
    () => (dropdownMenu.style.display = "none")
  );

  navItems.appendChild(dropdown);
});

const staticLinks = [
  { text: "Careers", href: "#" },
  { text: "Ask Walmart", href: "#" },
];

staticLinks.forEach((linkItem) => {
  const linkLi = document.createElement("li");
  linkLi.style.margin = "0 15px";
  const link = document.createElement("a");
  link.href = linkItem.href;
  link.textContent = linkItem.text;
  link.style.color = "#fff";
  link.style.textDecoration = "none";

  link.addEventListener(
    "mouseenter",
    () => (link.style.borderBottom = "2px solid #fff")
  );
  link.addEventListener("mouseleave", () => (link.style.borderBottom = "none"));

  linkLi.appendChild(link);
  navItems.appendChild(linkLi);
});

navBar.appendChild(navItems);
document.body.appendChild(navBar);

const rightDiv = document.createElement("div");
rightDiv.style.display = "flex";
rightDiv.style.alignItems = "center";

const searchIcon = document.createElement("span");
searchIcon.textContent = "🔍";
searchIcon.style.cursor = "pointer";
searchIcon.style.marginRight = "10px";
searchIcon.style.fontSize = "20px";

searchIcon.addEventListener("click", () => {
  navItems.style.display = "none";
  searchBox.style.display = "block";
  searchBox.focus();
});

const searchBox = document.createElement("input");
searchBox.type = "text";
searchBox.placeholder = "Search...";
searchBox.style.display = "none";
searchBox.style.width = "300px";
searchBox.style.padding = "10px";
searchBox.style.borderRadius = "25px";
searchBox.style.border = "1px solid #fff";
searchBox.style.outline = "none";

searchBox.addEventListener("blur", () => {
  navItems.style.display = "flex";
  searchBox.style.display = "none";
});

const separator = document.createElement("div");
separator.style.width = "1px";
separator.style.height = "30px";
separator.style.backgroundColor = "#fff";
separator.style.margin = "0 10px";

const shopLink = document.createElement("a");
shopLink.href = "#";
shopLink.textContent = "Shop";
shopLink.style.color = "#fff";
shopLink.style.textDecoration = "none";
shopLink.style.fontSize = "16px";

rightDiv.appendChild(searchIcon);
rightDiv.appendChild(searchBox);
rightDiv.appendChild(separator);
rightDiv.appendChild(shopLink);

navBar.appendChild(rightDiv);

document.body.prepend(navBar);

const h1 = document.createElement("h1");
h1.textContent = "About us";
h1.style.textAlign = "center";
h1.style.marginBottom = "20px";
document.body.appendChild(h1);

const hr1 = document.createElement("hr");
hr1.style.width = "85%";
hr1.style.margin = "10px auto";
hr1.style.border = "1px solid #ccc";
document.body.appendChild(hr1);

const div1 = document.createElement("div");
div1.style.width = "85%";
div1.style.margin = "0 auto";
div1.style.backgroundColor = "";
div1.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";

const iframe = document.createElement("iframe");
iframe.src =
  "https://player.vimeo.com/video/1041226868?controls=1&h=5623bd9700";
iframe.style.width = "100%";
iframe.style.height = "400px";
iframe.style.border = "none";
div1.appendChild(iframe);

const p1 = document.createElement("p");
p1.textContent =
  "Walmart today is a people-led, tech-powered omnichannel retailer dedicated to helping people save money and live better.";
div1.appendChild(p1);

const p2 = document.createElement("p");
p2.innerHTML = `Since <a href="#">Sam Walton</a> opened the first Walmart, we have opened thousands of stores across the U.S. and internationally. Around the world, customers want the same things: value, a broad assortment of quality items and services, a convenient and enjoyable shopping experience, and to do business with a company they trust. We are on a mission to meet our customers and members wherever they are, with the things they want, where and how they want them. And although the ways we deliver these experiences is changing, and changing fast, our promise to improve the customer and associate experience is constant.`;
div1.appendChild(p2);

const ul1 = document.createElement("ul");

const list1 = [
  "We live our values and provide opportunities for associates to grow, thrive and belong.",
  "We create delightful experiences, run intelligent operations and shape a better future through innovation.",
  "We serve our customers and members with the things they want, when, where and how they want them, saving them time.",
  "We live our commitment to Every Day Low Prices.",
  "We enable people to be healthier and build their wealth, and we strengthen communities and the planet.",
];

list1.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul1.appendChild(li);
});
div1.appendChild(ul1);

const p3 = document.createElement("p");
p3.textContent =
  "In a world that’s always changing, we believe we need to be willing to evolve while staying true to who we are. And we are. We innovate and change alongside our associates and customers in ways that align with our timeless values. By doing this, we help communities thrive and strengthen the world around us.";
div1.appendChild(p3);

document.body.appendChild(div1);

const div2 = document.createElement("div");
div2.style.margin = "20px auto";
div2.style.width = "85%";
div2.style.backgroundColor = "#fafafa";
div2.style.borderLeft = "3px solid #999999";
div2.style.padding = "20px";

const h2_1 = document.createElement("h2");
h2_1.textContent = "At a Glance";
div2.appendChild(h2_1);

const ul2 = document.createElement("ul");

const list2 = [
  "75% of salaried store, club and supply chain managers in the U.S. begin as hourly associates.",
  "Walmart has invested $1 billion in education and skills training between 2021 - 2026.",
  "Each week, approximately 255 million customers and members visit our more than 10,500 stores and numerous eCommerce websites in 19 countries.",
  "Our unrivaled global supply chain moves more than 100 billion items per year.",
  "With our $350 billion investment in items made, grown or assembled in the U.S., we’re supporting more than 750,000 jobs.",
  "We are targeting zero emissions by 2040 without carbon offsets and 100% renewable energy across our operations by 2035.",
];

list2.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul2.appendChild(li);
});
div2.appendChild(ul2);
document.body.appendChild(div2);

const div3 = document.createElement("div");
div3.style.margin = "20px auto";
div3.style.width = "85%";

const h2_2 = document.createElement("h2");
h2_2.textContent = "Sam’s Club";
div3.appendChild(h2_2);

const p4 = document.createElement("p");
p4.textContent =
  "At Sam’s Club, we’re pioneering the future of retail, providing members exclusive access to value, convenience and modern omnichannel shopping experiences. Our curated selection includes quality fresh food and Member's Mark items, along with innovative technology and services like Scan & Go, curbside pickup and home delivery.";
div3.appendChild(p4);

document.body.appendChild(div3);

const div4 = document.createElement("div");
div4.style.margin = "20px auto";
div4.style.width = "85%";

const h2_3 = document.createElement("h2");
h2_3.textContent = "Explore More";
div4.appendChild(h2_3);

const ul3 = document.createElement("ul");

const list3 = [
  {
    text: "Investor Resources",
    link: "https://stock.walmart.com/home/default.aspx",
  },
  { text: "Latest News", link: "https://www.example2.com" },
  { text: "Leadership", link: "https://www.example2.com" },
  { text: "Walmart's New Home Office", link: "https://www.example2.com" },
  { text: "Working at Walmart", link: "https://www.example2.com" },
];

list3.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${item.link}" target="_blank">${item.text}</a>`;
  ul3.appendChild(li);
});
div4.appendChild(ul3);
document.body.appendChild(div4);
h1.style.fontSize = "3 rem";
const allH2 = document.querySelectorAll("h2");
allH2.forEach((h2) => {
  h2.style.fontSize = "2.5rem";
  h2.style.marginBottom = "10px";
});

const allP = document.querySelectorAll("p");
allP.forEach((p) => {
  p.style.fontSize = "1.5rem";
  p.style.lineHeight = "1.6";
});
const allul = document.querySelectorAll("ul");
allul.forEach((ul) => {
  ul.style.fontSize = "1.5rem";
  ul.style.lineHeight = "1.6";
});

const footer = document.createElement("footer");
footer.style.backgroundColor = "#f2f2f2";
footer.style.padding = "20px 0";
footer.style.marginTop = "20px";

const container = document.createElement("div");
container.style.width = "85%";
container.style.margin = "0 auto";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "20px";
footer.appendChild(container);

const footerColumns = [
  {
    title: "About Us",
    description: "Learn more about HomeZmart and our mission.",
    links: [
      { text: "Our Story", href: "#" },
      { text: "Team", href: "#" },
      { text: "Careers", href: "#" },
    ],
  },
  {
    title: "Contact Us",
    description: "Get in touch with us for any inquiries.",
    links: [
      { text: "Email: support@homezmart.com", href: "#" },
      { text: "Phone: +1 234 567 890", href: "#" },
      { text: "Address: 123 Main St, Anytown, USA", href: "#" },
    ],
  },
  {
    title: "Customer Service",
    description: "",
    links: [
      { text: "FAQ", href: "#" },
      { text: "Order Tracking", href: "#" },
      { text: "Returns & Refunds", href: "#" },
    ],
  },
  {
    title: "Legal",
    description: "",
    links: [
      { text: "Terms & Conditions", href: "#" },
      { text: "Privacy Policy", href: "#" },
    ],
  },
];

footerColumns.forEach((column) => {
  const colDiv = document.createElement("div");
  colDiv.style.flex = "1 1 calc(25% - 20px)";
  colDiv.style.minWidth = "200px";

  const h3 = document.createElement("h3");
  h3.textContent = column.title;
  colDiv.appendChild(h3);

  if (column.description) {
    const p = document.createElement("p");
    p.textContent = column.description;
    colDiv.appendChild(p);
  }

  const ul = document.createElement("ul");
  column.links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
    a.style.textDecoration = "none";
    a.style.color = "#333";
    li.appendChild(a);
    ul.appendChild(li);
  });
  colDiv.appendChild(ul);

  container.appendChild(colDiv);
});

const copyright = document.createElement("p");
copyright.textContent = "© 2024 HomeZmart. All rights reserved.";
copyright.style.textAlign = "center";
copyright.style.marginTop = "20px";
container.appendChild(copyright);

document.body.appendChild(footer);
