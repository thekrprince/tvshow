import React, { useEffect, useState } from 'react';
import './Footer.css';

const About = () => {
    const [year, setYear] = useState(0);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div className="Footer">
            <p>
                Copyright &copy;
                {year} All rights reserved | This website is made with love by
                Prince
            </p>
        </div>
    );
};

export default About;
