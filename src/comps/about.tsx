import { ReactNode } from "react";

const About = (): ReactNode => {
  return (
    <div className="h-screen bg-lime-200 dark:bg-everforest_bg0 dark:text-white duration-100 pt-10">

      <div className="flex justify-center text-xl font-bold">
      <h3>About US</h3>
      </div>
      <article className="p-5 text-lg font-sans">
        Welcome to our secure note storing app! We are committed to providing
        our users with a safe and reliable platform to store their important
        notes and information.
        <br />
        <br />
        &nbsp; At our core, we believe that privacy is a fundamental human
        right. That&apos;s why we designed our app with security as our top
        priority. We use the latest encryption technologies to ensure that all
        your notes are encrypted before they leave your device and can only be
        decrypted by you.
        <br />
        <br />
        &nbsp; We also understand the importance of ease-of-use. Our app is
        designed to be intuitive and user-friendly, with a simple and clean
        interface that makes storing and accessing your notes a breeze.
        <br />
        <br />
        &nbsp; Whether you&apos;re looking to keep your passwords, financial
        information, or personal notes safe and secure, our app is the perfect
        solution. We take your privacy seriously, and we are constantly working
        to improve our app and stay ahead of the latest security threats.
        <br />
        <br />
        &nbsp; Thank you for choosing our secure note storing app. We look
        forward to helping you keep your important information safe and secure.
      </article>
    </div>
  );
};
export default About;
