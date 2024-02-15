import Link from "next/link";

// components/JobCard.js
export default function JobCard({ jobData }) {
    // Safely access nested properties
    const safeAccess = (object, path, defaultValue = 'Nicht angegeben') => {
        return path.reduce((xs, x) => (xs && xs[x] ? xs[x] : defaultValue), object);
    };

    const renderSalary = () => {
        const baseSalary = safeAccess(jobData, ['baseSalary'], {});
        const { value } = baseSalary;

        if (!value) return 'Nicht angegeben';

        let salaryText = `${value.minValue || '0'} EUR`;

        if (value.maxValue) {
            salaryText += ` - ${value.maxValue} EUR`;
        }

        salaryText += ` pro Stunde`;

        if (value.maxValue) {
            salaryText += ` (je nach Fähigkeiten)`;
        }
        return salaryText;
    };

    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
            <h2>{safeAccess(jobData, ['title'], 'Kein Titel')}</h2>
            <p><strong>Organisation:</strong> {safeAccess(jobData, ['hiringOrganization', 'name'])}</p>
            <p><strong>Beschreibung:</strong> {safeAccess(jobData, ['description'])}</p>
            <p><strong>Standort:</strong> {`${safeAccess(jobData, ['jobLocation', 'address', 'addressLocality'], '')}, ${safeAccess(jobData, ['jobLocation', 'address', 'postalCode'], '')}`}</p>
            <p><strong>Gehalt:</strong> {renderSalary()}</p>
            <p><strong>Fähigkeiten:</strong> {safeAccess(jobData, ['skills'])}</p>
            <p><strong>Qualifikationen:</strong> {safeAccess(jobData, ['qualifications'])}</p>
            <Link href="mailto:tom.engelmann@scalarsoft.de?subject=Bewerbung%20als%20Werksstudent(in)%20Marketing%2FSEO">
                Jetzt Bewerben
            </Link>
        </div>
    );
}
