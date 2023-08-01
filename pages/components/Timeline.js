import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline(){
    let data = []

    return(
        <div className="timeline-container">
            <VerticalTimeline
            layout="1-column-left"
            className="timeline-element-container"
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    /* contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} */
                    /* contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} */
                    date="Schritt 1"
                    iconStyle={{ background: '#6a4bc4', color: '#fff' }}
                    
                    /* icon={<WorkIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Erstellen des BIM-Modells und der Planungsdaten</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    {/* <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p> */}
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Schritt 2"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Erstellung der Planungsdaten über BIM-Modell</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement> */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Schritt 2"
                    iconStyle={{ background: '#6a4bc4', color: '#fff' }}
                    /* icon={<WorkIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Anlegen und Parametrisieren der Bauteillisten</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Schritt 3"
                    iconStyle={{ background: '#6a4bc4', color: '#fff' }}
                    /* icon={<WorkIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Parametrisieren und Zuordnung der Bauteile</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Schritt 4"
                    iconStyle={{ background: '#6a4bc4', color: '#fff' }}
                    /* icon={<SchoolIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Erheben der Mengen und Massen über Bauteilliste</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                    Strategy, Social Media
                    </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Schritt 5"
                    iconStyle={{ background: '#6a4bc4', color: '#fff' }}
                    /* icon={<SchoolIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Exportieren der Bauteilliste</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Schritt 6"
                    iconStyle={{ background: '#6a4bc4', color: '#fff' }}
                    /* icon={<SchoolIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Anlegen der Bauteile im ERP-System</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    Creative Direction, Visual Design
                    </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Schritt 7"
                    iconStyle={{ background: '#6a4bc4', color: '#fff' }}
                    /* icon={<SchoolIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Händisches übertragen der Mengen und Massen in ERP-System mittels Stücklisten</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    Creative Direction, Visual Design
                    </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: '#6a4bc4', color: '#fff' }}
                    /* icon={<StarIcon />} */
                />
                </VerticalTimeline>




                <VerticalTimeline
                layout="1-column-left"
                lineColor="#6a4bc4"
                className="timeline-element-container"
                >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    /* contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} */
                    date="Schritt 1"
                    iconStyle={{ background: '#d75dbc', color: '#fff' }}
                    /* icon={<WorkIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Erstellen des BIM-Modells und der Planungsdaten</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p> */}
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Schritt 2"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Erstellung der Planungsdaten über BIM-Modell</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement> */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Schritt 2"
                    iconStyle={{ background: '#d75dbc', color: '#fff' }}
                    /* icon={<WorkIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Automatische Erstellung der Bauteillisten mittels ScalarOne-Vorlage</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Schritt 3"
                    iconStyle={{ background: '#d75dbc', color: '#fff' }}
                    /* icon={<WorkIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Automatisches Übertragen der Mengen und Massen über Revit Plugin</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Schritt 4"
                    iconStyle={{ background: '#d75dbc', color: '#fff' }}
                    /* icon={<SchoolIcon />} */
                >
                    <h3 className="vertical-timeline-element-title">Automatisches Anlegen von Stücklisten mittels der übertragenen Daten aus Revit Plugin</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                    Strategy, Social Media
                    </p> */}
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement> */}
                <VerticalTimelineElement
                    iconStyle={{ background: '#d75dbc', color: '#fff' }}
                    /* icon={<StarIcon />} */
                />
                </VerticalTimeline>
        </div>
    )
}