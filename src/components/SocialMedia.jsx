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
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:2b043478-5130-490f-89ef-892f36b9db51">
          < BsFillFileEarmarkTextFill/>
          </a>
            
        </div>
    </div>
  )
}

export default SocialMedia