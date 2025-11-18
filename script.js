const skillButtons = document.querySelectorAll('.skill-btn');
const skillContent = document.getElementById('skill-content');

const skillDetails = {
    "aws": "Expertise in AWS services like EC2, RDS, S3, CloudFormation, GuardDuty, and CloudTrail. Designed and implemented scalable cloud infrastructure for DigiWorks Studio.",
    "cloud-architecture": "Created multi-AZ, VPC-based cloud architecture with load balancing, auto-scaling, and monitoring. Integrated disaster recovery and backup plans.",
    "stakeholder-management": "Collected client requirements, presented cloud migration plan, incorporated feedback, and aligned solutions with business needs and budget."
};

skillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = skillDetails[btn.dataset.content];
        skillContent.innerHTML = `<p>${content}</p>`;
    });
});
