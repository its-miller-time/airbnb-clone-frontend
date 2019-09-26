const seedData = [
        {
            id: 1,
            username: 'bjones',
            nameFirst: 'Bob',
            nameLast: 'Jones',
            email: 'bob.jones@people.com',
            phone: '777-777-7777',
            most_recent_job_role: 'Software Engineer',
            desired_job_role:'Software Engineer',
            years_of_experience: '4',
            desired_salary_range: '3',
            desired_location_city: 'Atlanta',
            skills: ['Python','JavaScript','SQL','HTML','CSS'],
            level_of_education: '3',
            candidate_summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            username: 'ssmith',
            nameFirst: 'Sue',
            nameLast: 'Smith',
            email: 'sue.smith@people.com',
            phone: '111-111-1111',
            most_recent_job_role: 'Business Development Rep',
            desired_job_role:'Software Engineer',
            years_of_experience: '1',
            desired_salary_range: '2',
            desired_location_city: 'San Francisco',
            skills: ['Team Building','Microsoft Office','Sales','Cold Calling'],
            level_of_education: '1',
            candidate_summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    
]

export default(state=seedData, action) => {
    console.log('candidate reducer running')
    let newState = [...state];
    const p = action.payload;
    switch(action.type) {
        case 'addCandidate':
            const nameFirst = p.nameFirst
            const nameLast = p.nameLast
            const email = p.email
            const phone = p.phone
            const most_recent_job_role = p.most_recent_job_role
            const desired_job_role = p.desired_job_role
            const years_of_experience = p.years_of_experience
            const desired_salary_range = p.desired_salary_range
            const desired_location_city = p.desired_location_city
            const skills = p.skills
            const level_of_education = p.level_of_education

            newState.push({
                nameFirst,
                nameLast,
                email,
                phone,
                most_recent_job_role,
                desired_job_role,
                years_of_experience,
                desired_salary_range,
                desired_location_city,
                skills,
                level_of_education
            })
            return newState
        default:
            return state
    }
}
