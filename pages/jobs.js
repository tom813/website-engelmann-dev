import Head from 'next/head';
import Link from 'next/link';
import JobCard from './components/JobCard';

export default function Jobs() {
  const jobPostingMarketingJSON = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "Werksstudent(in) Marketing/SEO",
    "employeeType": "Werksstudent",
    "description": "Die Scalarsoft GmbH in Potsdam sucht einen engagierten Werksstudenten (m/w/d) im Bereich Marketing/SEO...",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Scalarsoft GmbH"
    },
    "datePosted": "2024-02-15",
    "validThrough": "2024-06-30",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Germany"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hans-Marchwitza-Ring 1",
        "addressLocality": "Potsdam",
        "postalCode": "14473",
        "addressCountry": "DE",
        "addressRegion": "Potsdam"
      }
    },
    "jobLocationType": "TELECOMMUTE",
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 16,
        "unitText": "HOUR"
      }
    },
    "skills": "Erfahrung mit WordPress, grundlegende SEO-Kenntnisse, Fähigkeit zur Content-Erstellung, optional: Kenntnisse im Social Media Marketing",
    "qualifications": "Hohe Motivation, die Fähigkeit zur selbstständigen Arbeit und zur Einarbeitung in neue Themen, grundlegendes Verständnis von SEO-Praktiken, Erfahrung mit WordPress, gute Kommunikationsfähigkeiten, Studium im Bereich Marketing, Kommunikation, Informatik oder einem verwandten Feld ist von Vorteil"
  };
  const jobPostingDevJSON = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "Werksstudent(in) Next.js Entwicklung",
    "employeeType": "Werksstudent",
    "description": "Die Scalarsoft GmbH in Potsdam sucht einen talentierten Werksstudenten (m/w/d) im Bereich Next.js Entwicklung, der unser Team mit innovativen Webentwicklungsprojekten unterstützt. Deine Aufgaben umfassen die Entwicklung und Optimierung von Webanwendungen mit Next.js, die Verbesserung der Benutzererfahrung und die Implementierung responsiver Designs. Das Gehalt basiert auf deinen Fähigkeiten und Erfahrungen in der Webentwicklung, insbesondere in Next.js, React und modernen Webtechnologien. Diese Position bietet dir die Möglichkeit, in einem dynamischen Umfeld zu arbeiten, deine Fähigkeiten zu erweitern und an spannenden Projekten mitzuarbeiten.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Scalarsoft GmbH"
    },
    "datePosted": "2024-02-15",
    "validThrough": "2024-06-30",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Germany"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hans-Marchwitza-Ring 1",
        "addressLocality": "Potsdam",
        "postalCode": "14473",
        "addressCountry": "DE",
        "addressRegion": "Potsdam"
      }
    },
    "jobLocationType": "TELECOMMUTE",
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 16,
        "maxValue": 23,
        "unitText": "HOUR"
      }
    },
    "skills": "Erfahrung mit Next.js und React, Verständnis moderner Webtechnologien (HTML5, CSS3, JavaScript), Fähigkeit zur Entwicklung responsiver Designs, Kenntnisse in der Versionierung mit Git",
    "qualifications": "Starke Problemlösungsfähigkeiten, hohe Motivation und die Fähigkeit zur selbstständigen Arbeit, grundlegendes Verständnis von Webentwicklungspraktiken, Studium im Bereich Informatik, Webentwicklung oder einem verwandten Feld ist von Vorteil"
  }
  

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(jobPostingMarketingJSON)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jobPostingDevJSON)}
        </script>
      </Head>
      <div style={{ maxWidth: '800px', margin: '0px auto' }}>
        <div style={{textAlign: 'center', margin: '50px auto'}}>
            <h1>
                Jobs bei der Scalarsoft GmbH
            </h1>
            <p>
                Ihr könnt euch gerne direkt bei uns melden über tom.engelmann@scalarsoft.de
            </p>
        </div>
        <JobCard jobData={jobPostingMarketingJSON} />
        <JobCard jobData={jobPostingDevJSON} />
      </div>
    </>
  );
}
