import { Contacts, Wrapper } from "./Footer.css";

const Footer = () => {
    return (
      <Wrapper>
        <p>Copyright &copy; 2022 <a href="https://github.com/joshuaodunbaku" target="_blank">Joshua Odunbaku</a>. All rights reserved.</p>
        <Contacts>
          <a href="https://www.facebook.com/Bobbyjay22" target="_blank"><i class="fa-brands fa-facebook fa-lg"></i></a>
          <a href="https://www.twitter.com/Bobbyjay2_0" target="_blank"><i class="fa-brands fa-twitter fa-lg"></i></a>
          <a href="https://www.linkedin.com/in/joshua-odunbaku-6522231b4" target="_blank"><i class="fa-brands fa-linkedin fa-lg"></i></a>
        </Contacts>
      </Wrapper>
    )
  }
  
  export default Footer;