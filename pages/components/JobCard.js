// components/JobCard.js
export default function JobCard({ jobData }) {
    const renderSalary = () => {
      const { baseSalary } = jobData;
      if (!baseSalary) return 'Nicht angegeben';
  
      const { value } = baseSalary;
      let salaryText = `${value.minValue} EUR`;
  
      if (value.maxValue) {
        salaryText += ` - ${value.maxValue} EUR`;
      }
  
      salaryText += ` pro Stunde`;

      if (value.maxValue) {
        salaryText += ` (je nach Fähigkeiten)`
      }
      return salaryText;
    };
  
    return (
      <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
        <h2>{jobData.title}</h2>
        <p><strong>Organisation:</strong> {jobData.hiringOrganization.name}</p>
        <p><strong>Beschreibung:</strong> {jobData.description}</p>
        <p><strong>Standort:</strong> {`${jobData.jobLocation.address.addressLocality}, ${jobData.jobLocation.address.postalCode}`}</p>
        <p><strong>Gehalt:</strong> {renderSalary()}</p>
        <p><strong>Fähigkeiten:</strong> {jobData.skills}</p>
        <p><strong>Qualifikationen:</strong> {jobData.qualifications}</p>
        <a
        className="call-btn"
        href="mailto:tom.engelmann@scalarsoft.de?subject=Bewerbung%20als%20Werksstudent(in)%20Marketing%2FSEO" 
        >
            Jetzt Bewerben
        </a>
      </div>
    );
  }
  