import React from 'react';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

import Icon1 from '../../images/image2.svg';
import Icon2 from '../../images/image3.svg';
import Icon3 from '../../images/image4.svg';

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Meet travel buddies</ServicesH2>
          <ServicesP>
            We help you to connect with people who are in the same country as
            you and ready to hit the road.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Language exchange</ServicesH2>
          <ServicesP>
            We organize meetings on zoom to practice languages with other people
            who are looking for practicing too.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Share local recipes</ServicesH2>
          <ServicesP>
            What is popular in your country to eat? Share it with us and taste
            all the flavours of the world.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
