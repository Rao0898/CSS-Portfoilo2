// ProjectsSection.tsx

import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  const projects = [
    { 
      title: 'Project 1', 
      description: 'MY Resume Builder Project', 
      image:'https://scontent.xx.fbcdn.net/v/t1.15752-9/462566629_1620978382190136_1406716680489625637_n.png?stp=dst-png_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=gLxgMUGW9NcQ7kNvgHYadXw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QHGm1uLmXeulG_zueCNnXYEGqrAsDbepVEJOhyqw7kdqg&oe=67584640' // Path to your image
    },
    { 
      title: 'Project 2', 
      description: 'My Amazon Clone', 
      image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/462562389_601254215869119_2104961518045290223_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=SiGOqUskRqUQ7kNvgHc3O1w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFwmjK3q3MoSR8toV842LhE6WKLBrHvxYWU1FNwM29Acg&oe=67585062' // Path to your image
    },
    { 
      title: 'Project 3', 
      description: 'My E-Commerce web', 
      image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/462573258_1606784244055608_3217476959304495446_n.png?stp=dst-png_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=jgdQjDqAo3sQ7kNvgHuGDC4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEXCEV-BsXFxx7WljZLnD-BBDhjlMC9ykXuEwD6GZM12g&oe=67583F9A' // Path to your image
    },
  ];

  return (
    <section className={styles.projects} id='project'>
      <h2>My Projects</h2>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={styles.projectItem} 
            style={{ backgroundImage: `url(${project.image})` }} // Set background image dynamically
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
