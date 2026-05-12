import Tilt from 'react-parallax-tilt';

const TiltCard = ({ children, className = "" }) => (
  <Tilt 
    tiltMaxAngleX={4} 
    tiltMaxAngleY={4} 
    perspective={1200} 
    scale={1.03} 
    transitionSpeed={1200} 
    className={`${className} floating`}
    glareEnable={true}
    glareMaxOpacity={0.12}
    glareColor="#ffffff"
    glarePosition="all"
    glareBorderRadius="20px"
  >
    {children}
  </Tilt>
);

export default TiltCard;
