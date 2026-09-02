export type AssessmentQuestion = {
  id: string
  domain: string
  domainWeight: number
  text: string
  hint: string
  weight: number
  options: { label: string; score: number }[]
}

export const assessmentDomains = [
  { key: 'patch-vulnerability', name: 'Patch & Vulnerability', weight: 25, description: 'How consistently vulnerabilities are discovered, prioritized and remediated.' },
  { key: 'threat-detection', name: 'Threat Detection', weight: 20, description: 'Visibility and detection across endpoints, identity, network and cloud.' },
  { key: 'incident-containment', name: 'Incident Containment', weight: 20, description: 'Readiness to isolate, investigate and recover from security incidents.' },
  { key: 'identity-access', name: 'Identity & Access', weight: 20, description: 'Control over identities, privileged access and authentication.' },
  { key: 'asset-visibility', name: 'Asset Visibility', weight: 15, description: 'Confidence that you know what assets exist, who owns them and how they are managed.' },
] as const

const options = [
  { label: 'Not in place / never', score: 1 },
  { label: 'Ad hoc / annually', score: 2 },
  { label: 'Documented / quarterly', score: 3 },
  { label: 'Managed / monthly', score: 4 },
  { label: 'Continuous / automated', score: 5 },
]

export const assessmentQuestions: AssessmentQuestion[] = [
  { id: 'pv1', domain: 'Patch & Vulnerability', domainWeight: 25, text: 'How often are critical vulnerabilities identified and prioritized?', hint: 'Think about your normal vulnerability discovery and triage cycle.', weight: 1.2, options },
  { id: 'pv2', domain: 'Patch & Vulnerability', domainWeight: 25, text: 'How quickly are critical security patches deployed?', hint: 'Consider the typical time from vendor release to production deployment.', weight: 1.3, options },
  { id: 'pv3', domain: 'Patch & Vulnerability', domainWeight: 25, text: 'Do you verify that remediation actually closed the vulnerability?', hint: 'Look for rescans, exception tracking or other evidence.', weight: 1, options },
  { id: 'td1', domain: 'Threat Detection', domainWeight: 20, text: 'How comprehensive is security monitoring across endpoints and servers?', hint: 'Include laptops, desktops, servers and remote devices.', weight: 1.2, options },
  { id: 'td2', domain: 'Threat Detection', domainWeight: 20, text: 'How are suspicious events investigated and escalated?', hint: 'Consider alert triage, ownership and documented escalation.', weight: 1, options },
  { id: 'td3', domain: 'Threat Detection', domainWeight: 20, text: 'Do you have centralized visibility into security alerts?', hint: 'A single operational view is stronger than disconnected tools.', weight: 1, options },
  { id: 'ic1', domain: 'Incident Containment', domainWeight: 20, text: 'Do you have a documented incident response process?', hint: 'The process should define roles, decisions and communications.', weight: 1.1, options },
  { id: 'ic2', domain: 'Incident Containment', domainWeight: 20, text: 'Can compromised devices or accounts be isolated quickly?', hint: 'Consider technical controls as well as the people who operate them.', weight: 1.3, options },
  { id: 'ic3', domain: 'Incident Containment', domainWeight: 20, text: 'Do you regularly test backup, recovery and incident response procedures?', hint: 'A written plan without testing should score lower.', weight: 1, options },
  { id: 'ia1', domain: 'Identity & Access', domainWeight: 20, text: 'Is multi-factor authentication enforced for privileged and remote access?', hint: 'Focus on enforcement, not just availability.', weight: 1.3, options },
  { id: 'ia2', domain: 'Identity & Access', domainWeight: 20, text: 'How consistently are joiner, mover and leaver access changes handled?', hint: 'Consider how quickly access is granted, changed and revoked.', weight: 1.1, options },
  { id: 'ia3', domain: 'Identity & Access', domainWeight: 20, text: 'Are privileged accounts separated, monitored and reviewed?', hint: 'Include admin accounts, service accounts and access reviews.', weight: 1, options },
  { id: 'av1', domain: 'Asset Visibility', domainWeight: 15, text: 'Do you maintain an accurate inventory of hardware and software assets?', hint: 'Include ownership, lifecycle state and unmanaged assets.', weight: 1.2, options },
  { id: 'av2', domain: 'Asset Visibility', domainWeight: 15, text: 'Can you identify unmanaged or unknown devices on your environment?', hint: 'Visibility into exceptions is part of the control.', weight: 1, options },
  { id: 'av3', domain: 'Asset Visibility', domainWeight: 15, text: 'Is asset and security reporting reviewed regularly by an owner?', hint: 'Reporting is useful only when someone acts on it.', weight: 0.8, options },
]

export const getQuestionsByDomain = (domain: string) => assessmentQuestions.filter(q => q.domain === domain)
