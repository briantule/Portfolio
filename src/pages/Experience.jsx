import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Experience.css';
import ExperienceList from "../helpers/ExperienceList";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        {
          ExperienceList.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className='vertical-timeline-element--work'
              date={item.date}
              contentArrowStyle={{
                borderRight: '7px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(7.5px)',
              }}
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(7.5px)',
              }}
              iconStyle={{ background: '#3e497a', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className='vertical-timeline-element-title'>{item.title}</h3>
              <h4 className='vertical-timeline-element-title'>{item.location}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))};
      </VerticalTimeline>
    </div>
  )
}

export default Experience