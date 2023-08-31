import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Mat 2023 - Present'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Software Engineer - Royal Bank of Canada</h3>
          <h4 className='vertical-timeline-element-title'>Toronto, ON</h4>
          <p>Random stuff</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Nov 2022 - Feb 2023'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Backend Developer Intern - Binance</h3>
          <h4 className='vertical-timeline-element-title'>Toronto, ON</h4>
          <p>Random stuff</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='May 2022 - Aug 2022'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Software Engineer Intern - Apple</h3>
          <h4 className='vertical-timeline-element-title'>Cuppertino, CA</h4>
          <p>Software Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Jan 2022 - Apr 2022'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> DevOps Engineer Intern - Royal Bank of Canada</h3>
          <h4 className='vertical-timeline-element-title'>Toronto, ON</h4>
          <p>DevOps Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Sept 2021 - Dec 2021'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Quality Assurance Engineer Intern - Statflo</h3>
          <h4 className='vertical-timeline-element-title'>Toronto, ON</h4>
          <p>Quality Assurance Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='May 2020 - Apr 2021'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Software Engineer Intern - Advanced Micro Devices</h3>
          <h4 className='vertical-timeline-element-title'>Markham, ON</h4>
          <p>Software Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='May 2018 - Aug 2018'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Reconciliations Analyst Intern - Scotiabank</h3>
          <h4 className='vertical-timeline-element-title'>Toronto, ON</h4>
          <p>Reconciliations Analyst Intern</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience