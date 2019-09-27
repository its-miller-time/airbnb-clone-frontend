const seedData = [
    {
        company: 'Facebook',
        title: 'Software Engineer',
        payTier: '4',
        description: 'Help track people for the CIA...i mean Facebook.',
        salary_range:'3',
        years_of_experience: '4',
        location_city: 'Atlanta', 
        skills: '102,105,114,119,165,197,198,199,205,004,008',
        level_of_education: '3',
        sponsor_h1b: '1'
    },
    {
        company: 'Google',
        title: 'Machine Learning Engineer',
        description: 'Help us take over the world and make cars and stuff',
        salary_range:'5',
        years_of_experience: '7',
        location_city: 'San Francisco', 
        skills: '102,105,114,119,165,197,198,199,205,004,008',
        level_of_education: '4',
        sponsor_h1b: '1'
    },
    {
        company: "Bob's Home Tech Firm",
        title: 'Tech Guy',
        description: 'We do tech things and dont pay well',
        salary_range:'1',
        years_of_experience: '2',
        location_city: 'Seattle', 
        skills: '102,105,114,102,105,197,199,004,008,019,215,232',
        level_of_education: '1',
        sponsor_h1b: '2'
    }
]

export default(state=seedData,action) => {
    let newState = [...state]
    const p = action.payload
    switch(action.type) {
        case 'addPositionAction':
            const title = p.title
            const company = p.companyName
            const payTier = p.payTier
            const description = p.description
            newState.push({
                title,
                company,
                payTier,
                description
            })
            return newState
        default:
            return state
    }
}