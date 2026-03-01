-- QuickHire Platform - Production Seed Data
-- 50 diverse job listings across 8 categories

INSERT INTO jobs (company, title, location, category, type, description, tags, created_at) VALUES

-- Design (8 jobs)
('Figma', 'Senior Product Designer', 'San Francisco, US', 'Design', 'Full Time', 'Lead design initiatives for our core product suite. Work with cross-functional teams to create intuitive user experiences.', ARRAY['Design', 'UI/UX', 'Product'], NOW() - INTERVAL '2 days'),
('Adobe', 'UX Researcher', 'Remote', 'Design', 'Remote', 'Conduct user research and usability testing to inform product decisions. Present findings to stakeholders.', ARRAY['Design', 'Research', 'UX'], NOW() - INTERVAL '5 days'),
('Canva', 'Brand Designer', 'Sydney, Australia', 'Design', 'Full Time', 'Shape our brand identity across all touchpoints. Create compelling visual narratives.', ARRAY['Design', 'Branding', 'Visual'], NOW() - INTERVAL '1 day'),
('Spotify', 'Motion Designer', 'Stockholm, Sweden', 'Design', 'Contract', 'Create engaging animations and motion graphics for our mobile and web platforms.', ARRAY['Design', 'Animation', 'Motion'], NOW() - INTERVAL '8 days'),
('Airbnb', 'Design Systems Lead', 'Remote', 'Design', 'Remote', 'Build and maintain our design system. Ensure consistency across all products.', ARRAY['Design', 'Systems', 'Leadership'], NOW() - INTERVAL '12 days'),
('Netflix', 'Illustrator', 'Los Angeles, US', 'Design', 'Full Time', 'Create original illustrations for marketing campaigns and product features.', ARRAY['Design', 'Illustration', 'Creative'], NOW() - INTERVAL '15 days'),
('Dropbox', 'UI Designer', 'Austin, US', 'Design', 'Full Time', 'Design beautiful and functional interfaces for our collaboration tools.', ARRAY['Design', 'UI', 'Interface'], NOW() - INTERVAL '20 days'),
('Notion', 'Product Designer', 'San Francisco, US', 'Design', 'Remote', 'Design features that help millions of users organize their work and life.', ARRAY['Design', 'Product', 'Collaboration'], NOW() - INTERVAL '25 days'),

-- Sales (7 jobs)
('Salesforce', 'Enterprise Account Executive', 'New York, US', 'Sales', 'Full Time', 'Drive revenue growth by selling our CRM solutions to Fortune 500 companies.', ARRAY['Sales', 'Enterprise', 'B2B'], NOW() - INTERVAL '3 days'),
('HubSpot', 'Sales Development Representative', 'Boston, US', 'Sales', 'Full Time', 'Generate qualified leads and set meetings for our sales team. Great entry-level opportunity.', ARRAY['Sales', 'SDR', 'Lead Gen'], NOW() - INTERVAL '6 days'),
('Stripe', 'Strategic Account Manager', 'Remote', 'Sales', 'Remote', 'Manage relationships with our largest customers. Drive expansion and retention.', ARRAY['Sales', 'Account Management', 'Strategy'], NOW() - INTERVAL '10 days'),
('Zoom', 'Regional Sales Director', 'London, UK', 'Sales', 'Full Time', 'Lead a team of account executives. Drive regional revenue targets.', ARRAY['Sales', 'Leadership', 'Management'], NOW() - INTERVAL '14 days'),
('Shopify', 'Partner Sales Manager', 'Toronto, Canada', 'Sales', 'Full Time', 'Build and manage relationships with technology and agency partners.', ARRAY['Sales', 'Partnerships', 'B2B'], NOW() - INTERVAL '18 days'),
('Slack', 'Sales Engineer', 'Remote', 'Sales', 'Remote', 'Provide technical expertise during the sales process. Conduct product demos.', ARRAY['Sales', 'Technical', 'Engineering'], NOW() - INTERVAL '22 days'),
('Atlassian', 'Customer Success Manager', 'Sydney, Australia', 'Sales', 'Full Time', 'Ensure customer satisfaction and drive product adoption post-sale.', ARRAY['Sales', 'Customer Success', 'Support'], NOW() - INTERVAL '28 days'),

-- Marketing (7 jobs)
('Meta', 'Growth Marketing Manager', 'Menlo Park, US', 'Marketing', 'Full Time', 'Drive user acquisition and engagement through data-driven marketing campaigns.', ARRAY['Marketing', 'Growth', 'Analytics'], NOW() - INTERVAL '1 day'),
('Twitter', 'Content Marketing Lead', 'Remote', 'Marketing', 'Remote', 'Create compelling content that drives brand awareness and engagement.', ARRAY['Marketing', 'Content', 'Writing'], NOW() - INTERVAL '4 days'),
('LinkedIn', 'Product Marketing Manager', 'San Francisco, US', 'Marketing', 'Full Time', 'Position our products in the market. Develop go-to-market strategies.', ARRAY['Marketing', 'Product', 'Strategy'], NOW() - INTERVAL '7 days'),
('TikTok', 'Social Media Manager', 'Los Angeles, US', 'Marketing', 'Full Time', 'Manage our social media presence across all platforms. Create viral content.', ARRAY['Marketing', 'Social Media', 'Community'], NOW() - INTERVAL '11 days'),
('Mailchimp', 'Email Marketing Specialist', 'Atlanta, US', 'Marketing', 'Contract', 'Design and execute email campaigns that drive conversions and engagement.', ARRAY['Marketing', 'Email', 'Automation'], NOW() - INTERVAL '16 days'),
('Squarespace', 'Brand Marketing Manager', 'New York, US', 'Marketing', 'Full Time', 'Develop and execute brand campaigns that resonate with our creative audience.', ARRAY['Marketing', 'Brand', 'Creative'], NOW() - INTERVAL '21 days'),
('Wix', 'Performance Marketing Analyst', 'Tel Aviv, Israel', 'Marketing', 'Full Time', 'Analyze marketing performance and optimize campaigns for ROI.', ARRAY['Marketing', 'Analytics', 'Performance'], NOW() - INTERVAL '26 days'),

-- Finance (6 jobs)
('Goldman Sachs', 'Financial Analyst', 'New York, US', 'Finance', 'Full Time', 'Analyze financial data and provide insights to support investment decisions.', ARRAY['Finance', 'Analysis', 'Investment'], NOW() - INTERVAL '2 days'),
('PayPal', 'Senior Accountant', 'San Jose, US', 'Finance', 'Full Time', 'Manage financial reporting and ensure compliance with accounting standards.', ARRAY['Finance', 'Accounting', 'Compliance'], NOW() - INTERVAL '9 days'),
('Square', 'FP&A Manager', 'Remote', 'Finance', 'Remote', 'Lead financial planning and analysis. Partner with business leaders on strategy.', ARRAY['Finance', 'Planning', 'Strategy'], NOW() - INTERVAL '13 days'),
('Coinbase', 'Treasury Analyst', 'San Francisco, US', 'Finance', 'Full Time', 'Manage cash flow and liquidity. Optimize treasury operations.', ARRAY['Finance', 'Treasury', 'Crypto'], NOW() - INTERVAL '17 days'),
('Robinhood', 'Risk Manager', 'Menlo Park, US', 'Finance', 'Full Time', 'Identify and mitigate financial risks. Develop risk management frameworks.', ARRAY['Finance', 'Risk', 'Compliance'], NOW() - INTERVAL '23 days'),
('Plaid', 'Finance Operations Lead', 'Remote', 'Finance', 'Remote', 'Streamline financial operations and improve efficiency across the organization.', ARRAY['Finance', 'Operations', 'Process'], NOW() - INTERVAL '27 days'),

-- Technology (8 jobs)
('Google', 'Cloud Solutions Architect', 'Remote', 'Technology', 'Remote', 'Design and implement cloud solutions for enterprise customers. Provide technical leadership.', ARRAY['Technology', 'Cloud', 'Architecture'], NOW() - INTERVAL '1 day'),
('Microsoft', 'DevOps Engineer', 'Seattle, US', 'Technology', 'Full Time', 'Build and maintain CI/CD pipelines. Improve deployment processes and reliability.', ARRAY['Technology', 'DevOps', 'Infrastructure'], NOW() - INTERVAL '5 days'),
('Amazon', 'Data Engineer', 'Remote', 'Technology', 'Remote', 'Build scalable data pipelines and infrastructure. Work with petabyte-scale datasets.', ARRAY['Technology', 'Data', 'Engineering'], NOW() - INTERVAL '8 days'),
('Apple', 'Security Engineer', 'Cupertino, US', 'Technology', 'Full Time', 'Protect our systems and user data. Identify and remediate security vulnerabilities.', ARRAY['Technology', 'Security', 'Infrastructure'], NOW() - INTERVAL '12 days'),
('Oracle', 'Database Administrator', 'Austin, US', 'Technology', 'Full Time', 'Manage and optimize database systems. Ensure high availability and performance.', ARRAY['Technology', 'Database', 'Administration'], NOW() - INTERVAL '19 days'),
('IBM', 'AI/ML Engineer', 'Remote', 'Technology', 'Remote', 'Develop machine learning models and AI solutions for enterprise applications.', ARRAY['Technology', 'AI', 'Machine Learning'], NOW() - INTERVAL '24 days'),
('Cisco', 'Network Engineer', 'San Jose, US', 'Technology', 'Full Time', 'Design and maintain network infrastructure. Troubleshoot connectivity issues.', ARRAY['Technology', 'Networking', 'Infrastructure'], NOW() - INTERVAL '29 days'),
('VMware', 'Systems Administrator', 'Palo Alto, US', 'Technology', 'Contract', 'Manage virtualized infrastructure and ensure system reliability.', ARRAY['Technology', 'Systems', 'Virtualization'], NOW() - INTERVAL '30 days'),

-- Engineering (8 jobs)
('Tesla', 'Senior Software Engineer', 'Palo Alto, US', 'Engineering', 'Full Time', 'Build software that powers the future of transportation. Work on autonomous driving systems.', ARRAY['Engineering', 'Software', 'Autonomous'], NOW() - INTERVAL '2 days'),
('SpaceX', 'Embedded Systems Engineer', 'Hawthorne, US', 'Engineering', 'Full Time', 'Develop embedded software for spacecraft and launch vehicles.', ARRAY['Engineering', 'Embedded', 'Aerospace'], NOW() - INTERVAL '6 days'),
('Uber', 'Backend Engineer', 'San Francisco, US', 'Engineering', 'Full Time', 'Build scalable backend services that power millions of rides daily.', ARRAY['Engineering', 'Backend', 'Distributed Systems'], NOW() - INTERVAL '10 days'),
('Lyft', 'Mobile Engineer (iOS)', 'Remote', 'Engineering', 'Remote', 'Create delightful mobile experiences for our riders and drivers.', ARRAY['Engineering', 'Mobile', 'iOS'], NOW() - INTERVAL '14 days'),
('GitHub', 'Full Stack Engineer', 'Remote', 'Engineering', 'Remote', 'Build features across our entire stack. Ship code that impacts millions of developers.', ARRAY['Engineering', 'Full Stack', 'Web'], NOW() - INTERVAL '18 days'),
('GitLab', 'Frontend Engineer', 'Remote', 'Engineering', 'Remote', 'Build beautiful and performant user interfaces using modern web technologies.', ARRAY['Engineering', 'Frontend', 'React'], NOW() - INTERVAL '22 days'),
('Twilio', 'Platform Engineer', 'San Francisco, US', 'Engineering', 'Full Time', 'Build and scale our communications platform. Handle billions of API requests.', ARRAY['Engineering', 'Platform', 'API'], NOW() - INTERVAL '26 days'),
('Datadog', 'Site Reliability Engineer', 'New York, US', 'Engineering', 'Full Time', 'Ensure reliability and performance of our monitoring platform at scale.', ARRAY['Engineering', 'SRE', 'Reliability'], NOW() - INTERVAL '29 days'),

-- Business (3 jobs)
('McKinsey', 'Business Analyst', 'New York, US', 'Business', 'Full Time', 'Solve complex business problems for Fortune 500 clients. Drive strategic initiatives.', ARRAY['Business', 'Consulting', 'Strategy'], NOW() - INTERVAL '4 days'),
('Deloitte', 'Management Consultant', 'London, UK', 'Business', 'Full Time', 'Advise clients on business transformation and operational excellence.', ARRAY['Business', 'Consulting', 'Management'], NOW() - INTERVAL '11 days'),
('BCG', 'Strategy Consultant', 'Boston, US', 'Business', 'Full Time', 'Develop growth strategies for leading companies across industries.', ARRAY['Business', 'Strategy', 'Growth'], NOW() - INTERVAL '20 days'),

-- Human Resource (3 jobs)
('Workday', 'HR Business Partner', 'Remote', 'Human Resource', 'Remote', 'Partner with business leaders to drive people strategy and organizational effectiveness.', ARRAY['HR', 'Business Partner', 'Strategy'], NOW() - INTERVAL '7 days'),
('ADP', 'Talent Acquisition Manager', 'New York, US', 'Human Resource', 'Full Time', 'Lead recruiting efforts and build world-class teams. Develop hiring strategies.', ARRAY['HR', 'Recruiting', 'Talent'], NOW() - INTERVAL '15 days'),
('BambooHR', 'People Operations Specialist', 'Remote', 'Human Resource', 'Remote', 'Streamline HR processes and improve employee experience across the organization.', ARRAY['HR', 'Operations', 'Employee Experience'], NOW() - INTERVAL '25 days');
