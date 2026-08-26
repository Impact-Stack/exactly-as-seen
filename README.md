````md
# ImpactStack Africa — Corporate Website

> **Enterprise Technology Delivery Partner for South Africa**

Official corporate website for **ImpactStack Africa (Pty) Ltd**, a South African technology company delivering enterprise software, cloud, cybersecurity, digital modernisation, and technology solutions.

**Production Website:** https://impactstack.africa

---

## Table of Contents

- [About](#about)
- [Company](#company)
- [Website](#website)
- [Core Capabilities](#core-capabilities)
- [Industry Focus](#industry-focus)
- [Featured Projects](#featured-projects)
- [InvestSwipe](#investswipe)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [SEO & Analytics](#seo--analytics)
- [Design System](#design-system)
- [Content Guidelines](#content-guidelines)
- [Repository Guidelines](#repository-guidelines)
- [Git Workflow](#git-workflow)
- [Security](#security)
- [Performance](#performance)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Project Maintenance](#project-maintenance)
- [Production Checklist](#production-checklist)
- [Lovable Development](#lovable-development)
- [Business Information](#business-information)
- [Contact](#contact)
- [Project Status](#project-status)
- [Ownership](#ownership)
- [License](#license)

---

## About

**ImpactStack Africa (Pty) Ltd** is a South African technology company focused on helping organisations build, modernise, secure, and scale their digital infrastructure.

We operate as an **enterprise technology delivery partner**, combining software engineering, cloud technologies, cybersecurity, and digital modernisation to solve practical business and operational problems.

### Our Positioning

> **Enterprise Technology Delivery Partner for South Africa.**

Our approach is centred around delivering technology that is:

- Practical
- Secure
- Scalable
- Maintainable
- Business-focused
- Designed for measurable impact

---

## Company

### ImpactStack Africa

ImpactStack Africa provides technology services and develops its own digital products.

The company operates across enterprise, public-sector, financial, healthcare, mining, energy, retail, and other technology-driven environments.

### Company Focus

Our work is structured around three primary areas:

1. **Enterprise Software Delivery**
2. **Cloud & Security**
3. **Digital-Driven Modernisation**

---

## Website

This repository contains the source code for the official ImpactStack Africa corporate website.

### Production

**Website:** https://impactstack.africa

The website functions as the company's primary digital presence and communicates:

- Company positioning
- Services
- Capabilities
- Industry expertise
- Featured projects
- Technology products
- Company information
- Business enquiries
- Partnership opportunities

---

## Core Capabilities

### Enterprise Software Delivery

Designing and developing software systems that support business-critical processes.

Capabilities include:

- Custom web applications
- Business management systems
- Internal enterprise platforms
- Workflow systems
- API development
- Database-backed applications
- System integrations
- Digital platforms

### Cloud & Cybersecurity

Helping organisations build technology environments that are secure, observable, and resilient.

Capabilities include:

- Cloud architecture
- Security engineering
- Security monitoring
- Threat detection
- Identity and access management
- Secure application development
- Infrastructure security
- Security operations

### Digital-Driven Modernisation

Modernising existing processes, systems, and technology environments.

Capabilities include:

- Legacy system modernisation
- Process digitisation
- Application modernisation
- Digital workflow implementation
- Data-driven systems
- Platform integration
- Technology strategy
- Digital transformation

---

## Industry Focus

ImpactStack Africa focuses on technology opportunities across several major sectors.

### Government & Public Sector

Technology solutions designed to improve:

- Service delivery
- Internal operations
- Digital workflows
- Citizen-facing platforms
- Data management
- Security

### Financial Services

Technology for:

- Digital financial services
- Investment platforms
- Financial education
- Secure customer experiences
- Data-driven applications

### Healthcare

Solutions supporting:

- Digital workflows
- Information management
- Operational systems
- Secure data handling
- Healthcare technology modernisation

### Mining & Energy

Technology supporting:

- Operational visibility
- Security
- Digital transformation
- Data intelligence
- Enterprise systems

### Retail & Commerce

Solutions for:

- Digital commerce
- Customer platforms
- Business management
- Workflow automation
- Data-driven operations

---

# Featured Projects

The website showcases selected projects demonstrating ImpactStack Africa's capabilities.

---

## BlueWatch SOC Lab

**Cybersecurity & Insider Threat Detection**

BlueWatch is a security operations laboratory focused on detecting and investigating insider threats and suspicious activity.

### Technologies

- Wazuh
- ELK Stack
- Zeek
- Security monitoring
- Log analysis
- Network visibility

The project demonstrates practical experience in security operations, monitoring, threat detection, and security analytics.

---

## Findr

**Community Mapping Web Application**

Findr is a community-focused mapping platform designed to help users discover locations, services, and resources within their communities.

### Technologies

- React
- Node.js
- Supabase
- Mapping technologies
- Web APIs

The project demonstrates experience in developing location-aware digital platforms and community technology.

---

## ModernTech Solutions

**Secure HR Management System**

ModernTech Solutions is a secure HR management platform designed to digitise employee and organisational processes.

The system focuses on:

- Employee management
- Organisational workflows
- Secure data handling
- HR processes
- Digital administration

---

# InvestSwipe

## Making Investing More Accessible

**InvestSwipe** is an ImpactStack Africa fintech product initiative focused on making investing more accessible to entry-level investors in South Africa.

The product is designed around a modern, mobile-first investment experience.

### Key Concepts

- Guided onboarding
- Mobile-first investing
- Swipe-based portfolio interactions
- Short-form financial education
- Community learning
- Accessible investment experiences

### Product Vision

InvestSwipe aims to simplify the initial investment experience for people who may be new to investing by combining education, discovery, and portfolio interaction into a familiar mobile experience.

### Product Status

InvestSwipe is an active product initiative within ImpactStack Africa's technology portfolio.

---

# Technology Stack

The website is built using a modern frontend development stack.

| Technology | Purpose |
|---|---|
| React | Frontend application |
| TypeScript | Type-safe application development |
| Vite | Development server and build tooling |
| Tailwind CSS | Styling and responsive design |
| shadcn/ui | Reusable UI components |
| Git | Version control |
| GitHub | Repository and collaboration |
| Lovable | Initial development environment |

> The stack may evolve as the website is maintained and modernised.

---

# Project Structure

The project follows a component-based frontend architecture.

```text
.
├── public/
│   ├── images/
│   ├── icons/
│   ├── assets/
│   └── ...
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── sections/
│   ├── assets/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   └── ...
│
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.*
├── tsconfig.json
├── vite.config.*
└── README.md
````

The actual structure may change as the project develops.

---

# Getting Started

## Prerequisites

Ensure the following are installed:

* Node.js
* npm
* Git

### Verify Node.js

```bash
node --version
```

### Verify npm

```bash
npm --version
```

---

## Clone the Repository

Clone the repository using Git:

```bash
git clone <REPOSITORY_URL>
```

Navigate into the project:

```bash
cd <PROJECT_DIRECTORY>
```

---

## Install Dependencies

Install all required packages:

```bash
npm install
```

---

## Start Development Server

Run:

```bash
npm run dev
```

Vite will start the development server.

The local website will normally be available at:

```text
http://localhost:5173
```

---

# Development

## Development Commands

### Start Development

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

If configured:

```bash
npm run lint
```

---

# Environment Variables

Environment variables should be stored locally and should never contain production secrets inside source-controlled files.

Create a local environment file where required:

```bash
cp .env.example .env
```

Example:

```env
VITE_API_URL=
VITE_ANALYTICS_ID=
```

Only variables required by the current implementation should be added.

### Important

Never commit:

* API keys
* Private tokens
* Passwords
* Database credentials
* Cloud credentials
* Authentication secrets
* Production secrets

Ensure `.env` is included in `.gitignore`.

---

# Building for Production

Before deploying a new version, create a production build:

```bash
npm run build
```

The build process should complete without errors.

The generated production files can then be deployed through the configured hosting platform.

To test the production build locally:

```bash
npm run preview
```

---

# Deployment

The production website is:

**[https://impactstack.africa](https://impactstack.africa)**

The repository should be connected to the project's configured deployment environment.

Deployment may be performed through the project's hosting provider or CI/CD pipeline.

### Production Deployment Requirements

Before publishing a release:

* Build must complete successfully
* No TypeScript errors should remain
* No broken routes
* No missing assets
* No console errors
* Forms should function correctly
* Mobile layouts should be tested
* Desktop layouts should be tested
* SEO metadata should be present
* Analytics should be functioning
* Production environment variables must be configured
* No secrets should be exposed

---

# SEO & Analytics

The website should maintain strong technical SEO and analytics implementation.

### SEO Requirements

Each public page should have appropriate:

* Page title
* Meta description
* Open Graph metadata
* Canonical URL where appropriate
* Semantic HTML
* Descriptive headings
* Image alt text
* Search-engine-friendly URLs

### Analytics

The website may use analytics to measure:

* Website traffic
* Page views
* User journeys
* Contact interactions
* Conversion events
* Campaign performance

Analytics configuration should never expose sensitive user information.

---

# Design System

The website should maintain a consistent visual identity across all pages.

### Design Principles

The interface should be:

* Professional
* Modern
* Enterprise-focused
* Clear
* Responsive
* Accessible
* Performance-conscious
* Consistent

### UI Principles

Prefer:

* Reusable components
* Consistent spacing
* Consistent typography
* Clear hierarchy
* Responsive layouts
* Accessible interactive elements
* Meaningful animation
* Optimised media

Avoid:

* Unnecessary visual clutter
* Excessive animation
* Inconsistent components
* Hard-coded duplicated UI
* Poor mobile layouts
* Unoptimised images

---

# Content Guidelines

All website content should reinforce ImpactStack Africa's positioning as an enterprise technology delivery partner.

### Brand Voice

Content should be:

* Professional
* Confident
* Clear
* Technically credible
* Business-oriented
* Direct

Avoid excessive buzzwords or unsupported claims.

Technical capabilities should be communicated in language that both technical and business stakeholders can understand.

---

# Repository Guidelines

Contributors and developers working on the website should follow these principles.

### 1. Preserve the Design System

New pages and components should follow the established design language.

### 2. Prefer Reusable Components

Avoid duplicating components when an existing component can be extended.

### 3. Keep TypeScript Strongly Typed

Avoid unnecessary use of:

```typescript
any
```

Use explicit interfaces and types where appropriate.

### 4. Keep Dependencies Minimal

Do not introduce a new dependency when existing functionality can solve the problem cleanly.

### 5. Optimise Assets

Images and other media should be appropriately compressed and sized.

### 6. Maintain Responsiveness

Every UI change should be tested across:

* Desktop
* Tablet
* Mobile

### 7. Maintain Accessibility

Interactive elements should be accessible using:

* Keyboard navigation
* Appropriate semantic HTML
* Screen-reader-friendly labels
* Sufficient contrast
* Visible focus states

### 8. Protect Production

Changes should be tested locally before being pushed to production.

---

# Git Workflow

## Create a Branch

For a new feature:

```bash
git checkout -b feature/feature-name
```

For a bug fix:

```bash
git checkout -b fix/issue-name
```

---

## Commit Changes

Use clear commit messages:

```bash
git add .
git commit -m "Add contact form improvements"
```

Examples:

```text
Add responsive navigation
Fix mobile hero layout
Update project showcase
Improve SEO metadata
Fix contact form validation
Optimise homepage images
Update InvestSwipe section
```

---

## Push Changes

```bash
git push origin <branch-name>
```

Open a pull request where the repository workflow requires review.

---

# Security

Security is a core consideration for ImpactStack Africa.

Developers must not commit sensitive information to the repository.

### Never Commit

```text
.env
.env.local
.env.production
*.pem
*.key
credentials.json
service-account.json
```

Sensitive credentials should be managed through environment variables or the deployment platform's secret-management system.

---

# Performance

The website should prioritise fast and reliable user experiences.

### Performance Considerations

* Optimise images
* Lazy-load non-critical media
* Minimise unnecessary JavaScript
* Avoid excessive dependencies
* Use responsive images
* Avoid unnecessary network requests
* Keep animations lightweight
* Monitor production performance

---

# Responsive Design

The website must work across common screen sizes.

### Primary Targets

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop displays

Mobile layouts should not simply be scaled-down desktop layouts. Content hierarchy and interactions should be intentionally adapted for smaller screens.

---

# Accessibility

Accessibility should be considered for every feature.

### Requirements

* Semantic HTML
* Keyboard navigation
* Accessible forms
* Proper labels
* Descriptive alt text
* Appropriate heading hierarchy
* Visible focus states
* Sufficient colour contrast
* Reduced-motion considerations

---

# Browser Support

The website should support current versions of major modern browsers, including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

# Project Maintenance

The website is a production corporate asset and should be maintained accordingly.

Regular maintenance should include:

* Dependency updates
* Security updates
* Broken-link checks
* SEO checks
* Performance monitoring
* Analytics verification
* Form testing
* Mobile testing
* Content updates
* Backup and deployment verification

---

# Production Checklist

Before deploying changes to production:

* [ ] Application builds successfully
* [ ] TypeScript checks pass
* [ ] Linting passes where configured
* [ ] All routes work
* [ ] Navigation works
* [ ] Contact forms work
* [ ] Images load correctly
* [ ] No broken assets
* [ ] No console errors
* [ ] Mobile layout tested
* [ ] Tablet layout tested
* [ ] Desktop layout tested
* [ ] SEO metadata verified
* [ ] Open Graph metadata verified
* [ ] Analytics verified
* [ ] Environment variables configured
* [ ] No secrets committed
* [ ] Production domain verified
* [ ] Final build tested

---

# Lovable Development

The project was initially developed using Lovable.

Lovable can be used as a development interface where appropriate, but the repository itself remains the source-controlled codebase.

Changes made through Lovable may be synchronised with the Git repository.

Developers working directly with the repository can continue using their preferred IDE and Git workflow.

---

# Development with an IDE

The project can be developed using editors such as:

* Visual Studio Code
* Cursor
* WebStorm
* Other TypeScript-compatible IDEs

Recommended workflow:

```bash
git clone <REPOSITORY_URL>
cd <PROJECT_DIRECTORY>
npm install
npm run dev
```

Make changes, test locally, commit, and push.

---

# Business Information

**Company:** ImpactStack Africa (Pty) Ltd

**Country:** South Africa

**Website:** [https://impactstack.africa](https://impactstack.africa)

**Positioning:**

> Enterprise Technology Delivery Partner for South Africa.

### Core Focus

```text
Enterprise Software Delivery
Cloud & Cybersecurity
Digital-Driven Modernisation
```

---

# Contact

For business enquiries, partnerships, technology projects, or general enquiries:

**Website:** [https://impactstack.africa](https://impactstack.africa)

Visit the official website for the current contact channels and enquiry forms.

---

# Project Status

| Area              | Status                    |
| ----------------- | ------------------------- |
| Corporate Website | Production                |
| Responsive Design | Active                    |
| Corporate Content | Active                    |
| Project Portfolio | Active                    |
| InvestSwipe       | Active Product Initiative |
| SEO               | Maintained                |
| Analytics         | Maintained                |
| Development       | Ongoing                   |

---

# Ownership

This repository contains proprietary software and website assets belonging to **ImpactStack Africa (Pty) Ltd**.

Unauthorised copying, redistribution, or commercial use of proprietary code, assets, branding, or content is not permitted.

---

# License

Unless otherwise stated, the source code, branding, content, images, graphics, and other assets contained within this repository are proprietary to **ImpactStack Africa (Pty) Ltd**.

This project is **not open source**.

---

## ImpactStack Africa

**Enterprise Technology Delivery Partner for South Africa.**

🌐 [https://impactstack.africa](https://impactstack.africa)

© 2026 **ImpactStack Africa (Pty) Ltd**. All rights reserved.

```
```
````md
# ImpactStack Africa — Corporate Website

> **Enterprise Technology Delivery Partner for South Africa**

Official corporate website for **ImpactStack Africa (Pty) Ltd**, a South African technology company delivering enterprise software, cloud, cybersecurity, digital modernisation, and technology solutions.

**Production Website:** https://impactstack.africa

---

## Table of Contents

- [About](#about)
- [Company](#company)
- [Website](#website)
- [Core Capabilities](#core-capabilities)
- [Industry Focus](#industry-focus)
- [Featured Projects](#featured-projects)
- [InvestSwipe](#investswipe)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [SEO & Analytics](#seo--analytics)
- [Design System](#design-system)
- [Content Guidelines](#content-guidelines)
- [Repository Guidelines](#repository-guidelines)
- [Git Workflow](#git-workflow)
- [Security](#security)
- [Performance](#performance)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Project Maintenance](#project-maintenance)
- [Production Checklist](#production-checklist)
- [Lovable Development](#lovable-development)
- [Business Information](#business-information)
- [Contact](#contact)
- [Project Status](#project-status)
- [Ownership](#ownership)
- [License](#license)

---

## About

**ImpactStack Africa (Pty) Ltd** is a South African technology company focused on helping organisations build, modernise, secure, and scale their digital infrastructure.

We operate as an **enterprise technology delivery partner**, combining software engineering, cloud technologies, cybersecurity, and digital modernisation to solve practical business and operational problems.

### Our Positioning

> **Enterprise Technology Delivery Partner for South Africa.**

Our approach is centred around delivering technology that is:

- Practical
- Secure
- Scalable
- Maintainable
- Business-focused
- Designed for measurable impact

---

## Company

### ImpactStack Africa

ImpactStack Africa provides technology services and develops its own digital products.

The company operates across enterprise, public-sector, financial, healthcare, mining, energy, retail, and other technology-driven environments.

### Company Focus

Our work is structured around three primary areas:

1. **Enterprise Software Delivery**
2. **Cloud & Security**
3. **Digital-Driven Modernisation**

---

## Website

This repository contains the source code for the official ImpactStack Africa corporate website.

### Production

**Website:** https://impactstack.africa

The website functions as the company's primary digital presence and communicates:

- Company positioning
- Services
- Capabilities
- Industry expertise
- Featured projects
- Technology products
- Company information
- Business enquiries
- Partnership opportunities

---

## Core Capabilities

### Enterprise Software Delivery

Designing and developing software systems that support business-critical processes.

Capabilities include:

- Custom web applications
- Business management systems
- Internal enterprise platforms
- Workflow systems
- API development
- Database-backed applications
- System integrations
- Digital platforms

### Cloud & Cybersecurity

Helping organisations build technology environments that are secure, observable, and resilient.

Capabilities include:

- Cloud architecture
- Security engineering
- Security monitoring
- Threat detection
- Identity and access management
- Secure application development
- Infrastructure security
- Security operations

### Digital-Driven Modernisation

Modernising existing processes, systems, and technology environments.

Capabilities include:

- Legacy system modernisation
- Process digitisation
- Application modernisation
- Digital workflow implementation
- Data-driven systems
- Platform integration
- Technology strategy
- Digital transformation

---

## Industry Focus

ImpactStack Africa focuses on technology opportunities across several major sectors.

### Government & Public Sector

Technology solutions designed to improve:

- Service delivery
- Internal operations
- Digital workflows
- Citizen-facing platforms
- Data management
- Security

### Financial Services

Technology for:

- Digital financial services
- Investment platforms
- Financial education
- Secure customer experiences
- Data-driven applications

### Healthcare

Solutions supporting:

- Digital workflows
- Information management
- Operational systems
- Secure data handling
- Healthcare technology modernisation

### Mining & Energy

Technology supporting:

- Operational visibility
- Security
- Digital transformation
- Data intelligence
- Enterprise systems

### Retail & Commerce

Solutions for:

- Digital commerce
- Customer platforms
- Business management
- Workflow automation
- Data-driven operations

---

# Featured Projects

The website showcases selected projects demonstrating ImpactStack Africa's capabilities.

---

## BlueWatch SOC Lab

**Cybersecurity & Insider Threat Detection**

BlueWatch is a security operations laboratory focused on detecting and investigating insider threats and suspicious activity.

### Technologies

- Wazuh
- ELK Stack
- Zeek
- Security monitoring
- Log analysis
- Network visibility

The project demonstrates practical experience in security operations, monitoring, threat detection, and security analytics.

---

## Findr

**Community Mapping Web Application**

Findr is a community-focused mapping platform designed to help users discover locations, services, and resources within their communities.

### Technologies

- React
- Node.js
- Supabase
- Mapping technologies
- Web APIs

The project demonstrates experience in developing location-aware digital platforms and community technology.

---

## ModernTech Solutions

**Secure HR Management System**

ModernTech Solutions is a secure HR management platform designed to digitise employee and organisational processes.

The system focuses on:

- Employee management
- Organisational workflows
- Secure data handling
- HR processes
- Digital administration

---

# InvestSwipe

## Making Investing More Accessible

**InvestSwipe** is an ImpactStack Africa fintech product initiative focused on making investing more accessible to entry-level investors in South Africa.

The product is designed around a modern, mobile-first investment experience.

### Key Concepts

- Guided onboarding
- Mobile-first investing
- Swipe-based portfolio interactions
- Short-form financial education
- Community learning
- Accessible investment experiences

### Product Vision

InvestSwipe aims to simplify the initial investment experience for people who may be new to investing by combining education, discovery, and portfolio interaction into a familiar mobile experience.

### Product Status

InvestSwipe is an active product initiative within ImpactStack Africa's technology portfolio.

---

# Technology Stack

The website is built using a modern frontend development stack.

| Technology | Purpose |
|---|---|
| React | Frontend application |
| TypeScript | Type-safe application development |
| Vite | Development server and build tooling |
| Tailwind CSS | Styling and responsive design |
| shadcn/ui | Reusable UI components |
| Git | Version control |
| GitHub | Repository and collaboration |
| Lovable | Initial development environment |

> The stack may evolve as the website is maintained and modernised.

---

# Project Structure

The project follows a component-based frontend architecture.

```text
.
├── public/
│   ├── images/
│   ├── icons/
│   ├── assets/
│   └── ...
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── sections/
│   ├── assets/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   └── ...
│
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.*
├── tsconfig.json
├── vite.config.*
└── README.md
````

The actual structure may change as the project develops.

---

# Getting Started

## Prerequisites

Ensure the following are installed:

* Node.js
* npm
* Git

### Verify Node.js

```bash
node --version
```

### Verify npm

```bash
npm --version
```

---

## Clone the Repository

Clone the repository using Git:

```bash
git clone <REPOSITORY_URL>
```

Navigate into the project:

```bash
cd <PROJECT_DIRECTORY>
```

---

## Install Dependencies

Install all required packages:

```bash
npm install
```

---

## Start Development Server

Run:

```bash
npm run dev
```

Vite will start the development server.

The local website will normally be available at:

```text
http://localhost:5173
```

---

# Development

## Development Commands

### Start Development

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

If configured:

```bash
npm run lint
```

---

# Environment Variables

Environment variables should be stored locally and should never contain production secrets inside source-controlled files.

Create a local environment file where required:

```bash
cp .env.example .env
```

Example:

```env
VITE_API_URL=
VITE_ANALYTICS_ID=
```

Only variables required by the current implementation should be added.

### Important

Never commit:

* API keys
* Private tokens
* Passwords
* Database credentials
* Cloud credentials
* Authentication secrets
* Production secrets

Ensure `.env` is included in `.gitignore`.

---

# Building for Production

Before deploying a new version, create a production build:

```bash
npm run build
```

The build process should complete without errors.

The generated production files can then be deployed through the configured hosting platform.

To test the production build locally:

```bash
npm run preview
```

---

# Deployment

The production website is:

**[https://impactstack.africa](https://impactstack.africa)**

The repository should be connected to the project's configured deployment environment.

Deployment may be performed through the project's hosting provider or CI/CD pipeline.

### Production Deployment Requirements

Before publishing a release:

* Build must complete successfully
* No TypeScript errors should remain
* No broken routes
* No missing assets
* No console errors
* Forms should function correctly
* Mobile layouts should be tested
* Desktop layouts should be tested
* SEO metadata should be present
* Analytics should be functioning
* Production environment variables must be configured
* No secrets should be exposed

---

# SEO & Analytics

The website should maintain strong technical SEO and analytics implementation.

### SEO Requirements

Each public page should have appropriate:

* Page title
* Meta description
* Open Graph metadata
* Canonical URL where appropriate
* Semantic HTML
* Descriptive headings
* Image alt text
* Search-engine-friendly URLs

### Analytics

The website may use analytics to measure:

* Website traffic
* Page views
* User journeys
* Contact interactions
* Conversion events
* Campaign performance

Analytics configuration should never expose sensitive user information.

---

# Design System

The website should maintain a consistent visual identity across all pages.

### Design Principles

The interface should be:

* Professional
* Modern
* Enterprise-focused
* Clear
* Responsive
* Accessible
* Performance-conscious
* Consistent

### UI Principles

Prefer:

* Reusable components
* Consistent spacing
* Consistent typography
* Clear hierarchy
* Responsive layouts
* Accessible interactive elements
* Meaningful animation
* Optimised media

Avoid:

* Unnecessary visual clutter
* Excessive animation
* Inconsistent components
* Hard-coded duplicated UI
* Poor mobile layouts
* Unoptimised images

---

# Content Guidelines

All website content should reinforce ImpactStack Africa's positioning as an enterprise technology delivery partner.

### Brand Voice

Content should be:

* Professional
* Confident
* Clear
* Technically credible
* Business-oriented
* Direct

Avoid excessive buzzwords or unsupported claims.

Technical capabilities should be communicated in language that both technical and business stakeholders can understand.

---

# Repository Guidelines

Contributors and developers working on the website should follow these principles.

### 1. Preserve the Design System

New pages and components should follow the established design language.

### 2. Prefer Reusable Components

Avoid duplicating components when an existing component can be extended.

### 3. Keep TypeScript Strongly Typed

Avoid unnecessary use of:

```typescript
any
```

Use explicit interfaces and types where appropriate.

### 4. Keep Dependencies Minimal

Do not introduce a new dependency when existing functionality can solve the problem cleanly.

### 5. Optimise Assets

Images and other media should be appropriately compressed and sized.

### 6. Maintain Responsiveness

Every UI change should be tested across:

* Desktop
* Tablet
* Mobile

### 7. Maintain Accessibility

Interactive elements should be accessible using:

* Keyboard navigation
* Appropriate semantic HTML
* Screen-reader-friendly labels
* Sufficient contrast
* Visible focus states

### 8. Protect Production

Changes should be tested locally before being pushed to production.

---

# Git Workflow

## Create a Branch

For a new feature:

```bash
git checkout -b feature/feature-name
```

For a bug fix:

```bash
git checkout -b fix/issue-name
```

---

## Commit Changes

Use clear commit messages:

```bash
git add .
git commit -m "Add contact form improvements"
```

Examples:

```text
Add responsive navigation
Fix mobile hero layout
Update project showcase
Improve SEO metadata
Fix contact form validation
Optimise homepage images
Update InvestSwipe section
```

---

## Push Changes

```bash
git push origin <branch-name>
```

Open a pull request where the repository workflow requires review.

---

# Security

Security is a core consideration for ImpactStack Africa.

Developers must not commit sensitive information to the repository.

### Never Commit

```text
.env
.env.local
.env.production
*.pem
*.key
credentials.json
service-account.json
```

Sensitive credentials should be managed through environment variables or the deployment platform's secret-management system.

---

# Performance

The website should prioritise fast and reliable user experiences.

### Performance Considerations

* Optimise images
* Lazy-load non-critical media
* Minimise unnecessary JavaScript
* Avoid excessive dependencies
* Use responsive images
* Avoid unnecessary network requests
* Keep animations lightweight
* Monitor production performance

---

# Responsive Design

The website must work across common screen sizes.

### Primary Targets

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop displays

Mobile layouts should not simply be scaled-down desktop layouts. Content hierarchy and interactions should be intentionally adapted for smaller screens.

---

# Accessibility

Accessibility should be considered for every feature.

### Requirements

* Semantic HTML
* Keyboard navigation
* Accessible forms
* Proper labels
* Descriptive alt text
* Appropriate heading hierarchy
* Visible focus states
* Sufficient colour contrast
* Reduced-motion considerations

---

# Browser Support

The website should support current versions of major modern browsers, including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

# Project Maintenance

The website is a production corporate asset and should be maintained accordingly.

Regular maintenance should include:

* Dependency updates
* Security updates
* Broken-link checks
* SEO checks
* Performance monitoring
* Analytics verification
* Form testing
* Mobile testing
* Content updates
* Backup and deployment verification

---

# Production Checklist

Before deploying changes to production:

* [ ] Application builds successfully
* [ ] TypeScript checks pass
* [ ] Linting passes where configured
* [ ] All routes work
* [ ] Navigation works
* [ ] Contact forms work
* [ ] Images load correctly
* [ ] No broken assets
* [ ] No console errors
* [ ] Mobile layout tested
* [ ] Tablet layout tested
* [ ] Desktop layout tested
* [ ] SEO metadata verified
* [ ] Open Graph metadata verified
* [ ] Analytics verified
* [ ] Environment variables configured
* [ ] No secrets committed
* [ ] Production domain verified
* [ ] Final build tested

---

# Lovable Development

The project was initially developed using Lovable.

Lovable can be used as a development interface where appropriate, but the repository itself remains the source-controlled codebase.

Changes made through Lovable may be synchronised with the Git repository.

Developers working directly with the repository can continue using their preferred IDE and Git workflow.

---

# Development with an IDE

The project can be developed using editors such as:

* Visual Studio Code
* Cursor
* WebStorm
* Other TypeScript-compatible IDEs

Recommended workflow:

```bash
git clone <REPOSITORY_URL>
cd <PROJECT_DIRECTORY>
npm install
npm run dev
```

Make changes, test locally, commit, and push.

---

# Business Information

**Company:** ImpactStack Africa (Pty) Ltd

**Country:** South Africa

**Website:** [https://impactstack.africa](https://impactstack.africa)

**Positioning:**

> Enterprise Technology Delivery Partner for South Africa.

### Core Focus

```text
Enterprise Software Delivery
Cloud & Cybersecurity
Digital-Driven Modernisation
```

---

# Contact

For business enquiries, partnerships, technology projects, or general enquiries:

**Website:** [https://impactstack.africa](https://impactstack.africa)

Visit the official website for the current contact channels and enquiry forms.

---

# Project Status

| Area              | Status                    |
| ----------------- | ------------------------- |
| Corporate Website | Production                |
| Responsive Design | Active                    |
| Corporate Content | Active                    |
| Project Portfolio | Active                    |
| InvestSwipe       | Active Product Initiative |
| SEO               | Maintained                |
| Analytics         | Maintained                |
| Development       | Ongoing                   |

---

# Ownership

This repository contains proprietary software and website assets belonging to **ImpactStack Africa (Pty) Ltd**.

Unauthorised copying, redistribution, or commercial use of proprietary code, assets, branding, or content is not permitted.

---

# License

Unless otherwise stated, the source code, branding, content, images, graphics, and other assets contained within this repository are proprietary to **ImpactStack Africa (Pty) Ltd**.

This project is **not open source**.

---

## ImpactStack Africa

**Enterprise Technology Delivery Partner for South Africa.**

🌐 [https://impactstack.africa](https://impactstack.africa)

© 2026 **ImpactStack Africa (Pty) Ltd**. All rights reserved.

```
```
