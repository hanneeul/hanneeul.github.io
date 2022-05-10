document.guestbookFrm.addEventListener("submit", (e) => {
    const usernameVal = username.value;
    const emailVal = email.value;
    const pwVal = pw.value;
});

  const saveGuestbook = () => {

    const usernameVal = username.value;
    const emailVal = email.value;
    const pwVal = pw.value;
  
    // 방명록객체 생성
    const guestbook = new Guestbook(usernameVal, emailVal, pwVal);
    console.log(guestbook);
  
    // guestbooks 배열 관리
    const guestbooks = JSON.parse(localStorage.getItem("guestbooks")) || [];
    guestbooks.push(guestbook);
  
    localStorage.setItem("guestbooks", JSON.stringify(guestbooks));
  
    // 폼 초기화
    // document.guestbookFrm.reset();
  
    // 화면 render
    renderGuestbook(guestbooks);
  };
  
  class Guestbook {
    constructor(username, email, pw, datetime = Date.now()){
      this.username = username;
      this.email = email;
      this.pw = pw;
      this.datetime = datetime; // 기본값은 현재시점
    }
  }
  
  const renderGuestbook = (guestbooks = JSON.parse(localStorage.getItem("guestbooks"))) => {
    const usernameVal = username.value;
    const emailVal = email.value;
    const pwVal = pw.value;
    const pwcVal = pwc.value;

    const tbody = document.querySelector("#tb-guest tbody");
    tbody.innerHTML = ""; // 초기화
  
    guestbooks.forEach((guestbook, index) => {
      if(usernameVal==="" || pwVal==="" || emailVal==="" || pwVal!=pwcVal || !(emailVal.includes(".com")))
        return false;
      const {username, email, pw, datetime} = guestbook;
      const html = `<tr>
        <td>${index+1}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${pw}</td>
        <td>${formatDatetime(datetime)}</td>
      </tr>`
      tbody.innerHTML += html;
    });
  };
  
  const formatDatetime = (millis) => {
    const d = new Date(millis);
    const f = (n) => n<10 ? "0"+n : n;
  
    const MM = f(d.getMonth() + 1);
    const dd = f(d.getDate());
    const HH = f(d.getHours());
    const mm = f(d.getMinutes());
  
    return `${MM}/${dd} ${HH}:${mm}`;
  };
  
//   window.addEventListener("load", () => {
//     renderGuestbook();
//   });
