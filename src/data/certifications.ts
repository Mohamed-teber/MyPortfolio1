export interface Certification {
  id: string;
  name: string;
  issuer: 'UDEMY' | 'Hewlett Packard Enterprise'  | 'Proofpoint';
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verificationUrl?: string;
  description: string;
  keyTopics: string[];
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "Disaster Recovery",
    name: 'Disaster Recovery - IT & Business Continuity Planning (BCP)',
    issuer: 'UDEMY',
    issueDate: '2025',
    credentialId: 'UC-990354b3-04ab-4bc3-893a-20165d4a1349',
    description: ' IT & Business Continuity Planning (BCP)',
    keyTopics: []
  },
  {
    id: 'Introduction to SANs',
    name: 'Introduction to SANs',
    issuer: 'Hewlett Packard Enterprise',
    issueDate: '2022',
    credentialId: '01052728',
    description: 'Introduction to Storage Area Networks (SAN), covering storage architecture, Fibre Channel, iSCSI, and centralized enterprise storage management.',
    keyTopics: ['Microsoft Windows', 'Windows Server', 'Storage Area Network (SAN)',],
  },
  {
    id: 'Proofpoint',
    name: 'Proofpoint Certified Channel Sales Engineer',
    issuer: 'Proofpoint',
    issueDate: '2020',
    credentialId: '7duoqkmmgq9x',
    description: 'Covers Proofpoint cybersecurity solutions, including email security, threat protection, data loss prevention, and security awareness to help protect organizations against cyber threats.',
    keyTopics: ['Email Security and Threat Protection', 'Phishing and Malware Prevention', 'Advanced Threat Detection',],
  },

];
