import React from 'react'
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection';

const Dashboard = () => {
    return (
        <div>
            {/* Search Section */}
            <SearchSection />

            {/* Templates Section */}
            <TemplateListSection />
        </div>
    )
}

export default Dashboard;