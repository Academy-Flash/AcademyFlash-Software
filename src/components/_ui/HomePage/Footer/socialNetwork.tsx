import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function ComponentGithubApp() {
  return (
    <div>
      <a href="https://github.com/Academy-Flash/AcademyFlash-Software">
        <FaGithub size={100} />
      </a>
    </div>
  );
}

function ComponentInstagramApp() {
  return (
    <div>
      <a href="https://instagram.com">
        <FaInstagram size={20} />
      </a>
    </div>
  );
}

function ComponentLinkedinApp() {
  return (
    <div>
      <a href="https://linkedin.com">
        <FaLinkedin size={20} />
      </a>
    </div>
  );
}

export { ComponentGithubApp };
export { ComponentInstagramApp };
export { ComponentLinkedinApp };