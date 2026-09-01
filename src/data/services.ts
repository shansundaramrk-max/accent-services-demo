export type Capability = { title: string; items: string[] }
export type FAQ = { q: string; a: string }
export type ProcessStep = { title: string; detail: string }
export type CategoryKey = 'it-solutions' | 'business-software' | 'ai-automation' | 'software-engineering'

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
    slug: 'cloud-solutions',
    category: 'it-solutions',
    name: 'Cloud Solutions',
    shortName: 'Cloud',
    tagline: 'Move to cloud on your terms, not the vendor\'s.',
    summary: 'Cloud strategy, migration and management across Microsoft Azure, AWS and Google Cloud — sized to the workload, not sold as one-size-fits-all.',
    capabilities: [
      { title: 'Strategy', items: ['Cloud readiness assessment', 'Cost modeling', 'Migration roadmap', 'Multi-cloud vs single-cloud decisions'] },
      { title: 'Migration', items: ['Server and workload migration', 'Email and productivity suite migration (Microsoft 365, Google Workspace)', 'Data migration'] },
      { title: 'Management', items: ['Cost optimization', 'Cloud security configuration', 'Backup and resilience', 'Ongoing administration'] },
    ],
    process: [
      { title: 'Readiness assessment', detail: 'We evaluate your current workloads, licensing and dependencies to determine what\'s actually ready to move.' },
      { title: 'Cost & migration plan', detail: 'You get a real cost model and migration sequence before committing — not a rough estimate discovered after go-live.' },
      { title: 'Migrate in stages', detail: 'Workloads move in a planned order, with rollback points, to avoid an all-or-nothing cutover.' },
      { title: 'Manage & optimize', detail: 'Post-migration, we monitor spend and right-size resources on an ongoing basis to prevent the typical cost creep.' },
    ],
    outcomes: ['A migration plan with a real cost estimate before you commit', 'Lower total cost through right-sizing, not just a bigger cloud bill', 'Continuity during the move — no surprise downtime'],
    faq: [
      { q: 'Which cloud provider do you recommend?', a: 'It depends on your existing stack, licensing and workload type — we assess before recommending rather than defaulting to one provider.' },
      { q: 'What happens to cost after migration — does cloud actually save money?', a: 'Only if it\'s managed. We include cost monitoring and right-sizing as part of ongoing management specifically to prevent the common post-migration cost creep.' },
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
    slug: 'crm-implementation',
    category: 'business-software',
    name: 'CRM Implementation',
    shortName: 'CRM',
    tagline: 'A CRM your sales team actually uses.',
    summary: 'CRM selection, setup and adoption support designed around how your sales and account teams actually sell — not a generic pipeline template.',
    capabilities: [
      { title: 'Setup', items: ['Platform selection guidance', 'Pipeline and stage design', 'Custom fields and automation', 'Data migration and cleanup'] },
      { title: 'Adoption', items: ['Team training', 'Manager dashboards and reporting', 'Ongoing optimization'] },
    ],
    process: [
      { title: 'Understand the sales process', detail: 'We sit with your sales team to document how deals actually move, not how a template assumes they should.' },
      { title: 'Design the pipeline', detail: 'Stages, fields and automation are built to match that real process, reducing the temptation for reps to work around the tool.' },
      { title: 'Migrate & clean data', detail: 'Existing contact and deal data is migrated and de-duplicated rather than dumped in as-is.' },
      { title: 'Train for adoption', detail: 'Reps are trained on the finished system, with manager dashboards set up so leadership trusts the reporting from day one.' },
    ],
    outcomes: ['A pipeline that matches your real sales process', 'Reporting leadership can actually trust', 'Higher adoption because reps aren\'t fighting the tool'],
    faq: [
      { q: 'Which CRM platforms do you support?', a: 'We most commonly implement Zoho CRM and other major platforms — tell us what you\'re using or considering and we\'ll advise.' },
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
    summary: 'Integration between CRM, ERP, helpdesk, accounting and custom applications, so data entered once shows up everywhere it\'s needed.',
    capabilities: [
      { title: 'Integration types', items: ['API-based integration', 'Webhook automation', 'Middleware setup', 'Legacy system connectors'] },
      { title: 'Common connections', items: ['CRM to accounting', 'Helpdesk to CRM', 'E-commerce to inventory', 'HR to payroll'] },
    ],
    process: [
      { title: 'Map data flow', detail: 'We identify where the same data is entered more than once across CRM, ERP, helpdesk and accounting systems.' },
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
]

// Topic-specific imagery for solution cards and service pages.
// Each service has its own visual so the catalogue feels intentional rather than templated.
const categoryImages: Record<CategoryKey, string> = {
  'it-solutions': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
  'business-software': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
  'ai-automation': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80',
  'software-engineering': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80',
}

const serviceImageOverrides: Partial<Record<string, string>> = {
  'managed-it-services': 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1400&q=80',
  'it-support-helpdesk': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80',
  'cloud-solutions': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80',
  'cybersecurity': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=80',
  'it-asset-management': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80',
  'active-directory-management': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80',
  'endpoint-management': 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1400&q=80',
  'backup-disaster-recovery': 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1400&q=80',
  'observability-itom': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=90',
  'it-training': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80',
  'zoho-solutions': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80',
  'manageengine-solutions': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80',
  'crm-implementation': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80',
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
