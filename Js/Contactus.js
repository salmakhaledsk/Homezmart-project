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

const container = document.createElement("div");
container.style.width = "85%";
container.style.margin = "0 auto";
document.body.appendChild(container);

const h1 = document.createElement("h1");
h1.textContent = "Contact Walmart";
h1.style.textAlign = "left";
h1.style.fontSize = "3rem";
container.appendChild(h1);

const hr = document.createElement("hr");
hr.style.width = "100%";
hr.style.margin = "10px 0";
hr.style.border = "1px solid #d0d3d4";
container.appendChild(hr);

const imgDiv = document.createElement("div");
imgDiv.style.textAlign = "center";
imgDiv.style.margin = "20px 0";
const img = document.createElement("img");
img.src =
  "https://corporate.walmart.com/content/corporate/en_us/about/contact/jcr:content/par/image_2_0.img.png/1714171678566.png";
img.alt = "Walmart";
img.style.maxWidth = "100%";
imgDiv.appendChild(img);
container.appendChild(imgDiv);

const gridDiv = document.createElement("div");
gridDiv.style.display = "grid";
gridDiv.style.gridTemplateColumns = "repeat(3, 1fr)";
gridDiv.style.gap = "20px";
gridDiv.style.backgroundColor = "#fff";
gridDiv.style.padding = "20px";
gridDiv.style.borderRadius = "10px";

const titles = [
  "Need Help?",
  "Media and Journalists",
  "Financial Services",
  "Investor Relations",
  "Suppliers",
  "Health & Wellness",
];

const texts = [
  "Visit the Walmart.com Help Center to find answers to common questions, use our online chat and more. You may also contact our customer service team at 1-800-925-6278 (1-800-WALMART). For Sam's Club support, please visit the SamsClub.com Help Center.",
  "<strong>Are you a member of the media?</strong> <br>To contact Media Relations <a href='https://corporate.walmart.com/contact-us'>click here.</a>",
  "Find important customer service phone numbers for Walmart credit cards, <strong>MoneyCards</strong> and gift cards. Walmart Financial Help Center Sam's Club Credit Cards.",
  "<strong>Email Investor Relations</strong>: Walmart's transfer agent: Computershare (1-800-438-6278). Request Materials (annual report, proxy statement, 10-K or 10-Q).",
  "Learn how to apply to become a Walmart supplier. If you're a Walmart supplier and want to issue a press release that mentions Walmart or refers to doing business with Walmart, please work with your buyer / business contact to be connected to the appropriate communications team member.",
  "For Walmart associates with questions about <strong>benefits and health</strong>, visit <a href='https://One.Walmart.com'>One.Walmart.com</a>.",
];

for (let i = 0; i < titles.length; i++) {
  const columnDiv = document.createElement("div");
  columnDiv.style.padding = "20px";
  columnDiv.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
  columnDiv.style.backgroundColor = "#f2f2f2";
  columnDiv.style.borderRadius = "5px";
  columnDiv.style.border = "none";

  const h2 = document.createElement("h2");
  h2.textContent = titles[i];
  h2.style.fontSize = "1.8rem";
  h2.style.marginBottom = "10px";

  const p = document.createElement("p");
  p.innerHTML = texts[i];
  p.style.fontSize = "1.2rem";
  p.style.lineHeight = "1.6";

  columnDiv.appendChild(h2);
  columnDiv.appendChild(p);
  gridDiv.appendChild(columnDiv);
}

container.appendChild(gridDiv);

const footer = document.createElement("footer");
footer.style.backgroundColor = "#f2f2f2";
footer.style.padding = "20px 0";
footer.style.marginTop = "20px";

const footerContainer = document.createElement("div"); // تم تغيير الاسم هنا
footerContainer.style.width = "85%";
footerContainer.style.margin = "0 auto";
footerContainer.style.display = "flex";
footerContainer.style.flexWrap = "wrap";
footerContainer.style.gap = "20px";
footer.appendChild(footerContainer);

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
    a.style.color = "#0071ce";
    li.appendChild(a);
    ul.appendChild(li);
  });
  colDiv.appendChild(ul);

  footerContainer.appendChild(colDiv);
});

const copyright = document.createElement("p");
copyright.textContent = "© 2024 HomeZmart. All rights reserved.";
copyright.style.textAlign = "center";
copyright.style.marginTop = "20px";
footerContainer.appendChild(copyright);

document.body.appendChild(footer);
