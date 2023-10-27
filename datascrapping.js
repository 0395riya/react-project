const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');


const url = 'https://apna.co/jobs/full_time-jobs';
const qs = []
axios.get(url)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);

        // Find all the links (anchor tags) on the page
        const links = $('.JobCardList__Grid-sc-1v9ot9b-1.bZUXMN .JobListCardstyles__JobCardContainer-ffng7u-1.jpYcLj');

        // Extract the href attribute from each link and log it
        links.each((index, element) => {
            //   const href = $(element).attr('href');
            const title = $(element).find('.JobListCardstyles__JobTitle-ffng7u-7.cuaBGE').text().trim();

            const company = $(element).find('.JobListCardstyles__JobCompany-ffng7u-8.gguURM').text().trim();
            const location = $(element).find('.JobListCardstyles__ContentContainer-ffng7u-9.jgNAYT .JobListCardstyles__DisplayFlexCenter-ffng7u-10.fNeylV').eq(0).text().trim();
            // const skills = $('.job-single-head2 > span b').eq(0).text().trim();
            // const job_discription = $('.job-details p').text().trim();
            const min_salary_selection = $('.JobListCardstyles__ContentContainer-ffng7u-9.jgNAYT .JobListCardstyles__DisplayFlexCenter-ffng7u-10.fNeylV').eq(1).text().trim();
            const min_salary = parseInt(min_salary_selection.replace('₹', '').replace(/,/g, '') );
            // const min_salary = min_salary_match ? min_salary_match[0] : 0;
            const max_salary_selection = $('.JobListCardstyles__ContentContainer-ffng7u-9.jgNAYT .JobListCardstyles__DisplayFlexCenter-ffng7u-10.fNeylV').eq(1).text().trim();
            const max_salary_val = max_salary_selection.split(' - ') 
            const max_salary =parseInt( max_salary_val[1].replace('₹', '').replace(/,/g, ''));
            // const total_vacancy = $('.job-overview li span').eq(1).text().trim();
            // const industry = $('.job-overview li span').eq(3).text().trim();
            // const min_exp_selection = $('.job-overview li span').eq(4).text().trim();
            // const min_exp = min_exp_selection.match(/\d+/) ? min_exp_selection.match(/\d+/)[0] || 0 : 0;
            // const max_exp_selection = $('.job-overview li span').eq(4).text().trim();
            // const max_exp = max_exp_selection.match(/\d+/) ? max_exp_selection.replace(/^(\d+-)|\sYears/g, '') || 0: 0;

            // console.log('Page Title:', title)

            const jobData = {
                title: title,
                location: location,
                company: company,
                
                min_salary: min_salary,
                max_salary: max_salary,
               
            };

            qs.push(jobData);
        });

          console.log(qs);
    })
    .catch((error) => {
        console.error('Error fetching the webpage:', error);
    });