export type Capability = { title: string; items: string[] }
export type FAQ = { q: string; a: string }
export type ProcessStep = { title: string; detail: string }
export type CategoryKey = 'it-solutions' | 'business-software' | 'ai-automation' | 'software-engineering' | 'web-digital-growth'

export interface Service {
  slug: string
  category: CategoryKey
  name: string
  shortName: string
  tagline: string
  summary: string
  capabilities: Capability[]
  process: ProcessStep[]
  outcomes: string[]
  faq: FAQ[]
}

export const categoryMeta: Record<CategoryKey, { label: string; description: string; anchor: string }> = {
  'it-solutions': {
    label: 'IT Solutions',
    description: 'The operational layer — endpoints, support, security and visibility kept running and accountable.',
    anchor: 'it-solutions',
  },
  'business-software': {
    label: 'Business Software',
    description: 'The systems your teams work inside every day, configured to match how the business actually runs.',
    anchor: 'business-software',
  },
  'ai-automation': {
    label: 'AI & Automation',
    description: 'Applied AI that removes manual work and gives people faster answers — not AI for its own sake.',
    anchor: 'ai-automation',
  },
  'software-engineering': {
    label: 'Software Engineering & QA',
    description: 'Quality built into the release process, so software ships correct the first time.',
    anchor: 'software-engineering',
  },
  'web-digital-growth': {
    label: 'Web & Digital Growth',
    description: 'Websites, search and digital marketing that turn your online presence into a practical growth channel.',
    anchor: 'web-digital-growth',
  },
}

export const services: Service[] = [
  {
    slug: 'managed-it-services',
    category: 'it-solutions',
    name: 'Managed IT Services',
    shortName: 'Managed IT',
    tagline: 'Your IT should be managed before it becomes a problem.',
    summary: 'Ascent provides proactive IT management designed to keep your technology environment secure, available and performing reliably — so issues get caught before they interrupt anyone\'s work.',
    capabilities: [
      { title: 'Technology operations', items: ['Servers', 'Storage', 'Virtualization', 'Cloud services', 'System monitoring'] },
      { title: 'Endpoints', items: ['Desktops', 'Laptops', 'Mobile devices', 'Workstations'] },
      { title: 'Users', items: ['User provisioning', 'Access management', 'Password support', 'Onboarding and offboarding'] },
      { title: 'Security', items: ['Endpoint protection', 'Patch management', 'Security policies', 'Continuous monitoring'] },
      { title: 'Service management', items: ['Helpdesk', 'Incident management', 'SLA management', 'Reporting', 'Knowledge base'] },
    ],
    process: [
      { title: 'Baseline & audit', detail: 'We inventory technology, endpoints, licensing and current pain points before touching anything, so the plan is built on what\'s actually there.' },
      { title: 'Stabilize', detail: 'Patch, secure and document the environment first — most engagements start by fixing the backlog, not adding new tooling on top of an unstable base.' },
      { title: 'Monitor & maintain', detail: 'Ongoing monitoring, patching and helpdesk support run on agreed SLAs, with issues caught and triaged before they\'re reported to you.' },
      { title: 'Review & report', detail: 'Monthly reporting covers what broke, what was fixed, and what\'s coming next — so you always know the state of your environment.' },
    ],
    outcomes: ['Fewer unplanned outages', 'Faster resolution when something does break', 'One accountable partner instead of scattered vendors', 'Clear reporting on what was fixed and what\'s next'],
    faq: [
      { q: 'Do you replace our internal IT person, or work alongside them?', a: 'Both models work. We can run IT end to end, or sit alongside an internal team and take the operational load — patching, monitoring and maintenance — off their plate.' },
      { q: 'How fast do you respond to an incident?', a: 'Response times are set per SLA tier and confirmed in writing before we start, based on severity and business impact.' },
      { q: 'Can you support a hybrid environment — some cloud, some on-prem?', a: 'Yes. Most of the businesses we support run a mix, and our monitoring and management stack is built for that.' },
    ],
  },
  {
    slug: 'it-support-helpdesk',
    category: 'it-solutions',
    name: 'IT Support & Helpdesk',
    shortName: 'IT Support',
    tagline: 'Support that resolves things, not just logs them.',
    summary: 'A responsive helpdesk for your employees, with clear escalation paths and tracked resolution — so technical problems stop costing people their afternoon.',
    capabilities: [
      { title: 'Channels', items: ['Phone support', 'Email support', 'Ticketing portal', 'Remote desktop support'] },
      { title: 'Coverage', items: ['Business-hours support', 'Extended and after-hours options', 'On-site visits when needed'] },
      { title: 'Tiers', items: ['L1 triage and known-issue resolution', 'L2 technical troubleshooting', 'L3 escalation to specialists'] },
      { title: 'Visibility', items: ['Ticket status tracking', 'SLA compliance reporting', 'Recurring-issue analysis'] },
    ],
    process: [
      { title: 'Set up intake', detail: 'We configure the ticketing portal, phone line and email intake so every employee has one clear way to reach support.' },
      { title: 'Define tiers & SLAs', detail: 'Escalation paths from L1 through L3 and response-time SLAs are agreed and documented before go-live, not improvised later.' },
      { title: 'Run the desk', detail: 'Tickets are triaged, resolved or escalated against those SLAs, with remote and on-site support used depending on the issue.' },
      { title: 'Track recurring issues', detail: 'We analyze ticket trends monthly to catch root causes generating repeat tickets, and fix those instead of just closing tickets faster.' },
    ],
    outcomes: ['Shorter time-to-resolution', 'Less repeat downtime from the same root cause', 'A single number or portal for every employee to use', 'Monthly visibility into what\'s actually going wrong'],
    faq: [
      { q: 'What counts as a ticket versus a project?', a: 'Day-to-day breakages, access requests and how-to questions are helpdesk tickets. Larger changes — a new system rollout, an office move — are scoped separately as a project.' },
      { q: 'Can employees reach the helpdesk directly, or does it go through IT admin first?', a: 'Employees can raise tickets directly through the portal, phone or email — no internal gatekeeping required.' },
    ],
  },
  {
    slug: 'cybersecurity',
    category: 'it-solutions',
    name: 'Cybersecurity',
    shortName: 'Cybersecurity',
    tagline: 'Security shouldn\'t be an afterthought.',
    summary: 'Protect users, devices, applications and data with a practical security strategy designed around your business, not a generic checklist.',
    capabilities: [
      { title: 'Endpoint security', items: ['Malware and ransomware protection', 'Device hardening', 'Unauthorized-activity detection'] },
      { title: 'Identity & access', items: ['Multi-factor authentication', 'Role-based access control', 'Privileged access management'] },
      { title: 'Vulnerability & patch management', items: ['Vulnerability scanning', 'Prioritized remediation', 'OS and application patching'] },
      { title: 'Email security', items: ['Phishing protection', 'Attachment and link scanning', 'Account-compromise detection'] },
      { title: 'Monitoring & response', items: ['Security monitoring', 'Alert triage', 'Incident response'] },
      { title: 'Backup & recovery', items: ['Business continuity planning', 'Recovery testing'] },
      { title: 'Assessment', items: ['Security posture assessment', 'Gap analysis and roadmap', 'ACSC Essential Eight maturity assessment'] },
    ],
    process: [
      { title: 'Assess exposure', detail: 'A posture assessment against the ACSC Essential Eight and your specific risk profile identifies where you\'re actually exposed.' },
      { title: 'Prioritize by risk', detail: 'Findings are ranked by real business impact, not a generic severity score, so the highest-risk gaps get fixed first.' },
      { title: 'Remediate & harden', detail: 'We implement MFA, endpoint protection, patching and email security in the sequence that closes the biggest gaps fastest.' },
      { title: 'Monitor & respond', detail: 'Ongoing monitoring and a tested incident response plan mean issues are caught and contained, not discovered after the fact.' },
    ],
    outcomes: ['A documented view of where you\'re exposed today', 'Fewer successful phishing and ransomware incidents', 'A tested recovery plan instead of an assumed one', 'Security decisions prioritized by actual risk, not fear'],
    faq: [
      { q: 'We\'re a small business — is this overkill for us?', a: 'No. We scope security to the size and risk profile of the business; a 20-person company needs a different posture than an enterprise, and we price and staff accordingly.' },
      { q: 'Do you provide compliance support (ISO 27001, SOC 2, Essential Eight, etc.)?', a: 'We support the technical controls compliance frameworks require, including alignment to the ACSC Essential Eight and the Australian Privacy Principles. Tell us the framework you\'re working toward and we\'ll map what\'s already covered and what\'s missing.' },
      { q: 'Can you help us prepare for Notifiable Data Breach scheme obligations?', a: 'Yes — we help build the monitoring, response and documentation processes that support your obligations under the scheme, alongside your own legal advice.' },
    ],
  },
  {
    slug: 'essential-eight',
    category: 'it-solutions',
    name: 'Essential Eight',
    shortName: 'Essential Eight',
    tagline: 'A practical path to stronger cyber resilience.',
    summary: 'Assessment, remediation and maturity uplift aligned to the ACSC Essential Eight — helping organisations understand their current posture and close the highest-risk gaps first.',
    capabilities: [
      { title: 'Assessment', items: ['Current-state maturity assessment', 'Gap analysis', 'Evidence and control mapping', 'Maturity roadmap'] },
      { title: 'Implementation', items: ['Application and OS patching', 'Multi-factor authentication', 'Privileged access controls', 'Application control', 'Office hardening and backups'] },
      { title: 'Assurance', items: ['Remediation validation', 'Maturity reporting', 'Management-ready evidence packs'] },
    ],
    process: [
      { title: 'Assess maturity', detail: 'We establish the current maturity level across all eight mitigation strategies and identify the gaps that matter most.' },
      { title: 'Prioritize the gaps', detail: 'Remediation is sequenced around business risk, technical dependencies and the maturity target you are working toward.' },
      { title: 'Implement controls', detail: 'We help configure and strengthen the controls, policies and operational processes needed to close the agreed gaps.' },
      { title: 'Validate & report', detail: 'Evidence is reviewed and the resulting maturity position is documented for leadership, audit and ongoing improvement.' },
    ],
    outcomes: ['A clear view of Essential Eight maturity', 'Prioritized remediation rather than a generic checklist', 'Evidence that supports governance and assurance'],
    faq: [
      { q: 'Which maturity level should we target?', a: 'That depends on your risk, environment and obligations. We assess the current state first and recommend a proportionate target.' },
    ],
  },
  {
    slug: 'nist-cybersecurity-framework',
    category: 'it-solutions',
    name: 'NIST Cybersecurity Framework',
    shortName: 'NIST CSF',
    tagline: 'A risk-based framework for managing cyber security.',
    summary: 'Cybersecurity assessment and roadmap work aligned to the NIST Cybersecurity Framework, helping organisations structure governance, protection, detection, response and recovery.',
    capabilities: [
      { title: 'Framework alignment', items: ['Current-state assessment', 'CSF 2.0 profile mapping', 'Target-state definition', 'Gap analysis'] },
      { title: 'Risk management', items: ['Cyber risk register', 'Control prioritization', 'Risk treatment roadmap', 'Governance reporting'] },
    ],
    process: [
      { title: 'Define the profile', detail: 'We establish the business context, critical systems and target outcomes that shape the NIST CSF profile.' },
      { title: 'Assess the current state', detail: 'Existing policies, controls and operational practices are mapped to the framework to expose meaningful gaps.' },
      { title: 'Build the target state', detail: 'Prioritized improvements are sequenced into a practical roadmap with ownership and measurable outcomes.' },
      { title: 'Measure & improve', detail: 'Progress is tracked against the target profile so cybersecurity becomes an ongoing management process.' },
    ],
    outcomes: ['A structured view of cyber risk and capability', 'A measurable target-state roadmap', 'Clearer executive reporting on cybersecurity priorities'],
    faq: [
      { q: 'Is NIST CSF only for US organisations?', a: 'No. NIST CSF is a widely used risk-management framework and can be tailored to organisations operating in Australia and other jurisdictions.' },
    ],
  },
  {
    slug: 'iso-iec-27001',
    category: 'it-solutions',
    name: 'ISO/IEC 27001',
    shortName: 'ISO 27001',
    tagline: 'Build an information security management system that stands up to scrutiny.',
    summary: 'Practical support for ISO/IEC 27001 readiness — from scope and risk assessment through control implementation, documentation and evidence preparation.',
    capabilities: [
      { title: 'ISMS readiness', items: ['Scope definition', 'Context and risk assessment', 'Statement of Applicability support', 'Control gap analysis'] },
      { title: 'Implementation', items: ['Policies and procedures', 'Risk treatment plans', 'Technical control uplift', 'Evidence collection'] },
      { title: 'Assurance', items: ['Internal readiness review', 'Audit evidence preparation', 'Continual improvement planning'] },
    ],
    process: [
      { title: 'Set the ISMS scope', detail: 'We define what people, processes, locations and technology sit inside the management system and establish the governance baseline.' },
      { title: 'Assess risk & controls', detail: 'Information risks and existing controls are evaluated to identify the treatment required for the target scope.' },
      { title: 'Implement & document', detail: 'Policies, processes and technical controls are put into operation with evidence collected as the work progresses.' },
      { title: 'Prepare for audit', detail: 'A readiness review identifies remaining gaps and organizes the evidence needed for the independent certification process.' },
    ],
    outcomes: ['A defined, documented information security management system', 'Traceable risks, controls and evidence', 'Greater confidence going into certification activities'],
    faq: [
      { q: 'Does Ascent provide ISO certification?', a: 'No. Certification is performed by an independent certification body. We can support readiness, implementation and evidence preparation.' },
    ],
  },
  {
    slug: 'soc-2-readiness',
    category: 'it-solutions',
    name: 'SOC 2 Readiness',
    shortName: 'SOC 2',
    tagline: 'Turn security controls into auditable trust evidence.',
    summary: 'Readiness support for organisations preparing for a SOC 2 examination, with practical control mapping, evidence workflows and remediation tracking.',
    capabilities: [
      { title: 'Readiness', items: ['Control gap assessment', 'Trust Services Criteria mapping', 'Policy and process review', 'Evidence planning'] },
      { title: 'Remediation', items: ['Access control improvements', 'Change management controls', 'Logging and monitoring', 'Vendor and risk processes'] },
    ],
    process: [
      { title: 'Scope the examination', detail: 'We clarify the systems, services and Trust Services Criteria relevant to the intended SOC 2 scope.' },
      { title: 'Map existing controls', detail: 'Current policies, technical safeguards and operational practices are mapped to the required control objectives.' },
      { title: 'Close evidence gaps', detail: 'Missing controls and inconsistent evidence collection are addressed before the examination window.' },
      { title: 'Prepare & maintain', detail: 'Evidence ownership and recurring control activities are documented so readiness does not disappear after the first audit.' },
    ],
    outcomes: ['A clear SOC 2 readiness gap register', 'Repeatable evidence collection', 'Fewer surprises during independent examination'],
    faq: [
      { q: 'Does SOC 2 readiness mean we are SOC 2 certified?', a: 'No. SOC 2 examinations and reports are issued by independent CPA firms. We support the readiness and control implementation work.' },
    ],
  },
  {
    slug: 'cis-controls',
    category: 'it-solutions',
    name: 'CIS Controls',
    shortName: 'CIS Controls',
    tagline: 'Prioritize the security controls that reduce real-world risk.',
    summary: 'Practical security improvement mapped to the CIS Controls, with prioritized safeguards, implementation guidance and measurable progress.',
    capabilities: [
      { title: 'Assessment', items: ['Control maturity review', 'Asset and identity visibility', 'Safeguard gap analysis'] },
      { title: 'Implementation', items: ['Secure configuration', 'Account and access controls', 'Vulnerability management', 'Logging and monitoring'] },
    ],
    process: [
      { title: 'Baseline controls', detail: 'We establish what safeguards are already operating and where visibility or ownership is missing.' },
      { title: 'Prioritize safeguards', detail: 'The roadmap focuses first on controls that materially reduce exposure for your environment.' },
      { title: 'Implement & validate', detail: 'Technical and operational safeguards are configured, documented and checked for effectiveness.' },
      { title: 'Track maturity', detail: 'Progress is measured so security improvement can be managed as an ongoing program.' },
    ],
    outcomes: ['A practical prioritized security baseline', 'Clear control ownership', 'Measurable progress against security safeguards'],
    faq: [
      { q: 'Why use CIS Controls alongside Essential Eight?', a: 'They can complement each other: Essential Eight provides an Australian baseline while CIS Controls can broaden the operational control set.' },
    ],
  },
  {
    slug: 'penetration-testing',
    category: 'it-solutions',
    name: 'Penetration Testing',
    shortName: 'Pen Testing',
    tagline: 'Find exploitable weaknesses before someone else does.',
    summary: 'Controlled penetration testing of internet-facing applications, networks and systems to identify exploitable weaknesses and provide prioritized remediation guidance.',
    capabilities: [
      { title: 'Testing', items: ['External penetration testing', 'Web application testing', 'API testing', 'Internal network testing'] },
      { title: 'Assessment', items: ['Authentication and authorization testing', 'Privilege escalation testing', 'Business-logic testing', 'Exploit validation'] },
      { title: 'Reporting', items: ['Executive summary', 'Technical findings', 'Risk prioritization', 'Remediation retesting'] },
    ],
    process: [
      { title: 'Define scope', detail: 'Targets, rules of engagement, test windows and safety boundaries are agreed before any testing begins.' },
      { title: 'Discover & test', detail: 'Testers assess the approved attack surface using controlled techniques designed to validate realistic weaknesses.' },
      { title: 'Report risk', detail: 'Findings are documented with evidence, business impact and practical remediation guidance.' },
      { title: 'Retest fixes', detail: 'Critical findings can be retested after remediation to confirm the exposure has actually been closed.' },
    ],
    outcomes: ['Real-world weaknesses identified before attackers exploit them', 'Prioritized technical remediation', 'Independent evidence for security and assurance programs'],
    faq: [
      { q: 'How often should penetration testing be performed?', a: 'Frequency depends on risk and change. Annual testing is a common baseline, with additional testing after significant changes or before important deployments.' },
    ],
  },
  {
    slug: 'vulnerability-assessment',
    category: 'it-solutions',
    name: 'Vulnerability Assessment',
    shortName: 'Vulnerability Assessment',
    tagline: 'Know what is vulnerable, what matters and what to fix first.',
    summary: 'Continuous or scheduled vulnerability assessment across endpoints, servers, applications and external assets, with risk-based remediation prioritization.',
    capabilities: [
      { title: 'Discovery', items: ['External attack-surface discovery', 'Asset inventory correlation', 'Authenticated vulnerability scanning'] },
      { title: 'Prioritization', items: ['Risk-based ranking', 'Exploitability context', 'Remediation recommendations', 'Exception tracking'] },
    ],
    process: [
      { title: 'Discover assets', detail: 'We establish the systems and services in scope so important assets are not missed during assessment.' },
      { title: 'Scan & validate', detail: 'Automated scanning identifies potential vulnerabilities, with validation used where deeper confirmation is required.' },
      { title: 'Prioritize risk', detail: 'Findings are ranked using severity, exposure, exploitability and business criticality rather than score alone.' },
      { title: 'Remediate & rescan', detail: 'Teams receive a practical remediation queue and follow-up scans confirm that issues have been addressed.' },
    ],
    outcomes: ['Fewer high-risk vulnerabilities left unresolved', 'A repeatable remediation workflow', 'Clear visibility of exposure over time'],
    faq: [
      { q: 'What is the difference between a vulnerability assessment and a penetration test?', a: 'A vulnerability assessment identifies and prioritizes weaknesses at scale; a penetration test actively validates exploitability against an agreed objective and scope.' },
    ],
  },
  {
    slug: 'security-operations-soc',
    category: 'it-solutions',
    name: 'Security Operations (SOC)',
    shortName: 'Security Operations',
    tagline: 'Detect, investigate and respond before incidents become outages.',
    summary: 'Security monitoring, alert triage, investigation and incident response support using centralized telemetry and defined escalation processes.',
    capabilities: [
      { title: 'Monitoring', items: ['Security event monitoring', 'Endpoint telemetry', 'Identity and access signals', 'Threat detection'] },
      { title: 'Response', items: ['Alert triage', 'Incident investigation', 'Containment guidance', 'Escalation and reporting'] },
      { title: 'Operations', items: ['Use-case tuning', 'Security dashboards', 'Incident runbooks', 'Regular service reviews'] },
    ],
    process: [
      { title: 'Connect telemetry', detail: 'Relevant endpoint, identity, email and infrastructure signals are brought into a monitored security workflow.' },
      { title: 'Tune detections', detail: 'Alert rules are refined around your environment so analysts spend less time on noise and more time on meaningful events.' },
      { title: 'Investigate & respond', detail: 'Suspected incidents are triaged against defined severity and escalation procedures, with containment actions coordinated as required.' },
      { title: 'Review & improve', detail: 'Incident trends and detection gaps are reviewed regularly to strengthen the security program over time.' },
    ],
    outcomes: ['Faster awareness of suspicious activity', 'Less alert noise through tuned detection', 'A documented response path when incidents occur'],
    faq: [
      { q: 'Is this a 24/7 SOC service?', a: 'Coverage can be designed around your risk and operating hours. The final monitoring and response model is agreed during scoping.' },
    ],
  },
  {
    slug: 'privileged-access-management',
    category: 'it-solutions',
    name: 'Privileged Access Management',
    shortName: 'Privileged Access',
    tagline: 'Control the accounts that can change everything.',
    summary: 'Privileged access management for administrator accounts, service accounts and sensitive credentials — including secure password vaulting, approval workflows and session oversight.',
    capabilities: [
      { title: 'Password vault', items: ['Secure credential vault', 'Password rotation', 'Credential checkout and expiry', 'Emergency access controls'] },
      { title: 'Privileged access', items: ['Admin account discovery', 'Least-privilege access', 'Just-in-time access', 'Approval workflows'] },
      { title: 'Audit & oversight', items: ['Access logging', 'Privileged session monitoring', 'Periodic access reviews', 'Compliance reporting'] },
    ],
    process: [
      { title: 'Discover privileged access', detail: 'We identify privileged accounts, shared credentials and service accounts across the environment, including unmanaged access that is easy to overlook.' },
      { title: 'Vault sensitive credentials', detail: 'Passwords and secrets are moved into a controlled vault with strong access policies, rotation and emergency procedures.' },
      { title: 'Reduce standing privilege', detail: 'Where practical, permanent administrator access is replaced with approval-based or time-limited privileged access.' },
      { title: 'Monitor & review', detail: 'Privileged activity is logged and access is reviewed regularly so excessive permissions do not quietly accumulate.' },
    ],
    outcomes: ['Fewer exposed administrator credentials', 'Controlled password storage and rotation', 'Stronger auditability of privileged access'],
    faq: [
      { q: 'Does privileged access management include a password vault?', a: 'Yes. Secure password vaulting is a core part of the service, alongside access approvals, rotation, auditing and privileged-account governance.' },
    ],
  },
  {
    slug: 'it-asset-management',
    category: 'it-solutions',
    name: 'IT Asset Management',
    shortName: 'Asset Management',
    tagline: 'Know what you own before you buy more.',
    summary: 'A live inventory of hardware, software and licenses across your organization — so procurement, audits and renewals stop being guesswork.',
    capabilities: [
      { title: 'Discovery', items: ['Automated hardware discovery', 'Software inventory', 'License tracking'] },
      { title: 'Lifecycle', items: ['Procurement tracking', 'Warranty and depreciation tracking', 'End-of-life planning and disposal'] },
      { title: 'Compliance', items: ['License compliance reporting', 'Audit readiness', 'Usage vs entitlement analysis'] },
    ],
    process: [
      { title: 'Discover everything', detail: 'Automated discovery builds a live inventory of hardware, software and licenses — including the shadow IT nobody remembers buying.' },
      { title: 'Reconcile & tag', detail: 'Assets are matched against procurement and licensing records to close the gap between what you own and what you\'re paying for.' },
      { title: 'Track the lifecycle', detail: 'Warranty, depreciation and end-of-life dates are tracked so replacement is planned, not reactive.' },
      { title: 'Report for audits', detail: 'Compliance and usage reports are generated on demand, so an audit or renewal never triggers a scramble.' },
    ],
    outcomes: ['No more paying for licenses nobody uses', 'Audit-ready records without a scramble', 'Replacement budgets planned ahead of failure, not after'],
    faq: [
      { q: 'Can this integrate with our existing procurement process?', a: 'Yes — asset records can feed from and into your procurement and finance workflows rather than living as a separate spreadsheet.' },
    ],
  },
  {
    slug: 'active-directory-management',
    category: 'it-solutions',
    name: 'Active Directory Management',
    shortName: 'Active Directory',
    tagline: 'The directory behind every login, kept clean and under control.',
    summary: 'Setup, cleanup and ongoing management of Active Directory and Azure AD — user objects, groups, permissions and domain structure kept accurate as your organization changes.',
    capabilities: [
      { title: 'Structure', items: ['Domain and organizational unit design', 'Group policy configuration', 'Hybrid AD / Azure AD setup', 'Trust and multi-domain management'] },
      { title: 'Day-to-day management', items: ['User and group provisioning', 'Permission and access reviews', 'Delegated administration', 'Bulk account operations'] },
      { title: 'Hygiene & reporting', items: ['Stale and orphaned account cleanup', 'Password policy enforcement', 'Change auditing', 'Access and compliance reporting'] },
    ],
    process: [
      { title: 'Audit the directory', detail: 'We map the existing domain structure, groups and permissions to find stale accounts and orphaned access before changing anything.' },
      { title: 'Design clean structure', detail: 'OU structure, group policy and hybrid Azure AD sync are designed to match how your organization is actually structured today.' },
      { title: 'Remediate in stages', detail: 'Cleanup happens in controlled phases so active users are never disrupted mid-change.' },
      { title: 'Maintain & audit', detail: 'Ongoing provisioning, access reviews and change auditing keep the directory accurate as people join, move and leave.' },
    ],
    outcomes: ['Fewer stale accounts and orphaned permissions sitting as risk', 'Faster, consistent onboarding and offboarding', 'A documented, auditable record of who has access to what'],
    faq: [
      { q: 'Can you clean up an AD environment that\'s grown messy over the years?', a: 'Yes — this is one of the most common starting points. We audit the existing structure first, then remediate in stages so nothing breaks for active users.' },
      { q: 'Do you support hybrid environments with both on-prem AD and Azure AD?', a: 'Yes, including synchronization, hybrid identity setup and management across both.' },
    ],
  },
  {
    slug: 'endpoint-management',
    category: 'it-solutions',
    name: 'Endpoint Management',
    shortName: 'Endpoint Management',
    tagline: 'Every device managed the same way, at scale.',
    summary: 'Centralized management of desktops, laptops and mobile devices — configuration, patching and security enforced consistently across the fleet.',
    capabilities: [
      { title: 'Configuration', items: ['Standardized device builds', 'Policy enforcement', 'Remote configuration'] },
      { title: 'Patch & update management', items: ['OS patching', 'Application updates', 'Patch compliance reporting'] },
      { title: 'Mobile device management', items: ['Enrollment and provisioning', 'App management', 'Remote wipe for lost or stolen devices'] },
      { title: 'Monitoring', items: ['Health and compliance dashboards', 'Proactive alerting'] },
    ],
    process: [
      { title: 'Baseline the fleet', detail: 'Every device — desktop, laptop, mobile — is inventoried and checked against a standard configuration.' },
      { title: 'Standardize builds', detail: 'Consistent policies, patching schedules and security settings are pushed across the fleet, closing configuration drift.' },
      { title: 'Automate patching', detail: 'OS and application updates roll out on a defined schedule, with compliance reporting so nothing is silently missed.' },
      { title: 'Monitor & respond', detail: 'Health dashboards flag non-compliant or at-risk devices, and lost or stolen devices can be wiped remotely and immediately.' },
    ],
    outcomes: ['Consistent configuration across every device, not just the ones IT remembers', 'Faster provisioning for new hires', 'Lost or stolen devices contained immediately'],
    faq: [
      { q: 'Does this work for a hybrid or fully remote workforce?', a: 'Yes — endpoint management is done over the internet, so it works the same whether a device is in the office or at home.' },
    ],
  },
  {
    slug: 'backup-disaster-recovery',
    category: 'it-solutions',
    name: 'Backup & Disaster Recovery',
    shortName: 'Backup & DR',
    tagline: 'Prepare for the day something goes wrong.',
    summary: 'Backup strategy and disaster recovery planning built around your actual recovery time needs, tested regularly rather than assumed to work.',
    capabilities: [
      { title: 'Backup', items: ['Server and workstation backup', 'Cloud and SaaS data backup (Microsoft 365, Google Workspace)', 'Immutable backup for ransomware protection'] },
      { title: 'Disaster recovery', items: ['Recovery time and recovery point objectives (RTO/RPO)', 'Failover planning', 'Disaster recovery site setup'] },
      { title: 'Testing', items: ['Scheduled recovery drills', 'Backup integrity verification', 'Documentation and runbooks'] },
    ],
    process: [
      { title: 'Define RTO/RPO', detail: 'We start by agreeing how much data loss and downtime is actually acceptable for each system — not a default number.' },
      { title: 'Design the backup strategy', detail: 'Backup targets, frequency and immutability settings are built around those recovery objectives, including cloud and SaaS data.' },
      { title: 'Implement & automate', detail: 'Backups run on schedule with alerting on failures, so a missed backup is caught the same day, not during a crisis.' },
      { title: 'Test recovery', detail: 'Scheduled recovery drills confirm restores actually work — a backup that\'s never been tested is a guess, not a plan.' },
    ],
    outcomes: ['A backup that\'s actually confirmed to restore', 'A defined, agreed recovery time instead of "we\'ll figure it out"', 'Protection against ransomware targeting backups specifically'],
    faq: [
      { q: 'How often should backups be tested?', a: 'We recommend quarterly recovery drills at minimum, more frequently for systems where downtime is most costly.' },
      { q: 'What\'s the difference between backup and disaster recovery?', a: 'Backup protects the data. Disaster recovery is the plan for getting the whole business back online — people, systems and data together — after a major disruption.' },
    ],
  },
  {
    slug: 'manageengine-solutions',
    category: 'business-software',
    name: 'ManageEngine Solutions',
    shortName: 'ManageEngine',
    tagline: 'Enterprise IT management, properly configured.',
    summary: 'Deployment and management of the ManageEngine suite for service desk, endpoint, asset and identity management.',
    capabilities: [
      { title: 'Applications covered', items: ['ServiceDesk Plus', 'Endpoint Central', 'AssetExplorer', 'Applications Manager', 'OpManager', 'ADManager Plus', 'Password Manager Pro', 'Mobile Device Manager Plus'] },
      { title: 'Services', items: ['Deployment and configuration', 'Workflow and SLA setup', 'Integration with existing ITSM processes', 'Ongoing administration'] },
    ],
    process: [
      { title: 'Scope the starting module', detail: 'Most engagements start with one pain point — service desk or endpoints — rather than a full-suite deployment on day one.' },
      { title: 'Deploy & configure', detail: 'SLAs, workflows and integrations with your existing ITSM process are configured before go-live.' },
      { title: 'Expand deliberately', detail: 'Additional modules are added only once the first is stable and adopted, avoiding an over-built, under-used platform.' },
      { title: 'Administer ongoing', detail: 'We handle patching, upgrades and configuration changes as your process evolves.' },
    ],
    outcomes: ['A single console for service desk, assets and endpoints', 'Faster ticket resolution through configured workflows', 'Reduced licensing waste from proper setup'],
    faq: [
      { q: 'Do we need every module, or can we start with one?', a: 'Most clients start with ServiceDesk Plus or Endpoint Central and expand — we scope based on your current pain point, not a full-suite sale.' },
    ],
  },
  {
    slug: 'itsm',
    category: 'business-software',
    name: 'ITSM',
    shortName: 'ITSM',
    tagline: 'IT service management that follows a real process.',
    summary: 'Implementation of IT service management practices and tooling — incident, problem, change and asset management aligned to ITIL principles.',
    capabilities: [
      { title: 'Processes', items: ['Incident management', 'Problem management', 'Change management', 'Request fulfillment', 'Knowledge management'] },
      { title: 'Tooling', items: ['ServiceDesk Plus / Zoho Desk setup', 'SLA and escalation configuration', 'Reporting dashboards'] },
    ],
    process: [
      { title: 'Map current process', detail: 'We document how incidents, changes and requests are actually handled today, gaps included.' },
      { title: 'Design practical ITIL', detail: 'Incident, problem and change management processes are implemented at the depth that fits your size — not full ITIL ceremony you won\'t sustain.' },
      { title: 'Configure the tooling', detail: 'ServiceDesk Plus or Zoho Desk is configured with the SLAs and escalation paths defined in the design step.' },
      { title: 'Refine with data', detail: 'Reporting on repeat incidents and problem trends drives ongoing process refinement after go-live.' },
    ],
    outcomes: ['Fewer repeat incidents through real problem management', 'Changes made without unplanned side effects', 'A knowledge base that reduces repeat tickets'],
    faq: [
      { q: 'Do we need to be ITIL certified to adopt this?', a: 'No — we implement the practical parts of ITIL that fit your size, without requiring formal certification or process overhead you don\'t need yet.' },
    ],
  },
  {
    slug: 'business-process-automation',
    category: 'business-software',
    name: 'Business Automation',
    shortName: 'Automation',
    tagline: 'Remove the manual steps between systems.',
    summary: 'Workflow automation that connects the tools you already use, removing repetitive manual handoffs between departments.',
    capabilities: [
      { title: 'Automation types', items: ['Approval workflows', 'Data sync between systems', 'Notification and alerting automation', 'Scheduled reporting'] },
      { title: 'Platforms', items: ['Zoho Flow', 'Power Automate', 'Custom integration scripts'] },
    ],
    process: [
      { title: 'Map manual work', detail: 'We identify where repetitive, manual steps between systems cause the most delay or error.' },
      { title: 'Prioritize by impact', detail: 'Automations are ranked by effort versus time saved, so the first wins are fast and visible.' },
      { title: 'Build the automation', detail: 'Workflows are built in Zoho Flow, Power Automate or custom scripts depending on the systems involved.' },
      { title: 'Monitor & adjust', detail: 'Automated workflows are monitored for failures and adjusted as your processes change.' },
    ],
    outcomes: ['Hours per week returned from manual data entry', 'Fewer errors from copy-pasting between systems', 'Faster approvals through automated routing'],
    faq: [
      { q: 'How do you decide what to automate first?', a: 'We start by mapping where manual, repetitive work causes the most delay or error, then prioritize by effort versus time saved.' },
    ],
  },
  {
    slug: 'software-integration',
    category: 'business-software',
    name: 'Software Integration',
    shortName: 'Integration',
    tagline: 'Your systems, talking to each other.',
    summary: 'Integration between business systems, ERP, helpdesk, accounting and custom applications, so data entered once shows up everywhere it\'s needed.',
    capabilities: [
      { title: 'Integration types', items: ['API-based integration', 'Webhook automation', 'Middleware setup', 'Legacy system connectors'] },
      { title: 'Common connections', items: ['ERP to accounting', 'Helpdesk to finance', 'E-commerce to inventory', 'HR to payroll'] },
    ],
    process: [
      { title: 'Map data flow', detail: 'We identify where the same data is entered more than once across business, ERP, helpdesk and accounting systems.' },
      { title: 'Choose the integration method', detail: 'API, webhook or middleware — the approach is chosen based on what each system actually supports.' },
      { title: 'Build & test', detail: 'Integrations are built and tested against real data before going live, including error handling for edge cases.' },
      { title: 'Maintain as systems change', detail: 'Ongoing monitoring catches breakage when a connected system updates its API or data structure.' },
    ],
    outcomes: ['One source of truth instead of duplicated data entry', 'Fewer reconciliation errors between finance and sales', 'New tools added without breaking existing workflows'],
    faq: [
      { q: 'Can you integrate a custom in-house system?', a: 'Yes, provided it exposes an API or database access we can connect through — we\'ll assess feasibility during scoping.' },
    ],
  },

  // AI & AUTOMATION
  {
    slug: 'generative-ai',
    category: 'ai-automation',
    name: 'Generative AI',
    shortName: 'Generative AI',
    tagline: 'AI that solves real business problems.',
    summary: 'Applied generative AI for content, drafting and knowledge tasks — scoped to specific, measurable outcomes rather than sold as a buzzword.',
    capabilities: [
      { title: 'Use cases', items: ['Document and report drafting', 'Content generation and summarization', 'Knowledge base Q&A', 'Meeting and call summarization'] },
      { title: 'Delivery', items: ['Model selection and integration', 'Prompt and workflow design', 'Guardrails and review processes'] },
    ],
    process: [
      { title: 'Identify the use case', detail: 'We scope a specific, measurable task — drafting, summarization, knowledge lookup — rather than a vague \'add AI\' brief.' },
      { title: 'Select the model', detail: 'Model and integration approach are chosen based on the task, cost and your data privacy requirements.' },
      { title: 'Design guardrails', detail: 'Review checkpoints and accuracy boundaries are built in before rollout, so outputs are checked, not blindly trusted.' },
      { title: 'Deploy & measure', detail: 'We track time saved and output quality after launch, and adjust prompts or scope based on real usage.' },
    ],
    outcomes: ['Hours saved on first-draft work', 'Faster access to information buried in documents', 'AI usage with clear boundaries on accuracy and review'],
    faq: [
      { q: 'Will this replace staff roles?', a: 'We scope these as augmentation for repetitive drafting and lookup work, freeing people for judgment-heavy tasks — not as a headcount-reduction tool by default.' },
      { q: 'What about data privacy — does our data train a public model?', a: 'We configure deployments so business data is not used to train third-party models, and confirm this in writing as part of scoping.' },
    ],
  },
  {
    slug: 'ai-agents',
    category: 'ai-automation',
    name: 'AI Agents',
    shortName: 'AI Agents',
    tagline: 'Autonomous workflows that take action, not just answer questions.',
    summary: 'AI agents that read information, make decisions within defined rules, trigger actions and keep people informed — for workflows that are too complex for simple automation but too repetitive for a person to do manually.',
    capabilities: [
      { title: 'Capabilities', items: ['Read information from documents and systems', 'Make decisions against defined rules', 'Trigger actions in connected systems', 'Update records', 'Notify employees', 'Generate reports'] },
      { title: 'Example workflows', items: ['Lead qualification and routing', 'Invoice exception handling', 'Ticket triage and assignment', 'Compliance checks before approval'] },
    ],
    process: [
      { title: 'Map the workflow', detail: 'We document each step of the process the agent will handle, including every decision point.' },
      { title: 'Set decision boundaries', detail: 'Rules for what the agent can decide autonomously versus what needs human approval are defined explicitly upfront.' },
      { title: 'Build & connect', detail: 'The agent is built to read from and act in your existing systems — not as a disconnected side tool.' },
      { title: 'Run with oversight', detail: 'Agents launch with approval checkpoints in place, with autonomy expanded only as performance is proven over time.' },
    ],
    outcomes: ['Multi-step workflows running without manual handoffs', 'Faster response on time-sensitive processes', 'Consistent decisions instead of ones that vary by who\'s on shift'],
    faq: [
      { q: 'How do you prevent an agent from making a wrong decision at scale?', a: 'We build agents with explicit decision boundaries and required human approval at defined checkpoints — they don\'t operate with unrestricted autonomy.' },
    ],
  },
  {
    slug: 'intelligent-document-processing',
    category: 'ai-automation',
    name: 'Intelligent Document Processing',
    shortName: 'Document Processing',
    tagline: 'Stop retyping what\'s already on the page.',
    summary: 'Automated extraction and processing of invoices, purchase orders, forms, contracts, emails and reports — turning unstructured documents into usable data.',
    capabilities: [
      { title: 'Document types', items: ['Invoices', 'Purchase orders', 'Forms and applications', 'Contracts', 'Emails', 'Reports'] },
      { title: 'Processing', items: ['Data extraction', 'Validation against business rules', 'Routing for approval', 'System entry / integration'] },
    ],
    process: [
      { title: 'Sample the documents', detail: 'We collect real examples of the invoices, forms or contracts to be processed, since extraction accuracy depends heavily on document quality.' },
      { title: 'Build extraction rules', detail: 'Data extraction and validation rules are built against those real samples, not generic templates.' },
      { title: 'Pilot on live volume', detail: 'A proof-of-concept run on real, current documents confirms accuracy before full rollout — important for scanned or handwritten input.' },
      { title: 'Route & integrate', detail: 'Extracted data is validated against business rules and routed into your existing systems or approval flow.' },
    ],
    outcomes: ['Invoice processing time cut from days to minutes', 'Fewer manual entry errors', 'Staff freed from data entry to handle exceptions instead'],
    faq: [
      { q: 'Does this work with scanned or handwritten documents?', a: 'Yes for most scanned documents; accuracy on handwriting varies and is assessed during a proof-of-concept before full rollout.' },
    ],
  },
  {
    slug: 'ai-assistants',
    category: 'ai-automation',
    name: 'AI Assistants',
    shortName: 'AI Assistants',
    tagline: 'An assistant that knows your company\'s knowledge.',
    summary: 'Internal AI assistants that answer employee questions using your own documentation, policies and systems — and AI-powered customer support assistants for common inquiries.',
    capabilities: [
      { title: 'Internal assistants', items: ['Company knowledge Q&A', 'Policy and process lookup', 'Onboarding support'] },
      { title: 'Customer-facing assistants', items: ['Common question handling', 'Order and account status lookup', 'Escalation to a human for complex issues'] },
    ],
    process: [
      { title: 'Curate the knowledge source', detail: 'We identify and clean up the documentation, policies or systems the assistant will draw answers from — a messy source produces messy answers.' },
      { title: 'Define accuracy boundaries', detail: 'The assistant is configured to say \'I don\'t know\' and escalate rather than guess, with those boundaries set before launch.' },
      { title: 'Deploy to a pilot group', detail: 'A limited rollout surfaces gaps in the knowledge source before it\'s opened to everyone.' },
      { title: 'Expand & refine', detail: 'Coverage expands based on real questions asked, with the knowledge source updated as gaps are found.' },
    ],
    outcomes: ['Fewer repetitive questions landing on the helpdesk or support team', 'Faster answers for employees and customers alike', 'A documented, reviewable knowledge source instead of tribal knowledge'],
    faq: [
      { q: 'What happens when the assistant doesn\'t know the answer?', a: 'It\'s configured to say so and escalate to a human rather than guess — accuracy boundaries are part of the initial design.' },
    ],
  },
  {
    slug: 'ai-consulting',
    category: 'ai-automation',
    name: 'AI Consulting',
    shortName: 'AI Consulting',
    tagline: 'Find out where AI actually pays off before you build anything.',
    summary: 'Assessment and roadmap work to identify where AI and automation genuinely help your business — and where they don\'t.',
    capabilities: [
      { title: 'Assessment', items: ['Process and workflow audit', 'Opportunity identification and prioritization', 'Feasibility and data-readiness review'] },
      { title: 'Roadmap', items: ['Phased implementation plan', 'Cost and ROI estimation', 'Vendor and tooling recommendations'] },
    ],
    process: [
      { title: 'Audit current workflows', detail: 'We review your actual processes to find where manual, repetitive work is costing the most time or introducing the most errors.' },
      { title: 'Assess feasibility', detail: 'Each opportunity is checked against data readiness and realistic effort — not every idea that sounds good is feasible yet.' },
      { title: 'Prioritize & estimate ROI', detail: 'Opportunities are ranked with a real cost and time-saved estimate, so you can compare them against each other.' },
      { title: 'Build a phased roadmap', detail: 'The result is a sequenced plan — what to do first, second and later — rather than an all-at-once recommendation.' },
    ],
    outcomes: ['A prioritized list of where AI will actually save time or money', 'Avoided spend on AI projects that wouldn\'t have worked', 'A realistic phased plan instead of an all-at-once bet'],
    faq: [
      { q: 'Do you only recommend Ascent-built solutions?', a: 'No — where a smaller, off-the-shelf tool solves the problem better than a custom build, we\'ll say so.' },
    ],
  },

  // SOFTWARE ENGINEERING / QA
  {
    slug: 'software-testing',
    category: 'software-engineering',
    name: 'Software Testing',
    shortName: 'Software Testing',
    tagline: 'Quality engineered into every release.',
    summary: 'Functional and regression testing that validates software against actual business requirements — catching problems before your customers do.',
    capabilities: [
      { title: 'Functional testing', items: ['Requirements-based test design', 'Manual functional validation', 'Exploratory testing'] },
      { title: 'Regression testing', items: ['Regression suite design', 'Impact analysis after changes', 'Release sign-off testing'] },
      { title: 'Cross-browser & device', items: ['Browser compatibility testing', 'Mobile and responsive testing'] },
    ],
    process: [
      { title: 'Review requirements', detail: 'Test cases are built directly from actual business requirements, not assumptions about what the software should do.' },
      { title: 'Design test coverage', detail: 'Functional and exploratory testing plans are scoped to cover the highest-risk areas of the application first.' },
      { title: 'Execute & log defects', detail: 'Testing is run against each release, with defects logged, reproduced and prioritized clearly for the dev team.' },
      { title: 'Sign off releases', detail: 'Regression testing confirms nothing broke before a release goes out, with a clear go/no-go recommendation.' },
    ],
    outcomes: ['Fewer defects reaching production', 'Faster, more confident release cycles', 'A documented test suite that grows with the product'],
    faq: [
      { q: 'Do you test web, mobile, or both?', a: 'Both — testing scope is defined per project based on your platforms.' },
    ],
  },
  {
    slug: 'test-automation',
    category: 'software-engineering',
    name: 'Test Automation',
    shortName: 'Test Automation',
    tagline: 'Automated suites that keep pace with your releases.',
    summary: 'Maintainable automated test suites for web and application workflows, built to run in your pipeline rather than sit unused after handover.',
    capabilities: [
      { title: 'Frameworks', items: ['Selenium / Playwright / Cypress', 'Mobile automation (Appium)', 'Framework design and maintenance'] },
      { title: 'Integration', items: ['CI/CD pipeline integration', 'Automated reporting', 'Test data management'] },
    ],
    process: [
      { title: 'Assess what to automate', detail: 'We identify which test cases are stable and repetitive enough to be worth automating, rather than automating everything indiscriminately.' },
      { title: 'Build the framework', detail: 'Suites are built in Selenium, Playwright, Cypress or Appium depending on your platform, structured for maintainability.' },
      { title: 'Integrate into CI/CD', detail: 'Automated tests run on every build in your pipeline, not just before a manual release check.' },
      { title: 'Document for handover', detail: 'Suites are documented and structured so your own team can maintain and extend them after we hand over.' },
    ],
    outcomes: ['Regression testing that takes minutes, not days', 'Automated checks on every build, not just before release', 'A suite your own team can maintain after handover'],
    faq: [
      { q: 'Will we be locked into your team to maintain the suite?', a: 'No — we document and structure suites for handover, and can train your team to own them going forward.' },
    ],
  },
  {
    slug: 'api-testing',
    category: 'software-engineering',
    name: 'API Testing',
    shortName: 'API Testing',
    tagline: 'Validate what your users never see, but always depend on.',
    summary: 'Thorough validation of APIs for correctness, security and reliability — response accuracy, data integrity, authentication and error handling.',
    capabilities: [
      { title: 'Coverage', items: ['Response and data validation', 'Authentication and authorization testing', 'Error handling and edge cases', 'Contract and integration testing'] },
      { title: 'Tooling', items: ['Postman / REST Assured', 'Automated API test suites', 'CI pipeline integration'] },
    ],
    process: [
      { title: 'Map the API surface', detail: 'Every endpoint, authentication flow and expected response is documented before test design begins.' },
      { title: 'Design test cases', detail: 'Coverage includes valid responses, error handling, edge cases and authorization — not just the happy path.' },
      { title: 'Automate & integrate', detail: 'Test suites are built to run automatically on every deployment through your CI pipeline.' },
      { title: 'Monitor for drift', detail: 'Contract tests catch silent breaking changes when an API evolves, before they reach production.' },
    ],
    outcomes: ['Integration failures caught before they reach production', 'Documented, repeatable API test coverage', 'Fewer downstream incidents from silent API changes'],
    faq: [
      { q: 'Can this run automatically on every deployment?', a: 'Yes — API test suites are built to integrate directly into your CI/CD pipeline.' },
    ],
  },
  {
    slug: 'performance-testing',
    category: 'software-engineering',
    name: 'Performance Testing',
    shortName: 'Performance Testing',
    tagline: 'Know how your application behaves under real load — before your customers find out.',
    summary: 'Load, stress and scalability testing that shows how your application performs under realistic and peak conditions.',
    capabilities: [
      { title: 'Test types', items: ['Load testing', 'Stress testing', 'Scalability testing', 'Endurance / soak testing'] },
      { title: 'Analysis', items: ['Bottleneck identification', 'Infrastructure recommendations', 'Benchmark reporting'] },
    ],
    process: [
      { title: 'Define realistic load', detail: 'We model expected and peak traffic based on your actual usage data, not arbitrary numbers.' },
      { title: 'Run load & stress tests', detail: 'Tests simulate normal load, peak spikes and sustained endurance to find where performance actually degrades.' },
      { title: 'Identify bottlenecks', detail: 'Results are analyzed to pinpoint the specific component — database, API, infrastructure — causing slowdown.' },
      { title: 'Recommend & retest', detail: 'We provide concrete infrastructure or code recommendations, then retest to confirm the fix worked.' },
    ],
    outcomes: ['Confidence in performance before a major launch or sale event', 'Bottlenecks identified before they cause an outage', 'Data-backed infrastructure scaling decisions'],
    faq: [
      { q: 'What tools do you use for load testing?', a: 'JMeter, k6 and similar tools depending on the application architecture and target load profile.' },
    ],
  },
  {
    slug: 'managed-qa',
    category: 'software-engineering',
    name: 'Managed QA',
    shortName: 'Managed QA',
    tagline: 'An ongoing QA capability, without building a QA department.',
    summary: 'A dedicated QA function embedded with your development team, providing continuous testing without the overhead of hiring and managing an internal QA team.',
    capabilities: [
      { title: 'Scope', items: ['Embedded QA engineers', 'Test planning and execution', 'Automation strategy and upkeep', 'Release quality gatekeeping'] },
      { title: 'Reporting', items: ['Sprint-level quality metrics', 'Defect trend reporting', 'Release readiness sign-off'] },
    ],
    process: [
      { title: 'Embed with your team', detail: 'QA engineers join your existing sprint ceremonies — planning, standups, retros — as part of the delivery team, not a separate silo.' },
      { title: 'Build the test strategy', detail: 'Test planning and automation strategy are set up to match your release cadence.' },
      { title: 'Execute every sprint', detail: 'Testing runs continuously alongside development, with defects surfaced before release, not after.' },
      { title: 'Report on quality trends', detail: 'Sprint-level quality metrics and defect trends give leadership a real, ongoing view of product health.' },
    ],
    outcomes: ['Consistent QA coverage sprint over sprint', 'No hiring, training or attrition risk for a QA function', 'Quality metrics leadership can track over time'],
    faq: [
      { q: 'How does managed QA fit into an existing agile team?', a: 'QA engineers join your existing ceremonies — sprint planning, standups, retros — as an embedded part of the delivery team, not a separate silo.' },
    ],
  },
  {
    slug: 'web-design-development',
    category: 'web-digital-growth',
    name: 'Web Design & Development',
    shortName: 'Web Design',
    tagline: 'Modern websites designed to look credible and convert attention into action.',
    summary: 'Strategy, UX, responsive design and development for fast, accessible websites that reflect your brand and make it easy for customers to take the next step.',
    capabilities: [
      { title: 'Strategy & UX', items: ['Website discovery', 'Information architecture', 'User journeys', 'Wireframes', 'Conversion planning'] },
      { title: 'Design', items: ['UI design', 'Responsive layouts', 'Design systems', 'Brand integration', 'Interaction design'] },
      { title: 'Development', items: ['Responsive front-end', 'CMS integration', 'Forms and lead capture', 'Analytics setup', 'Performance optimisation'] },
      { title: 'Launch', items: ['SEO foundations', 'Accessibility checks', 'Cross-browser QA', 'Deployment support', 'Post-launch improvements'] },
    ],
    process: [
      { title: 'Discover', detail: 'We clarify your audience, goals, content and conversion priorities before designing screens.' },
      { title: 'Design', detail: 'We turn the strategy into a clear page structure and visual system, then refine it around real user journeys.' },
      { title: 'Build', detail: 'The approved design is developed responsively with performance, accessibility and maintainability built in.' },
      { title: 'Launch & improve', detail: 'After QA and launch, analytics reveal where visitors drop off so the site can keep getting better.' },
    ],
    outcomes: ['A stronger first impression', 'Clearer customer journeys and calls to action', 'Faster, mobile-friendly experiences', 'A website built to support measurable growth'],
    faq: [
      { q: 'Can you build on our existing CMS?', a: 'Yes. We can work with the platform that already fits your team or recommend a better option based on your content and workflow.' },
      { q: 'Do you provide the website content too?', a: 'Yes. We can help with content structure, page copy, SEO content and creative assets as part of the project.' },
    ],
  },
  {
    slug: 'website-redesign',
    category: 'web-digital-growth',
    name: 'Website Redesign',
    shortName: 'Site Redesign',
    tagline: 'Turn an outdated website into a sharper digital experience.',
    summary: 'A practical redesign service for businesses whose current site looks dated, performs poorly, is difficult to manage or no longer supports how customers buy.',
    capabilities: [
      { title: 'Audit', items: ['UX review', 'Conversion audit', 'Technical review', 'Mobile review', 'Analytics review'] },
      { title: 'Experience', items: ['Navigation redesign', 'Page hierarchy', 'Conversion paths', 'Mobile-first layouts', 'Accessibility improvements'] },
      { title: 'Visual refresh', items: ['Updated UI', 'Typography and spacing', 'Component system', 'Brand refinement', 'Imagery direction'] },
      { title: 'Migration & launch', items: ['Content migration', 'Redirect planning', 'SEO preservation', 'QA', 'Launch support'] },
    ],
    process: [
      { title: 'Audit the current site', detail: 'We identify what should stay, what should change and what is holding the current website back.' },
      { title: 'Plan the new experience', detail: 'A revised structure and conversion journey gives the redesign a business purpose beyond making the site look newer.' },
      { title: 'Redesign & rebuild', detail: 'We modernise the interface and rebuild key templates while protecting valuable content and search visibility.' },
      { title: 'Launch & optimise', detail: 'We test the new site, monitor behaviour after launch and prioritise improvements based on evidence.' },
    ],
    outcomes: ['A more modern and credible online presence', 'Better mobile usability', 'Clearer navigation and conversion paths', 'A maintainable website ready for future growth'],
    faq: [
      { q: 'Can you redesign the site without changing the platform?', a: 'Yes. If the existing platform is still a good fit, we can redesign and improve it rather than forcing a costly rebuild.' },
      { q: 'Will our SEO rankings be protected?', a: 'We plan redirects, metadata, page structure and technical SEO carefully to minimise avoidable ranking loss during the redesign.' },
    ],
  },
  {
    slug: 'seo',
    category: 'web-digital-growth',
    name: 'Search Engine Optimisation (SEO)',
    shortName: 'SEO',
    tagline: 'Get found by the people already searching for what you offer.',
    summary: 'Technical, on-page and content SEO focused on qualified visibility, useful traffic and measurable improvements rather than vanity rankings.',
    capabilities: [
      { title: 'Technical SEO', items: ['Crawlability', 'Site speed', 'Indexation', 'Structured data', 'Core Web Vitals'] },
      { title: 'On-page SEO', items: ['Keyword mapping', 'Metadata', 'Internal linking', 'Content optimisation', 'Local SEO'] },
      { title: 'Content', items: ['Topic strategy', 'Landing pages', 'Search-led articles', 'Content briefs', 'Content refreshes'] },
      { title: 'Reporting', items: ['Search Console', 'Analytics', 'Visibility tracking', 'Lead attribution', 'Monthly recommendations'] },
    ],
    process: [
      { title: 'Find the opportunities', detail: 'We audit technical health, search demand, competitors and existing content to identify the highest-value opportunities.' },
      { title: 'Fix the foundations', detail: 'Technical and on-page issues are addressed first so future content has a stronger platform to perform on.' },
      { title: 'Build authority', detail: 'We create and improve useful pages around topics that match your customers and commercial priorities.' },
      { title: 'Measure & refine', detail: 'Search visibility, traffic and conversions are reviewed continuously to focus effort where it creates business value.' },
    ],
    outcomes: ['More qualified organic traffic', 'Stronger search visibility', 'A scalable content roadmap', 'Better attribution from search to enquiry'],
    faq: [
      { q: 'How long does SEO take?', a: 'SEO compounds over time. We establish early technical wins, then build toward larger gains through content and ongoing optimisation.' },
    ],
  },
  {
    slug: 'digital-marketing',
    category: 'web-digital-growth',
    name: 'Digital Marketing',
    shortName: 'Digital Marketing',
    tagline: 'Connect your website, campaigns and data into one growth engine.',
    summary: 'Integrated digital marketing across paid, organic, email and conversion channels, built around clear audiences, offers and measurable outcomes.',
    capabilities: [
      { title: 'Paid media', items: ['Google Ads', 'Meta campaigns', 'Retargeting', 'Landing pages', 'Campaign optimisation'] },
      { title: 'Organic growth', items: ['SEO', 'Content strategy', 'Local visibility', 'Social distribution', 'Digital PR support'] },
      { title: 'Lifecycle', items: ['Email campaigns', 'Lead nurturing', 'Marketing automation', 'Audience segmentation', 'CRM handoff'] },
      { title: 'Measurement', items: ['Analytics', 'Conversion tracking', 'Attribution', 'Dashboards', 'Performance reporting'] },
    ],
    process: [
      { title: 'Set the growth plan', detail: 'We define audiences, offers, channels, targets and measurement before spending time or budget on campaigns.' },
      { title: 'Build campaigns', detail: 'Creative, landing pages, tracking and audience structures are prepared around the customer journey.' },
      { title: 'Launch & learn', detail: 'Campaigns are monitored closely so budget moves toward the audiences, messages and channels producing results.' },
      { title: 'Optimise continuously', detail: 'Performance reporting becomes a monthly action plan, not just a report of what happened.' },
    ],
    outcomes: ['More qualified leads', 'Better marketing budget efficiency', 'Clear visibility into campaign performance', 'A connected customer acquisition journey'],
    faq: [
      { q: 'Do you manage both paid and organic marketing?', a: 'Yes. We can manage a focused channel mix or coordinate multiple channels so paid campaigns and organic activity reinforce each other.' },
    ],
  },
  {
    slug: 'social-media-marketing',
    category: 'web-digital-growth',
    name: 'Social Media Marketing',
    shortName: 'Social Media',
    tagline: 'Build a social presence people recognise and trust.',
    summary: 'Strategy, content planning, creative and campaign management for social channels that support awareness, engagement and demand generation.',
    capabilities: [
      { title: 'Strategy', items: ['Channel strategy', 'Audience definition', 'Content pillars', 'Campaign planning'] },
      { title: 'Content', items: ['Social copy', 'Creative direction', 'Short-form video concepts', 'Content calendars', 'Community content'] },
      { title: 'Campaigns', items: ['Paid social', 'Lead generation', 'Retargeting', 'Creative testing'] },
      { title: 'Management', items: ['Scheduling', 'Community response', 'Performance reporting', 'Monthly optimisation'] },
    ],
    process: [
      { title: 'Define the voice', detail: 'We align your channels to your audience, positioning and brand so content feels consistent rather than improvised.' },
      { title: 'Plan the content', detail: 'A practical content calendar balances educational, proof-led, promotional and brand-building content.' },
      { title: 'Create & publish', detail: 'Content is produced, approved and scheduled with platform-specific formats in mind.' },
      { title: 'Learn from performance', detail: 'We use engagement, reach, traffic and leads to improve the next month of content and campaigns.' },
    ],
    outcomes: ['A consistent social presence', 'More relevant audience engagement', 'Stronger brand recall', 'Content aligned to business goals'],
    faq: [
      { q: 'Which social platforms do you manage?', a: 'We recommend platforms based on where your customers actually spend time rather than trying to maintain every channel.' },
    ],
  },
  {
    slug: 'content-marketing',
    category: 'web-digital-growth',
    name: 'Content Marketing',
    shortName: 'Content',
    tagline: 'Useful content that earns attention and supports sales.',
    summary: 'Content strategy and production that turns your expertise into web pages, articles, case studies and campaigns that help customers choose you.',
    capabilities: [
      { title: 'Strategy', items: ['Audience research', 'Topic clusters', 'Editorial planning', 'Content funnels'] },
      { title: 'Content', items: ['Website copy', 'Blog articles', 'Case studies', 'Guides and resources', 'Email content'] },
      { title: 'Conversion', items: ['Landing pages', 'Lead magnets', 'Calls to action', 'Content upgrades'] },
      { title: 'Optimisation', items: ['SEO optimisation', 'Content refreshes', 'Performance analysis', 'Repurposing'] },
    ],
    process: [
      { title: 'Map the audience', detail: 'We identify the questions, objections and decision points that content should address.' },
      { title: 'Build the editorial plan', detail: 'Topics are prioritised around search demand, expertise and commercial relevance.' },
      { title: 'Create & publish', detail: 'Content is produced to your brand standards and structured for both readers and search engines.' },
      { title: 'Repurpose & improve', detail: 'Strong ideas are reused across channels and refreshed as audience behaviour and search demand change.' },
    ],
    outcomes: ['A consistent source of useful content', 'More organic discovery opportunities', 'Stronger authority and trust', 'Content that supports sales conversations'],
    faq: [
      { q: 'Can you work with our subject-matter experts?', a: 'Yes. We can interview your team and turn their expertise into polished, customer-friendly content.' },
    ],
  },
  {
    slug: 'ecommerce-solutions',
    category: 'web-digital-growth',
    name: 'E-commerce Solutions',
    shortName: 'E-commerce',
    tagline: 'A smoother path from product discovery to checkout.',
    summary: 'E-commerce design, development and optimisation focused on product discovery, trust, checkout experience and sustainable growth.',
    capabilities: [
      { title: 'Store experience', items: ['Storefront design', 'Product discovery', 'Search and filtering', 'Mobile UX', 'Checkout UX'] },
      { title: 'Commerce setup', items: ['Product catalogues', 'Payments', 'Shipping integrations', 'Tax configuration', 'Customer accounts'] },
      { title: 'Growth', items: ['Conversion optimisation', 'SEO', 'Email journeys', 'Remarketing', 'Analytics'] },
      { title: 'Operations', items: ['Inventory workflows', 'CRM integration', 'Reporting', 'Maintenance', 'Support'] },
    ],
    process: [
      { title: 'Map the customer journey', detail: 'We identify friction from first visit through product discovery, checkout and post-purchase.' },
      { title: 'Design the store', detail: 'Navigation, product pages and checkout are designed around clarity, trust and mobile usability.' },
      { title: 'Integrate & build', detail: 'Commerce systems, payments and operational tools are connected into a reliable workflow.' },
      { title: 'Optimise conversion', detail: 'Analytics and testing identify opportunities to improve conversion and average order value.' },
    ],
    outcomes: ['A clearer shopping experience', 'Reduced checkout friction', 'Better mobile conversion potential', 'Connected commerce and marketing data'],
    faq: [
      { q: 'Can you improve an existing online store?', a: 'Yes. We can audit an existing store and focus the project on the highest-impact UX, technical and conversion improvements.' },
    ],
  },
  {
    slug: 'branding-creative',
    category: 'web-digital-growth',
    name: 'Branding & Creative',
    shortName: 'Branding',
    tagline: 'Make the brand match the quality of the business behind it.',
    summary: 'Brand identity refinement and creative direction for businesses that need a more consistent, credible and distinctive presence across digital touchpoints.',
    capabilities: [
      { title: 'Brand strategy', items: ['Positioning', 'Audience definition', 'Brand messaging', 'Value proposition'] },
      { title: 'Identity', items: ['Logo refinement', 'Colour and typography', 'Visual system', 'Brand guidelines'] },
      { title: 'Creative', items: ['Campaign concepts', 'Digital assets', 'Social templates', 'Presentation design'] },
      { title: 'Digital rollout', items: ['Website direction', 'Social presence', 'Marketing templates', 'Launch support'] },
    ],
    process: [
      { title: 'Clarify the brand', detail: 'We align positioning, audience and messaging before changing the visual layer.' },
      { title: 'Create the system', detail: 'The identity is refined into practical visual and verbal rules your team can actually use.' },
      { title: 'Apply it consistently', detail: 'Key digital and marketing touchpoints are updated so the brand feels coherent everywhere.' },
      { title: 'Enable the team', detail: 'Guidelines and reusable assets make it easier to keep the brand consistent after launch.' },
    ],
    outcomes: ['A more consistent brand presence', 'Clearer positioning', 'Reusable creative assets', 'A visual identity ready for digital growth'],
    faq: [
      { q: 'Is this a full rebrand?', a: 'It can be, but it does not have to be. We can refine an existing identity where the fundamentals are strong or build a new system when a bigger change is justified.' },
    ],
  }
]

// Topic-specific imagery for solution cards and service pages.
// Each service has its own visual so the catalogue feels intentional rather than templated.
const categoryImages: Record<CategoryKey, string> = {
  'it-solutions': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
  'business-software': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
  'ai-automation': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80',
  'software-engineering': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80',
  'web-digital-growth': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80',
}

const serviceImageOverrides: Partial<Record<string, string>> = {
  'managed-it-services': 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1400&q=80',
  'it-support-helpdesk': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80',
  'cybersecurity': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=80',
  'essential-eight': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=80',
  'nist-cybersecurity-framework': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&q=80',
  'iso-iec-27001': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80',
  'soc-2-readiness': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80',
  'cis-controls': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80',
  'penetration-testing': 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1400&q=80',
  'vulnerability-assessment': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80',
  'security-operations-soc': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
  'privileged-access-management': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',

  'it-asset-management': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80',
  'active-directory-management': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80',
  'endpoint-management': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1400&q=80',
  'backup-disaster-recovery': 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1400&q=80',
  'observability-itom': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=90',
  'it-training': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80',
  'zoho-solutions': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80',
  'manageengine-solutions': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80',
  'itsm': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80',
  'business-process-automation': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=80',
  'software-integration': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
  'generative-ai': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80',
  'ai-agents': 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1400&q=80',
  'intelligent-document-processing': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80',
  'ai-assistants': 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1400&q=80',
  'ai-consulting': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1400&q=80',
  'software-testing': 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=1400&q=80',
  'test-automation': 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1400&q=80',
  'api-testing': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400&q=80',
  'performance-testing': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80',
  'managed-qa': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80',
  'web-design-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80',
  'website-redesign': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&q=80',
  'seo': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80',
  'digital-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80',
  'social-media-marketing': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&q=80',
  'content-marketing': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1400&q=80',
  'ecommerce-solutions': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80',
  'branding-creative': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&q=80',
}

export function getServiceImage(service: Service) {
  return serviceImageOverrides[service.slug] ?? categoryImages[service.category]
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}

export function getServicesByCategory(category: CategoryKey) {
  return services.filter((s) => s.category === category)
}
