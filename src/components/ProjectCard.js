import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <div className="portfolio-box">
      <img alt="" src={imgUrl} />
      <div className="portfolio-layer">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noreferrer">
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
