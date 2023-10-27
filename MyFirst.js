// const PORT = 5000;
const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const app = express();  
const fs = require('fs');
// app.listen(PORT, () => console.log(`server running on port ${PORT}`));

const url = "https://www.jobhai.com/recruiter-hr-admin-assistant-hr-manager-job-in-renown-electrical-system-pvt-ltd-sector-3-noida-1-to-3-years-1689690195-2093962-jid";
let qs = [];
axios.get(url).then((res) => {
const $ = cheerio.load(res.data)
// console.log(res.data)
const Data = $('.MuiGrid-root.jss30.MuiGrid-container.MuiGrid-item');
Data.each(function(i, ind) {
   
    // console.log($(this).text());
    const title = $('.jss168 .jss169').text().trim();
    const company = $('.jss168 .jss171').text().trim();
    // const company_location = $('.col-lg-4.column .job-head-info span').text().trim();
    const location = $('.jss175 .jss172.jss176.jss178').text().trim();
    // const skills = $('.job-single-head2 > span b').text().trim();
    const job_discription = $('.jss256.jss280').text().trim();
    const salary = $('.jss175 .jss172.jss176  span b').text().trim();
    const digits = $('.jss181 ').eq(0).text().trim().match(/\d+/g);
    const total_vacancy = digits ? digits.join('') : '';
    const industry = $('.jss175 .jss172 span').contents().filter(function () {
        return this.nodeType === 3;
    }).text().trim().replace(/per month in /gi, '');

qs.push({data : { title: title,
    location: location,
    company: company,
    // company_location: company_location,
    // skills: skills,
    job_discription: job_discription,
    salary: salary,
    total_vacancy: total_vacancy,
    industry: industry,}})

console.log(qs);
    
})

// fs.writeFile('React.json', JSON.stringify(qs), (err) => {
//     if (err) throw err;
//     console.log('Data saved!');
//   });

}).catch((err) => {
    console.log(err);
})


