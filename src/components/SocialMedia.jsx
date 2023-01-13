import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGitHub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div >
        <a href="https://linkedin.com/in/broganneagle">
          < FaLinkedin/>
        </a>

        </div>
        <div>
          <a href="https://github.com/broganneagle">
          < BsGithub/>
          </a>
            
        </div>
        <div>
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:2efff04e-54d5-42b3-8cfe-54dc1ad98223">
          < BsFillFileEarmarkTextFill/>
          </a>
            
        </div>
    </div>
  )
}

export default SocialMedia