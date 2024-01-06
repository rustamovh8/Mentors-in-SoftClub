let box = document.querySelector(".box");
let infoModal = document.querySelector(".infoModal");
let ix = document.querySelector("#ix");
let divUser = document.querySelector(".divUser");
let div = document.querySelector(".div");
let divLeve = document.querySelector(".divLeve");
let ilist = document.querySelector("#ilist");
let icells = document.querySelector("#icells");
let table = document.querySelector("table");
let tbody = document.querySelector(".tbody");

icells.onclick = () => {
  box.style.display = "flex";
  table.style.display = "none";
};

ilist.onclick = () => {
  box.style.display = "none";
  table.style.display = "block"
};

ix.onclick = () => {
  infoModal.close();
};

export default function getData(data) {
  box.innerHTML = "";
  data.forEach((el) => {
    let container = document.createElement("div");
    container.classList.add("container");
    container.onclick = () => {
      infoModal.showModal();
      let h1 = document.createElement("h1");
      h1.innerHTML = el.title;
      h1.classList.add("h1");

      let position = document.createElement("h2");
      position.innerHTML = el.position;
      position.style.color = "rgb(72, 187, 249)";
      position.style.marginLeft = "5px";

      let h2Position = document.createElement("h2");
      h2Position.innerHTML = "Position:";
      h2Position.classList.add("h2Position");

      let divPosition = document.createElement("div");
      divPosition.classList.add("divPosition");

      let img = document.createElement("img");
      img.src = el.avatar;

      let divImg = document.createElement("div");
      divImg.classList.add("Img");

      let divcontent = document.createElement("div");
      divcontent.classList.add("divconten");

      let Work2 = document.createElement("h2");
      Work2.innerHTML = el.work;
      let Work = document.createElement("h2");
      Work.innerHTML = "Work place:";
      let divwork = document.createElement("div");
      divwork.classList.add("divwork");

      let experience = document.createElement("h2");
      experience.innerHTML = el.experience;
      let Experience = document.createElement("h2");
      Experience.innerHTML = "Experience:";
      let divExperience = document.createElement("div");
      divExperience.classList.add("divwork");

      let email = document.createElement("h2");
      // email.innerHTML = el.email
      let Email = document.createElement("h2");
      Email.innerHTML = "Email:";
      let divemail = document.createElement("div");
      divemail.classList.add("divwork");

      let telegram = document.createElement("h2");
      // telegram.innerHTML = el.telegram
      let Telegram = document.createElement("h2");
      Telegram.innerHTML = "Telegram:";
      let divtelegram = document.createElement("div");
      divtelegram.classList.add("divwork");

      let account = document.createElement("h2");
      account.innerHTML = el.account;
      let Account = document.createElement("h2");
      Account.innerHTML = "Account:";
      let divaccount = document.createElement("div");
      divaccount.classList.add("divwork");

      let level = document.createElement("h2");
      level.innerHTML = el.level;
      level.style.color = "rgb(28, 126, 255)";
      let Level = document.createElement("h2");
      Level.innerHTML = "Level";
      Level.style.paddingBottom = "10px";
      let divLevel = document.createElement("div");
      divLevel.classList.add("divLevel");
      let hour = document.createElement("h2");
      hour.classList.add("hour");
      hour.innerHTML = "1 hour: 65 som";
      let divLevels = document.createElement("div");
      divLevels.classList.add("divLevels");

      divUser.append(divcontent, divImg);
      divImg.append(img);
      divPosition.append(h2Position, position);
      divcontent.append(h1, divPosition);
      divExperience.append(Experience, experience);
      divwork.append(Work, Work2);
      divaccount.append(Account, account);
      divemail.append(Email, email);
      divtelegram.append(Telegram, telegram);
      divLevel.append(Level, level);
      divLevels.append(divLevel, hour);
      divLeve.append(divLevels);
      div.append(divwork, divExperience, divaccount, divemail, divtelegram);
      infoModal.appendChild(divLeve, div, divUser);
    };

    let h1Title = document.createElement("h1");
    h1Title.innerHTML = el.title;

    let h3Phone = document.createElement("h3");
    h3Phone.innerHTML = el.phone;
    h3Phone.style.marginLeft = "5px";

    let h3Phone2 = document.createElement("h3");
    h3Phone2.innerHTML = "Phone:";

    let divPhone = document.createElement("div");
    divPhone.classList.add("divPhone");

    let divcontent = document.createElement("div");
    divcontent.classList.add("divcontent");

    let divcontent2 = document.createElement("div");
    divcontent2.classList.add("divcontent2");

    let p = document.createElement("p");
    p.innerHTML = "Group";
    p.classList.add("p");

    let liGroup = document.createElement("li");
    liGroup.innerHTML = el.group;

    let liGroup2 = document.createElement("li");
    liGroup2.innerHTML = el.group;

    let img = document.createElement("img");
    img.src = el.avatar;

    let divOpshi = document.createElement("div");
    divOpshi.classList.add("divOpshi");

    let divImg = document.createElement("div");
    divImg.classList.add("divImg");

    divPhone.append(h3Phone2, h3Phone);
    divImg.append(img);
    divOpshi.append(divcontent, divImg);
    divcontent.append(h1Title, divPhone);
    divcontent2.append(p, liGroup, liGroup2);
    container.append(divOpshi, divcontent2);
    box.appendChild(container);

    let tr = document.createElement("tr");
    tr.onclick = () => {
      infoModal.showModal();
      let h1 = document.createElement("h1");
      h1.innerHTML = el.title;
      h1.classList.add("h1");

      let position = document.createElement("h2");
      position.innerHTML = el.position;
      position.style.color = "rgb(72, 187, 249)";
      position.style.marginLeft = "5px";

      let h2Position = document.createElement("h2");
      h2Position.innerHTML = "Position:";
      h2Position.classList.add("h2Position");

      let divPosition = document.createElement("div");
      divPosition.classList.add("divPosition");

      let img = document.createElement("img");
      img.src = el.avatar;

      let divImg = document.createElement("div");
      divImg.classList.add("Img");

      let divcontent = document.createElement("div");
      divcontent.classList.add("divconten");

      let Work2 = document.createElement("h2");
      Work2.innerHTML = el.work;
      let Work = document.createElement("h2");
      Work.innerHTML = "Work place:";
      let divwork = document.createElement("div");
      divwork.classList.add("divwork");

      let experience = document.createElement("h2");
      experience.innerHTML = el.experience;
      let Experience = document.createElement("h2");
      Experience.innerHTML = "Experience:";
      let divExperience = document.createElement("div");
      divExperience.classList.add("divwork");

      let email = document.createElement("h2");
      // email.innerHTML = el.email
      let Email = document.createElement("h2");
      Email.innerHTML = "Email:";
      let divemail = document.createElement("div");
      divemail.classList.add("divwork");

      let telegram = document.createElement("h2");
      // telegram.innerHTML = el.telegram
      let Telegram = document.createElement("h2");
      Telegram.innerHTML = "Telegram:";
      let divtelegram = document.createElement("div");
      divtelegram.classList.add("divwork");

      let account = document.createElement("h2");
      account.innerHTML = el.account;
      let Account = document.createElement("h2");
      Account.innerHTML = "Account:";
      let divaccount = document.createElement("div");
      divaccount.classList.add("divwork");

      let level = document.createElement("h2");
      level.innerHTML = el.level;
      level.style.color = "rgb(28, 126, 255)";
      let Level = document.createElement("h2");
      Level.innerHTML = "Level";
      Level.style.paddingBottom = "10px";
      let divLevel = document.createElement("div");
      divLevel.classList.add("divLevel");
      let hour = document.createElement("h2");
      hour.classList.add("hour");
      hour.innerHTML = "1 hour: 65 som";
      let divLevels = document.createElement("div");
      divLevels.classList.add("divLevels");

      divUser.append(divcontent, divImg);
      divImg.append(img);
      divPosition.append(h2Position, position);
      divcontent.append(h1, divPosition);
      divExperience.append(Experience, experience);
      divwork.append(Work, Work2);
      divaccount.append(Account, account);
      divemail.append(Email, email);
      divtelegram.append(Telegram, telegram);
      divLevel.append(Level, level);
      divLevels.append(divLevel, hour);
      divLeve.append(divLevels);
      div.append(divwork, divExperience, divaccount, divemail, divtelegram);
      infoModal.appendChild(divLeve, div, divUser);
    };

    let tdTitle = document.createElement("td");
    tdTitle.innerHTML = el.title;
    tdTitle.classList.add("tdTitle")

    let tdGroup = document.createElement("div");
    tdGroup.innerHTML = el.Group
    let divtdGroup = document.createElement("td")
    divtdGroup.classList.add("divtdGroup")
    tdGroup.classList.add("tdGroup")

    let tdPhone = document.createElement("td");
    tdPhone.innerHTML = el.phone;
    tdPhone.classList.add("tdPhone")

    let tdPositino = document.createElement("td");
    tdPositino.innerHTML = el.position;
    tdPositino.classList.add('tdPositino')

    divtdGroup.appendChild(tdGroup)
    tr.append(tdTitle, divtdGroup, tdPhone, tdPositino);
    tbody.appendChild(tr);
  });
}
