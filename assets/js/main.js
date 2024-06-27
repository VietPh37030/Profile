/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

// Initialize EmailJS
emailjs.init('yyFJ1QzYTrOB8_slt');

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_wo9cxmu', 'template_3gx84f9', '#contact-form')
    .then(
      (response) => {
        console.log('Success:', response.status, response.text);
        contactMessage.textContent = 'Gửi yêu cầu thành công 🥰';
        setTimeout(()=>{
          contactMessage.textContent =''
        },5000)
        contactForm.reset()
      },
      (error) => {
        console.error('Error:', error);
        contactMessage.textContent = 'Gửi yêu cầu thất bại 😅';
      }
    );
};

contactForm.addEventListener('submit', sendEmail);
/////////////////Show scroll up////////////////////
const scrollUp =() =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
  :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

const sections = document.querySelectorAll('section[id]'); 
const scrollActive = () => {
  const scrolly = window.pageYOffset; // Lấy vị trí cuộn hiện tại của trang// Lấy tất cả các phần tử có lớp "section"

  sections.forEach(current => { // Lặp qua từng phần tử
    const sectionTop = current.offsetTop -58; // Lấy vị trí đầu trang của phần tử hiện tại
    const sectionHeight = current.offsetHeight; // Lấy chiều cao của phần tử hiện tại
    const sectionId = current.getAttribute('id'); // Lấy ID của phần tử hiện tại

    const sectionsClass = document.querySelector('.nav__menu a[href*='+sectionId+']'); // Lấy phần tử điều hướng tương ứng với phần tử hiện tại

    if (scrolly  > sectionTop && scrolly <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link'); // Thêm lớp "active-link" vào phần tử điều hướng tương ứng
    } else {
      sectionsClass.classList.remove('active-link'); // Xóa lớp "active-link" khỏi phần tử điều hướng tương ứng
    }
  });
}
window.addEventListener('scroll',scrollActive)
const sr = ScrollReveal({
  origin:'top',
  distance: '60px',
  duration:2500,
  delay:400,
  // reset:true

})
sr.reveal(`.home__data, .home__social ,.contact__container,.footer__container`)
sr.reveal(`.home__image`,{origin:'bottom'})
sr.reveal(`.about__data ,.skills__data`,{origin:'left'})
sr.reveal(`.about__image, .skills__content`,{origin:'right'})
sr.reveal(`.services__card , .projects__card`,{interval:100})