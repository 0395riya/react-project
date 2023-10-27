const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const { URL } = require('url');
const fs = require('fs')
const app = express();


const baseURL = "https://apna.co/jobs/full_time-jobs?page=";

// Function to scrape job information from an individual job URL
async function scrapeJobDetails(jobURL) {
  try {
    const res = await axios.get(jobURL);
    const $ = cheerio.load(res.data);

    // Extract job details from the page
    const title = $('.styles__TextJobTitle-sc-15yd6lj-4.gxrgA-d').text().trim();
    const company = $('.styles__TextJobCompany-sc-15yd6lj-5.fJuhTv').text().trim();
    const company_location = $('.styles__JobDetailSection-sc-1532ppx-12.fGuEza .styles__JobDetailBlockContainer-sc-1532ppx-4.bsAiYV .styles__JobDetailBlockValue-sc-1532ppx-3.gJbXgC').eq(4).text().trim();
    const location = $('.styles__TextJobArea-sc-15yd6lj-7.jwQXYc').text().trim();
    // const skills = $('.job-single-head2 > span b').eq(0).text().trim();
    const job_discription = $('styles__DescriptionText-sc-1532ppx-8.cQusFb p').text().trim();
    const min_salary_selection = $('.styles__TextJobSalary-sc-15yd6lj-8.dQfoXC').text().trim();
    const min_salary = parseInt(min_salary_selection.replace(/,/g, ''));

    const max_salary_selection = $('.styles__TextJobSalary-sc-15yd6lj-8.dQfoXC').text().trim();
    const max_salary_val = max_salary_selection.split(' - ')
    const max_salary = parseInt(max_salary_val[1].replace(/,/g, ''));
    // const total_vacancy = $('.job-overview li span ').eq(1).text().trim();

    // const industry = $('.job-overview li span').eq(3).text().trim();
    const min_exp_selection = $('.styles__JobDetailSection-sc-1532ppx-12.fGuEza .styles__JobDetailBlockContainer-sc-1532ppx-4.bsAiYV .styles__JobDetailBlockValue-sc-1532ppx-3.gJbXgC').eq(2).text().trim();
    const min_exp = min_exp_selection.match(/\d+/) ? min_exp_selection.match(/\d+/)[0]  : 0;
    const education = $('.styles__JobDetailSection-sc-1532ppx-12.fGuEza .styles__JobDetailBlockContainer-sc-1532ppx-4.bsAiYV .styles__JobDetailBlockValue-sc-1532ppx-3.gJbXgC').eq(0).text().trim();

    // const max_exp_selection = $('.job-overview li span').eq(4).text().trim();
    // const max_exp = max_exp_selection.match(/\d+/) ? max_exp_selection.replace(/^(\d+-)|\sYears/g, '') || 0 : 0;
    // const role = $('.job-single-head2 > span > b').eq(1).text().trim();


    // Store or process the extracted data as needed
    const jobData = {
      title: title,
      location: location,
      company: company,
      company_location: company_location,
      // skills: skills,
      job_discription: job_discription,
      min_salary: min_salary,
      max_salary: max_salary,
      // total_vacancy: total_vacancy,
      // industry: industry,
      min_exp: min_exp,
      education: education
      // max_exp: max_exp,
      // role: role
    };
    // console.log(jobData);
    return jobData;
    // You can save the data or perform other operations as required
  } catch (err) {
    console.log("Error fetching data:", err);
  }
}






async function scrapeAllPages(startPage, endPage) {
  try {
    const qs = []; // Initialize an array to store job data

    for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
      const pageURL = `${baseURL}${pageNumber}`;
      const res = await axios.get(pageURL);
      const $ = cheerio.load(res.data);

      const jobURLs = [];
      $('.JobCardList__Grid-sc-1v9ot9b-1.bZUXMN .JobListCardstyles__JobCardContainer-ffng7u-1.jpYcLj a').each((index, element) => {
        const jobURL = $(element).attr('href');

        
          jobURLs.push(jobURL);
        
          console.log(jobURLs);

        // jobURLs.push(jobURL);
      });





      // const uniqueJobURLs = new Set();
      // jobURLs.forEach((jobURL) => {
      //   const mainJobURL = jobURL.split('?')[0]; // Remove query parameters
      //   uniqueJobURLs.add(mainJobURL);
      // });

      // const uniqueJobURLArray = Array.from(uniqueJobURLs);
      // console.log(uniqueJobURLArray);
      // Use Promise.all to fetch job data from individual job URLs
      const jobDataList = await Promise.all(jobURLs.map(scrapeJobDetails));

      qs.push(...jobDataList);


    }

    // Save the data to a file
    // console.log(qs);
    // fs.writeFile('Jobs3.json', JSON.stringify(qs), (err) => {
    //   if (err) throw err;
    //   console.log('Data saved!');
    // });
  } catch (err) {
    console.log("Error scraping pages:", err);
  }
}

// Start scraping from page 1 and end page
scrapeAllPages(2, 3);
